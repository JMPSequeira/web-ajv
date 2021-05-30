import { WebAjvError } from "../../index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const anyfy = (u: unknown): any => u;

export const isArr = (v: unknown): v is unknown[] => Array.isArray(v);

export const isObj = (v: unknown): v is Record<string, unknown> =>
    !!v && typeof v === "object" && !Array.isArray(v);

export const isNum = (v: unknown): v is number => typeof v === "number";

export const isStr = (v: unknown): v is string => typeof v === "string";

export const isNull = (v: unknown): v is null => v === null;

export const isDef = (v: unknown): v is undefined => v !== undefined;

export const e = (
    instancePath: string,
    schemaPath: string,
    keyword: string | Record<string, unknown>,
    params: Record<string, unknown>,
    message?: string,
    schema?: unknown,
    parentSchema?: Record<string, unknown>,
    data?: unknown
): WebAjvError => {
    return {
        instancePath,
        schemaPath,
        keyword: keyword as string,
        params,
        message,
        schema,
        parentSchema,
        data,
    };
};
