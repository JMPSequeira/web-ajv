import ValidationError from "ajv/dist/runtime/validation_error";
import {
    AjvValidationFn,
    AsyncAjvValidationFn,
    Out,
    ValidatorMap,
    WebAjvAsyncValidateFn,
    WebAjvError,
    WebAjvResult,
    WebAjvValidateFn,
} from "./types";

export function validatorFactory<
    Key extends string,
    Async extends true | false
>(validatorMap: ValidatorMap<Async>, async: Async): Out<Key, Async> {
    if (async) {
        return asyncValidatorFactory(validatorMap) as Out<Key, Async>;
    }

    return syncValidatorFactory(validatorMap as ValidatorMap<false>) as Out<
        Key,
        Async
    >;
}

function syncValidatorFactory<Key extends string>(validatorMap: {
    [x: string]: AjvValidationFn;
}): WebAjvValidateFn<Key> {
    return function <T>(schemaKey: Key, instance: T) {
        const validateFn: AjvValidationFn | undefined = validatorMap[schemaKey];

        if (!validateFn) {
            throw new Error(`No validator found for key: '${schemaKey}`);
        }

        return {
            success: validateFn(instance),
            errors: validateFn.errors || undefined,
            validated: instance,
        };
    };
}

function asyncValidatorFactory<Key extends string>(validatorMap: {
    [x: string]: AsyncAjvValidationFn | AjvValidationFn;
}): WebAjvAsyncValidateFn<Key> {
    return function <T>(schemaKey: Key, instance: T): Promise<WebAjvResult<T>> {
        const validateFn: AsyncAjvValidationFn | AjvValidationFn | undefined =
            validatorMap[schemaKey];

        if (!validateFn) {
            throw new Error(`No validator found for key: '${schemaKey}`);
        }

        const result = validateFn(instance);

        if (result instanceof Promise) {
            return result
                .then((data) => {
                    return {
                        success: true,
                        original: instance,
                        validated: data as T,
                    } as WebAjvResult<T>;
                })
                .catch((err) => {
                    if (err instanceof ValidationError) {
                        return {
                            success: false,
                            errors: err.errors as WebAjvError[] | undefined,
                            validated: instance,
                        };
                    }

                    throw err;
                });
        }

        return new Promise(() => {
            return {
                success: result,
                errors: (validateFn as AjvValidationFn).errors,
                validated: instance,
            };
        });
    };
}
