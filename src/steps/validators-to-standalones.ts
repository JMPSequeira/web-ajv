import { StandaloneStep, ValidatorStep } from "./types";
import standaloneCode from "ajv/dist/standalone";
import { Project } from "ts-morph";
import { replaceValidateFunctionsWithNamedConstants } from "../transforms/replace-validate-functions-with-named-constants";
import { replaceRequireWithImports } from "../transforms/replace-require-with-imports";
import { saveSource } from "./utils";
import { setTypeOnErrorCounters } from "../transforms/set-type-on-error-counters";
import { declareWrappersAfterFunctions } from "../transforms/declare-wrappers-after-functions";
import { renameSchemaConstants } from "../transforms/rename-schema-constants";
import { removeUnusedParameters } from "../transforms/remove-unused-parameters";
import { setTypeAnyOnVErrors } from "../transforms/set-type-any-on-verrors";

export function validatorsToStandalone(
    ...steps: ValidatorStep[]
): StandaloneStep[] {
    return steps.map(validatorToStandalone);
}

export function validatorToStandalone(step: ValidatorStep): StandaloneStep {
    const definitions = Object.keys(step.validator.schemas).filter(
        (s) => !step.validator.schemas[s]?.meta
    );
    const validatorMap = getValidatorMap(definitions);

    const original = standaloneCode(step.validator, validatorMap);

    const project = new Project();

    const sourceFile = project.createSourceFile(
        step.outFile,
        original.substr('"use strict;"'.length),
        {
            overwrite: false,
        }
    );

    sourceFile.transform(renameSchemaConstants);
    sourceFile.transform(replaceValidateFunctionsWithNamedConstants);
    sourceFile.transform(setTypeAnyOnVErrors);
    sourceFile.transform(setTypeOnErrorCounters);
    sourceFile.transform(declareWrappersAfterFunctions);
    sourceFile.transform(removeUnusedParameters);

    const imports: string[] = replaceRequireWithImports(sourceFile);
    const innerImports: string[] = ["validatorFactory"];

    if (step.isAsync) {
        innerImports.push("AsyncAjvValidationFn");
    }

    if (step.steps.some((s) => s.migrated.some((m) => !m.$async))) {
        innerImports.push("AjvValidationFn");
    }

    saveSource(sourceFile);
    const schemaId = `${step.validatorPrefix}SchemaId`;
    sourceFile.insertText(
        0,
        `${imports.join(";\r\n")}
import { ${innerImports.join(", ")} } from 'web-ajv';
export type ${schemaId} = ${definitions.map((d) => `"${d}"`).join("|")};

`
    );
    sourceFile.insertText(
        sourceFile.getEnd(),
        `
export const ${step.validatorPrefix}Validator = validatorFactory<${schemaId},${
            step.isAsync
        }>({${Object.keys(validatorMap)
            .map((k) => {
                const schema = k.substring("validate".length);

                return `${schema}: {validator:${k}, schema: ${`schema${schema}`}}`;
            })
            .join(",\r\n")}}, ${step.isAsync});
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
