import { AnySchemaObject } from "ajv";
import { Out, ValidatorMap, WebAjvError } from "./gen-lib/types";

export { Options } from "./steps/types";

export {
    WebAjvAsyncValidateFn,
    WebAjvValidateFn,
    WebAjvError,
    WebAjvResult,
    AsyncAjvValidationFn,
    AjvValidationFn,
} from "./gen-lib/types";

export declare function validatorFactory<
    Key extends string,
    Async extends true | false
>(validatorMap: ValidatorMap<Async>, async: Async): Out<Key, Async>;

export declare function anyfy(u: unknown): any;

export declare function e(
    instancePath: string,
    schemaPath: string,
    keyword: string | Record<string, unknown>,
    params: Record<string, unknown>,
    message?: string,
    schema?: unknown,
    parentSchema?: AnySchemaObject,
    data?: unknown
): WebAjvError;
