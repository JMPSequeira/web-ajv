import Ajv, {
    AnySchemaObject,
    CodeOptions,
    ErrorObject,
    Options as AjvOptions,
} from "ajv";
import { ErrorMessageOptions } from "ajv-errors";
import $jsonSchemaParser from "@apidevtools/json-schema-ref-parser";
import { OpenAPI } from "openapi-types";
import { FormatsPluginOptions } from "ajv-formats";

export type Options = {
    schemas: SchemaOptions | SchemaOptions[];
} & CommonOptions &
    ValidatorOptions;

export type RequiredEndpointOptions = Required<EndpointOptions>;

export type RequiredValidatorOptions = Required<ValidatorOptions> & {
    configFile: string;
};

export type ParsedOptions = {
    steps: {
        options: RequiredEndpointOptions;
    }[];
} & RequiredValidatorOptions;

export type ResolvedStep = {
    steps: {
        options: RequiredEndpointOptions;
        schema: UndefinedSchema;
    }[];
} & RequiredValidatorOptions;

export type MigratedStep = {
    steps: {
        options: RequiredEndpointOptions;
        schema: UndefinedSchema;
        migrated: AnySchemaObject[];
    }[];
} & RequiredValidatorOptions;

export type ValidatorStep = {
    validator: Ajv;
    isAsync: boolean;
} & MigratedStep;

export type StandaloneStep = {
    standalone: string;
    original: string;
} & ValidatorStep;

export type OptimizedStep = {
    optimized: string;
} & StandaloneStep;

export type EndpointOptions = {
    source: string;
} & CommonOptions;

export type Errors =
    | Partial<ErrorObject<string, Record<string, unknown>, unknown>>
    | null
    | undefined;

export type SchemaOptions = ConfigSchema | EndpointOptions;

export type ConfigSchema = {
    sources: EndpointOptions[];
} & CommonOptions;
export type NamingFormat = string | ((id: string) => string);
export type CommonOptions = {
    // Example: "prefix{SCHEMA}suffix"
    namingFormat?: NamingFormat;
    generateSubSchemas?: boolean;
    type?: "openapi" | "jsonschema";
};
export type TypeImportMap = {
    [x: string]: {
        [x: string]: undefined;
    };
};

export type Import = {
    [x: string]: undefined;
};
export type ValidatorOptions = {
    validatorPrefix: string;
    formats?: boolean;
    errors?: boolean;
    errorOptions?: ErrorMessageOptions;
    formatOptions?: FormatsPluginOptions;
    outFile: string;
    ajvOptions?: ExtendedAjvOptions;
    generateEnum?: boolean;
    keywords?: boolean;
    keywordsOptions: string | string[];
};

export type ExtendedAjvOptions = AjvOptions & {
    code?: Omit<CodeOptions, "source">;
};

export type ResolverResult = [RequiredEndpointOptions, UndefinedSchema];

export type UndefinedSchema =
    | OpenAPI.Document<unknown>
    | $jsonSchemaParser.JSONSchema;
