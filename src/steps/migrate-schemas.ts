import { OpenAPIV2, OpenAPIV3 } from "openapi-types";
import toDraft4 from "@openapi-contrib/openapi-schema-to-json-schema";
import {
    MigratedStep,
    NamingFormat,
    RequiredEndpointOptions,
    ResolvedStep,
    UndefinedSchema,
} from "./types";
import _ from "lodash";
import { AnySchemaObject } from "ajv";
import { getNameFromSource, traverseObject } from "./utils";
import { JSONSchema4, JSONSchema7 } from "json-schema";
import migrate = require("json-schema-migrate");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const swagger2openapi = require("swagger2openapi");

export async function migrateSchemas(
    ...steps: ResolvedStep[]
): Promise<MigratedStep[]> {
    return await Promise.all(steps.map(migrateSchema));
}

export async function migrateSchema(
    resolved: ResolvedStep
): Promise<MigratedStep> {
    const steps = await Promise.all(
        resolved.steps.map(async (step) => {
            const migrated = await migrateStepSchemas(
                step,
                resolved.validatorPrefix
            );

            ensureUniqueIds(migrated);

            return {
                ...step,
                migrated,
            };
        })
    );

    return {
        ...resolved,
        steps: steps,
    };
}

function isOpenApi3(schema: UndefinedSchema): schema is OpenAPIV3.Document {
    return !!(schema as OpenAPIV3.Document).openapi;
}

function isOpenApi2(schema: UndefinedSchema): schema is OpenAPIV2.Document {
    return !!(schema as OpenAPIV2.Document).swagger;
}

function convertSchemas(
    schemaStructures: { [key: string]: Record<string | number, unknown> },
    namingFormat: NamingFormat
) {
    return Object.keys(schemaStructures).map((s) => {
        const old = _.cloneDeep(schemaStructures[s]);
        if (old) {
            (old as JSONSchema7)["$id"] = transformName(s, namingFormat);

            const asDraft04 = toDraft4(old);

            traverseObject(asDraft04, (k, o) => {
                if (k === "$ref") {
                    o[k] = o[k]?.replace(
                        /#\/components\/schemas\/([^,]+)/,
                        "$1"
                    );
                }
            });
            return asDraft04 as JSONSchema4;
        }
        return null;
    });
}
function transformName(id: string, namingFormat: NamingFormat): string {
    const result =
        typeof namingFormat === "string"
            ? namingFormat.replace("{SCHEMA}", id)
            : namingFormat(id);
    return result || "Schema";
}
async function migrateStepSchemas(
    step: {
        options: RequiredEndpointOptions;
        schema: UndefinedSchema;
    },
    prefix: string
) {
    const migrated: JSONSchema7[] = [];

    let schema = step.schema;

    if (step.options.type === "openapi") {
        if (isOpenApi2(schema)) {
            schema = (await swagger2openapi.convertObj(schema, {})).openapi;
        }

        if (isOpenApi3(schema)) {
            if (schema.components?.schemas) {
                const draft4 = convertSchemas(
                    schema.components.schemas as {
                        [x: string]: Record<string | number, unknown>;
                    },
                    step.options.namingFormat
                );
                migrate.draft2020(draft4);
                migrated.push(...(draft4 as JSONSchema7[]));
            }
        }
    } else {
        const id = (schema as JSONSchema7).$id;

        (schema as JSONSchema7).$id = id
            ? transformName(id, step.options.namingFormat)
            : prefix;

        const old = _.cloneDeep(schema);

        migrate.draft2020(old);

        migrated.push(old as JSONSchema7);
    }

    migrated.forEach(migrate.draft2020);

    return migrated.reduce((schemas, jsonschema) => {
        if (
            jsonschema.type ||
            jsonschema.$ref ||
            jsonschema.allOf ||
            jsonschema.anyOf ||
            jsonschema.oneOf
        ) {
            schemas.push(jsonschema);
        }

        if (step.options.type === "jsonschema") {
            if (jsonschema.definitions) {
                if (step.options.generateSubSchemas) {
                    Object.keys(jsonschema.definitions).forEach((key) => {
                        if (jsonschema.definitions) {
                            const subSchema = jsonschema.definitions[key];

                            if (subSchema && typeof subSchema !== "boolean") {
                                subSchema.$id = transformName(
                                    subSchema.$id
                                        ? getNameFromSource(subSchema.$id) ||
                                              key
                                        : key,
                                    step.options.namingFormat
                                );

                                traverseObject(jsonschema, (k, o) => {
                                    if (
                                        k === "$ref" &&
                                        o[k] === `#/definitions/${key}`
                                    ) {
                                        o[k] = subSchema.$id;
                                    }
                                });

                                schemas.push(subSchema);
                            }
                        }
                    });
                    delete jsonschema.definitions;
                }
            } else if (!schemas.length) {
                schemas.push(jsonschema);
            }
        }

        return schemas;
    }, [] as AnySchemaObject[]);
}
function ensureUniqueIds(migrated: AnySchemaObject[]) {
    const ids: string[] = [];
    let last: string | undefined = "";
    if (
        migrated.some((m) =>
            m.$id
                ? ids.includes((last = m.$id))
                    ? true
                    : !ids.push(last)
                : false
        )
    ) {
        throw Error(`'${last}' is found as repeated $id`);
    }
}
