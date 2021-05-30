import { Out, ValidatorMap } from "./src/gen-lib/types";

export { Options } from "./src/steps/types";

export {
    WebAjvAsyncValidateFn,
    WebAjvValidateFn,
    WebAjvError,
    WebAjvResult,
    AsyncAjvValidationFn,
    AjvValidationFn,
} from "./src/gen-lib/types";

export declare function validatorFactory<
    Key extends string,
    Async extends true | false
>(validatorMap: ValidatorMap<Async>, async: Async): Out<Key, Async>;

export declare function anyfy(u: unknown): any;
