import { StandaloneStep, ValidatorStep } from "./types";
import standaloneCode from "ajv/dist/standalone";
import { Project } from "ts-morph";
import { replaceValidateFunctionsWithNamedConstants } from "../transforms/replace-validate-functions-with-named-constants";
import { replaceRequireWithImports } from "../transforms/replace-require-with-imports";
import { saveSource } from "./utils";
import { setTypeOnErrorCounters } from "../transforms/set-type-on-error-counters";
import paths from "../paths/paths";
import { declareWrappersAfterFunctions } from "../transforms/declare-wrappers-after-functions";
import { renameSchemaConstants } from "../transforms/rename-schema-constants";

export function validatorsToStandalone(
    ...steps: ValidatorStep[]
): StandaloneStep[] {
    return steps.map(validatorToStandalone);
}

export function validatorToStandalone(step: ValidatorStep): StandaloneStep {
    //Filter out meta schemas
    const definitions = Object.keys(step.validator.schemas).filter((s) =>
        /^[a-zA-Z_$][a-zA-Z_0-9$]*$/.test(s)
    );

    const validatorMap = getValidatorMap(definitions);

    const original = standaloneCode(step.validator, validatorMap);

    const project = new Project();

    const sourceFile = project.createSourceFile(
        step.outFile,
        original.substr('"use strict;"'.length)
    );

    sourceFile.transform(renameSchemaConstants);
    sourceFile.transform(replaceValidateFunctionsWithNamedConstants);
    sourceFile.transform(setTypeOnErrorCounters);
    sourceFile.transform(declareWrappersAfterFunctions);

    const imports: string[] = replaceRequireWithImports(sourceFile);
    const innerImports: string[] = ["validatorFactory"];

    if (imports.length) {
        innerImports.push("anyfy");
    }

    if (step.isAsync) {
        innerImports.push("AsyncAjvValidationFn");
    }

    if (step.steps.some((s) => s.migrated.some((m) => !m.$async))) {
        innerImports.push("AjvValidationFn");
    }

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
            .map((k) => {
                const schema = k.substring("validate".length);

                return `${schema}: {validator:${k}, schema: ${`schema${schema}`}}`;
            })
            .join(",\r\n")}}, ${step.isAsync ? "true" : "false"});
`
    );

    saveSource(sourceFile);

    return {
        ...step,
        standalone: `/* eslint-disable */\r\n${sourceFile.getText()}`,
        original: `/* eslint-disable */\r\n${original}`,
    };
}

function getValidatorMap(definitions: string[]) {
    return definitions.reduce((o, n) => {
        o["validate" + n] = n;
        return o;
    }, {} as { [key: string]: string });
}
