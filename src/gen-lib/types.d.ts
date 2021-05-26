/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorObject } from "ajv";

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

export type WebAjvValidateFn<Key> = <T>(
    schemaKey: Key,
    instance: T
) => WebAjvResult<T>;

export type WebAjvAsyncValidateFn<Key> = <T>(
    schemaKey: Key,
    instance: T
) => Promise<WebAjvResult<T>>;

export type WebAjvError = ErrorObject<string, Record<string, unknown>, unknown>;

export type AjvValidationFn = ((data: any, ctx?: ValidationCtx) => boolean) & {
    errors?: WebAjvError[];
};

export type AsyncAjvValidationFn = (
    data: any,
    ctx?: ValidationCtx
) => Promise<any>;

export type Out<Key, T> = T extends true
    ? WebAjvAsyncValidateFn<Key>
    : WebAjvValidateFn<Key>;

export type ValidatorMap<Async> = {
    [x: string]: Async extends true
        ? AjvValidationFn | AsyncAjvValidationFn
        : AjvValidationFn;
};
