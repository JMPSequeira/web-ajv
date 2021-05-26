import Ajv, { AnySchemaObject, CodeKeywordDefinition } from "ajv";
import ajvErrors from "ajv-errors";
import ajvFormats from "ajv-formats";
import ajvKeywords from "ajv-keywords";
import { MigratedStep, ValidatorStep } from "./types";
import { traverseObject } from "./utils";

export function schemasToValidators(...steps: MigratedStep[]): ValidatorStep[] {
    return steps.map(schemaToValidator);
}

export function schemaToValidator(step: MigratedStep): ValidatorStep {
    let ajv = new Ajv(step.ajvOptions);

    const schemas = step.steps.reduce((p, s) => {
        p.push(
            ...s.migrated.map((m) => {
                delete m.$schema;
                return m;
            })
        );
        return p;
    }, [] as AnySchemaObject[]);

    if (step.errors) {
        ajv = ajvErrors(ajv, step.errorOptions);
    }

    if (step.formats || step.steps.some((s) => s.options.type === "openapi")) {
        ajv = ajvFormats(ajv, step.formatOptions);
    }

    if (step.keywords) {
        ajv = ajvKeywords(ajv, step.keywordsOptions);
    }

    const asyncKeywords = [
        ...(step.ajvOptions.keywords?.filter(isAsync) || []),
    ];

    const schemaMap = schemas.reduce((p, schema) => {
        if (schema.$id) {
            p[schema.$id] = {
                schema,
                referencedBy: schemas
                    .filter((s) => {
                        if (s === schema) {
                            return false;
                        }
                        let refs = false;

                        traverseObject(s, (key, o) => {
                            if (key === "$ref" && o[key] === schema.$id) {
                                return (refs = true);
                            }
                            return;
                        });
                        return refs;
                    })
                    .map((s) => s.$id)
                    .filter((s) => s) as string[],
            };
        }
        return p;
    }, {} as { [x: string]: { schema: AnySchemaObject; referencedBy: string[] } });

    let asyncCounter = 0;

    const markAsync = (
        s: { schema: AnySchemaObject; referencedBy: string[] },
        others: {
            [x: string]: { schema: AnySchemaObject; referencedBy: string[] };
        }
    ) => {
        if (s.schema.$async) {
            return;
        }
        s.schema.$async = true as false;
        asyncCounter++;
        s.referencedBy.forEach((referenceKey) => {
            const other = others[referenceKey];

            if (other) {
                markAsync(other, others);
            }
        });
    };

    while (asyncKeywords?.length && schemas.length !== asyncCounter) {
        const keywordDef = asyncKeywords.pop();

        const keyword = keywordDef?.keyword;

        for (const key in schemaMap) {
            let async = false;
            const candidate = schemaMap[key];

            if (candidate && keyword) {
                traverseObject(candidate.schema, (k) => {
                    if (k === keyword) {
                        return (async = true);
                    }
                    return;
                });

                if (async) {
                    markAsync(candidate, schemaMap);
                }
            }
        }
    }

    ajv.addSchema(schemas);

    return {
        ...step,
        validator: ajv,
        isAsync: asyncCounter > 0,
    };
}
function isAsync(k: unknown): k is CodeKeywordDefinition {
    return (k as Record<string, boolean>)["async"] || false;
}
