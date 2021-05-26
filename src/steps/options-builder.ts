import {
    CommonOptions,
    SchemaOptions,
    ConfigSchema,
    RequiredEndpointOptions,
    ValidatorOptions,
    EndpointOptions,
    Options,
    ParsedOptions,
    RequiredValidatorOptions,
    ExtendedAjvOptions,
} from "./types";
import path from "path";
import { Options as AjvOptions } from "ajv";

const defaultValidatorOptions: Partial<ValidatorOptions> = {
    ajvOptions: {
        code: {
            source: true,
        },
    },
    errors: false,
    formats: false,
    validatorPrefix: "validator",
};

const defaultEndpoint: Partial<EndpointOptions> = {
    namingFormat: "{SCHEMA}",
    generateSubSchemas: true,
};

export function optionsBuilder(...sources: string[]): ParsedOptions[] {
    return sources.map(optionsMapper);
}

export function optionsMapper(source: string): ParsedOptions {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const options: Options = require(path.join(process.cwd(), source));

    const validatorOptions = mergeValidatorOptions(options, source);

    const commonOptions = mergeCommonOptions(options, defaultEndpoint);

    const parsed: ParsedOptions = {
        ...validatorOptions,
        steps: getEndpointOptions(options.schemas, commonOptions, source).map(
            (options) => {
                return {
                    options,
                };
            }
        ),
        configFile: source,
    };

    return validate(parsed);
}

function getEndpointOptions(
    target: SchemaOptions | SchemaOptions[],
    source: CommonOptions,
    configFile: string
): RequiredEndpointOptions[] {
    if (Array.isArray(target)) {
        return target.reduce((p, s) => {
            p.push(...getEndpointOptions(s, source, configFile));
            return p;
        }, [] as RequiredEndpointOptions[]);
    } else if (isConfigSchema(target)) {
        return getEndpointOptions(
            target.sources,
            mergeCommonOptions(target, source),
            configFile
        );
    }
    return [
        {
            ...mergeCommonOptions(target, source),
            source: target.source,
        },
    ];
}

function isConfigSchema(target: {
    [x: string]: unknown;
}): target is ConfigSchema {
    return !!target["sources"];
}

function mergeValidatorOptions<T extends ValidatorOptions>(
    target: T,
    configFile: string
): RequiredValidatorOptions {
    return {
        configFile,
        outFile: getOutFile(target.outFile, configFile),
        ajvOptions: mergeAjvOptions(target.ajvOptions),
        errors: target.errors || defaultValidatorOptions.errors || false,
        formats: target.formats || defaultValidatorOptions.formats || false,
        validatorPrefix: getValidatorPrefix(target, configFile),
        errorOptions: target.errorOptions || {},
        formatOptions: target.formatOptions || {},
        generateEnum: target.generateEnum || false,
        keywords: target.keywords || false,
        keywordsOptions: target.keywordsOptions,
    };
}

function validate(options: ParsedOptions): ParsedOptions {
    options.steps.forEach((s) => {
        if (!s.options.source) {
            throw new Error(`${options.configFile} is missing some endpoints.`);
        } else if (!["jsonschema", "openapi"].includes(s.options.type)) {
            throw new Error(
                `${options.configFile} for source ${s.options.source} does not specify a valid type: ${s.options.type}`
            );
        }
    });
    return options;
}

function mergeCommonOptions(
    options: CommonOptions,
    source: CommonOptions
): Required<CommonOptions> {
    return {
        generateSubSchemas:
            options.generateSubSchemas || source.generateSubSchemas || false,
        namingFormat: options.namingFormat || source.namingFormat || "{SCHEMA}",
        type: options.type || source.type || "jsonschema",
    };
}
function mergeAjvOptions(extendedOptions?: AjvOptions): ExtendedAjvOptions {
    let options: AjvOptions = {
        code: {
            source: true,
            optimize: 3,
        },
    };

    if (extendedOptions) {
        if (extendedOptions.code) {
            options.code = {
                ...extendedOptions.code,
                ...options.code,
            };
        }
        options = {
            ...extendedOptions,
            ...options,
        };
    }

    return options;
}
function getOutFile(outFile: string, configFile: string): string {
    if (!outFile) throw new Error(`${configFile} does not contain an outFile`);
    return outFile;
}
function getValidatorPrefix<T extends ValidatorOptions>(
    target: T,
    configFile: string
): string {
    if (!target.validatorPrefix)
        throw new Error(`${configFile} does not contain a validatorPrefix`);
    return target.validatorPrefix;
}
