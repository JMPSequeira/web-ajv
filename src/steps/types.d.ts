import Ajv, { AnySchemaObject, ErrorObject } from "ajv";
import $jsonSchemaParser from "@apidevtools/json-schema-ref-parser";
import { OpenAPI } from "openapi-types";
import { EndpointOptions, ValidatorOptions } from "../../index";

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

export type Errors =
    | Partial<ErrorObject<string, Record<string, unknown>, unknown>>
    | null
    | undefined;

export type TypeImportMap = {
    [x: string]: {
        [x: string]: undefined;
    };
};

export type Import = {
    [x: string]: undefined;
};

export type ResolverResult = [RequiredEndpointOptions, UndefinedSchema];

export type UndefinedSchema =
    | OpenAPI.Document<unknown>
    | $jsonSchemaParser.JSONSchema;
