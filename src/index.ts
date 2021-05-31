import ValidationError from "ajv/dist/runtime/validation_error";
import { AnySchema } from "ajv";
import {
    AjvValidationFn,
    AsyncAjvValidationFn,
    Out,
    ValidatorMap,
    WebAjvAsyncValidateFn,
    WebAjvError,
    WebAjvResult,
    WebAjvValidateFn,
} from "../index";

export function validatorFactory<
    Key extends string,
    Async extends true | false
>(validatorMap: ValidatorMap<Async>, async: Async): Out<Key, Async> {
    const func = async
        ? (asyncValidatorFactory(validatorMap as ValidatorMap<true>) as Out<
              Key,
              Async
          >)
        : (syncValidatorFactory(validatorMap as ValidatorMap<false>) as Out<
              Key,
              Async
          >);

    func.getSchema = (key: Key) => validatorMap[key]?.schema as AnySchema;

    return func;
}

function syncValidatorFactory<Key extends string>(
    validatorMap: ValidatorMap<false>
): Omit<WebAjvValidateFn<Key>, "getSchema"> {
    return function <T>(schemaKey: Key, instance: T) {
        const validateFn: AjvValidationFn | undefined =
            validatorMap[schemaKey]?.validator;

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

function asyncValidatorFactory<Key extends string>(
    validatorMap: ValidatorMap<true>
): Omit<WebAjvAsyncValidateFn<Key>, "getSchema"> {
    return function <T>(schemaKey: Key, instance: T): Promise<WebAjvResult<T>> {
        const validateFn: AsyncAjvValidationFn | AjvValidationFn | undefined =
            validatorMap[schemaKey]?.validator;

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

        return Promise.resolve({
            success: result,
            errors: (validateFn as AjvValidationFn).errors,
            validated: instance,
        });
    };
}
