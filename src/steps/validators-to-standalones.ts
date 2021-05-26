import { StandaloneStep, ValidatorStep } from "./types";
import standaloneCode from "ajv/dist/standalone";
import { Project } from "ts-morph";
import { refactorNestedValidatorErrors } from "../transforms/refactor-nested-validator-errors";
import { replaceErrorLiteralWithECall } from "../transforms/replace-error-literal-with-e-call";
import { pushErrorsToVErrors } from "../transforms/push-errors-to-verrors";
import { replaceValidateFnsWithNamedConst } from "../transforms/replace-validate-fns-with-named-consts";
import { makeSchemaAccessConstants } from "../transforms/make-schema-accesses-constants";
import { replaceRequireWithImports } from "../transforms/replace-require-with-imports";
import { saveSource } from "./utils";
import { removeEmptyElses } from "../transforms/remove-empty-elses";
import { removeEmptyStatements } from "../transforms/remove-empty-statements";
import { removeUnreachableCode } from "../transforms/remove-unreachable-code";
import { setTypeOnErrorCounters } from "../transforms/set-type-on-error-counters";
import { removeIfCheckAfter_errsAssignment } from "../transforms/remove-if-check-after-_errs-assignment";
import paths from "../paths/paths";
import { initializeVErrorsToArray } from "../transforms/initialize-verrors-to-array";
import { refactorValidateErrorsToVErrors } from "../transforms/refactor-validate-errors-assigment";

export function validatorsToStandalone(
    ...steps: ValidatorStep[]
): StandaloneStep[] {
    return steps.map(validatorToStandalone);
}

export function validatorToStandalone(step: ValidatorStep): StandaloneStep {
    const definitions = Object.keys(step.validator.schemas).slice(1);

    const validatorMap = getValidatorMap(definitions);

    const standaloneString = standaloneCode(
        step.validator,
        validatorMap
    ).substr('"use strict";'.length);

    const project = new Project();

    const sourceFile = project.createSourceFile("temp.ts", standaloneString);

    sourceFile.fixUnusedIdentifiers();

    sourceFile.transform(removeIfCheckAfter_errsAssignment);
    sourceFile.transform(removeIfCheckAfter_errsAssignment);
    sourceFile.transform(makeSchemaAccessConstants);
    sourceFile.transform(refactorValidateErrorsToVErrors);
    sourceFile.transform(replaceErrorLiteralWithECall);
    sourceFile.transform(pushErrorsToVErrors);
    sourceFile.transform(initializeVErrorsToArray);
    sourceFile.transform(replaceValidateFnsWithNamedConst);
    sourceFile.transform(refactorNestedValidatorErrors);
    sourceFile.transform(setTypeOnErrorCounters);
    sourceFile.transform(removeEmptyStatements);
    sourceFile.transform(removeEmptyElses);
    sourceFile.transform(removeUnreachableCode);

    const imports: string[] = replaceRequireWithImports(sourceFile);
    const innerImports: string[] = ["e", "validatorFactory", "WebAjvError"];

    if (imports.length) {
        innerImports.push("anyfy");
    }

    if (step.isAsync) {
        innerImports.push("AsyncAjvValidationFn");
    }

    if (step.steps.some((s) => s.migrated.some((m) => !m.$async))) {
        innerImports.push("AjvValidationFn");
    }
    sourceFile.fixUnusedIdentifiers();

    saveSource(sourceFile);
    sourceFile.insertText(
        0,
        `${imports.join(";\r\n")}
import { ${innerImports.join(", ")} } from '${paths.webajv}';
export type ${step.validatorPrefix}SchemaId = ${definitions
            .map((d) => `"${d}"`)
            .join("|")};
            
`
    );
    sourceFile.insertText(
        sourceFile.getEnd(),
        `
export const ${step.validatorPrefix}Validator = validatorFactory({${Object.keys(
            validatorMap
        )
            .map((k) => `${k.substring("validate".length)}: ${k}`)
            .join()}}, ${step.isAsync ? "true" : "false"});
    `
    );

    sourceFile.fixUnusedIdentifiers();

    saveSource(sourceFile);

    return {
        ...step,
        standalone: `/* eslint-disable */\r\n${sourceFile.getText()}`,
    };
}

function getValidatorMap(definitions: string[]) {
    return definitions.reduce((o, n) => {
        o["validate" + n] = n;
        return o;
    }, {} as { [key: string]: string });
}
