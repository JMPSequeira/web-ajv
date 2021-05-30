/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorObject, AnySchema, Schema } from "ajv";

export type ValidationCtx = {
    instancePath?: string;
    rootData?: any;
    parentData?: string;
    parentDataProperty?: any;
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
