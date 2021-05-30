import { CodeOptions, Options as AjvOptions } from "ajv";
import { ErrorMessageOptions } from "ajv-errors";
import { FormatsPluginOptions } from "ajv-formats";
import { ErrorObject, AnySchema, Schema } from "ajv";

export declare function validatorFactory<
    Key extends string,
    Async extends true | false
>(validatorMap: ValidatorMap<Async>, async: Async): Out<Key, Async>;

export declare function anyfy(u: unknown): any;

export type Options = {
    schemas: SchemaOptions | SchemaOptions[];
} & CommonOptions &
    ValidatorOptions;

export type ExtendedAjvOptions = AjvOptions & {
    code?: Omit<CodeOptions, "source">;
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
export type EndpointOptions = {
    source: string;
} & CommonOptions;
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

export type ValidationCtx = {
    instancePath?: string;
    rootData?: unknown;
    parentData?: string;
    parentDataProperty?: unknown;
};

export type WebAjvResult<T> = {
    success: boolean;
    errors?: WebAjvError[];
    validated: T;
};

export type WebAjvValidateFn<Key> = Validator<Key, false>;

export type WebAjvAsyncValidateFn<Key> = Validator<Key, true>;

export type Validator<Key, Async> = (<T>(
    key: Key,
    instance: T
) => Async extends true ? Promise<WebAjvResult<T>> : WebAjvResult<T>) & {
    getSchema(key: Key): Async extends true ? AnySchema : Schema;
};

export type WebAjvError = ErrorObject<string, Record<string, unknown>, unknown>;

export type AjvValidationFn = (<T>(data: T, ctx?: ValidationCtx) => boolean) & {
    errors?: WebAjvError[];
};

export type AsyncAjvValidationFn = <T>(
    data: T,
    ctx?: ValidationCtx
) => Promise<T>;

export type Out<Key, T> = T extends true
    ? WebAjvAsyncValidateFn<Key>
    : WebAjvValidateFn<Key>;

export type ValidatorMap<Async> = {
    [x: string]: {
        validator: Async extends true
            ? AjvValidationFn | AsyncAjvValidationFn
            : AjvValidationFn;
        schema: Async extends true ? AnySchema : Schema;
    };
};
