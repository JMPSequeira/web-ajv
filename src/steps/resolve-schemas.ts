import $jsonSchemaParser, {
    HTTPResolverOptions,
} from "@apidevtools/json-schema-ref-parser";
import $openApiParser from "@apidevtools/swagger-parser";
import { ParsedOptions, ResolvedStep } from "./types";

const parserOptions: $jsonSchemaParser.Options = {
    dereference: {
        circular: false,
    },
    resolve: {
        http: {
            timeout: 20000,
        } as HTTPResolverOptions,
    },
};

export async function resolveSchemas(
    ...options: ParsedOptions[]
): Promise<ResolvedStep[]> {
    return await Promise.all(options.map(resolveSchema));
}

export async function resolveSchema(
    options: ParsedOptions
): Promise<ResolvedStep> {
    const steps = await Promise.all(
        options.steps.map(async (step) => {
            const schema = await (step.options.type === "jsonschema"
                ? $jsonSchemaParser.bundle(step.options.source, parserOptions)
                : $openApiParser.bundle(step.options.source, parserOptions));
            return {
                ...step,
                schema,
            };
        })
    );

    return {
        ...options,
        steps,
    };
}
