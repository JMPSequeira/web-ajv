/* eslint-disable */
import { fullFormats } from "ajv-formats/dist/formats";
import Error0 from "ajv/dist/runtime/validation_error";
import func4 from "ajv/dist/runtime/ucs2length"
import { e, validatorFactory, WebAjvError, anyfy, AsyncAjvValidationFn, AjvValidationFn } from './web-ajv';
export type OpenApi3SchemaId = "Dummy"|"Item"|"Nested"|"Sample";
            
const isUndefined= (v: unknown): v is undefined => v === undefined;
const isNull= (v: unknown): v is null => v === null;
const isStr= (v: unknown): v is string => typeof v === "string";
const isObj= (v: unknown): v is any => !!v && typeof v === "object" && !Array.isArray(v);
const isNum= (v: unknown): v is number => typeof v === "number";
const isArr= Array.isArray
const _constants = { schema11: { [".properties.name.type"]: ["string", "null"], [".properties.items.type"]: ["array", "null"] }, schema14: { [".properties.age.type"]: ["string", "null"] } };
const formats0 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
const formats2 = anyfy(fullFormats)["date-time"];
const formats4 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const validateDummy: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (isObj(data)) {
        for (const key0 in data) {
            if (!((key0 === "name") || (key0 === "items"))) {
                validateDummy.errors = [e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 })];
                return false;
            }
        }
        if (!isUndefined(data.name)) {
            let data0 = data.name;
            if ((isStr(data0)) && (!isNull(data0))) {
                validateDummy.errors = [e(instancePath + "/name", "#/properties/name/type", "type", { type: _constants.schema11[".properties.name.type"] })];
                return false;
            }
        }
        else {
            var valid0 = true;
        }
        if (valid0) {
            if (!isUndefined(data.items)) {
                let data1 = data.items;
                if ((!(isArr(data1))) && (!isNull(data1))) {
                    validateDummy.errors = [e(instancePath + "/items", "#/properties/items/type", "type", { type: _constants.schema11[".properties.items.type"] })];
                    return false;
                }
                if (isArr(data1)) {
                    const len0 = data1.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                        let data2 = data1[i0];
                        if (isObj(data2)) {
                            let missing0;
                            if ((((data2.deliveredOn === undefined) && (missing0 = "deliveredOn")) || ((data2.emailAddress === undefined) && (missing0 = "emailAddress"))) || ((data2.id === undefined) && (missing0 = "id"))) {
                                validateDummy.errors = [e(instancePath + "/items/" + i0, "Item/required", "required", { missingProperty: missing0 })];
                                return false;
                            }
                            else {
                                for (const key1 in data2) {
                                    if (!(((key1 === "id") || (key1 === "deliveredOn")) || (key1 === "emailAddress"))) {
                                        validateDummy.errors = [e(instancePath + "/items/" + i0, "Item/additionalProperties", "additionalProperties", { additionalProperty: key1 })];
                                        return false;
                                    }
                                }
                                if (!isUndefined(data2.id)) {
                                    let data3 = data2.id;
                                    if (isStr(data3)) {
                                        if (!(formats0.test(data3))) {
                                            validateDummy.errors = [e(instancePath + "/items/" + i0 + "/id", "Item/properties/id/format", "format", { format: "uuid" })];
                                            return false;
                                        }
                                    }
                                    else {
                                        validateDummy.errors = [e(instancePath + "/items/" + i0 + "/id", "Item/properties/id/type", "type", { type: "string" })];
                                        return false;
                                    }
                                }
                                else {
                                    var valid3 = true;
                                }
                                if (valid3) {
                                    if (!isUndefined(data2.deliveredOn)) {
                                        let data4 = data2.deliveredOn;
                                        if (isStr(data4)) {
                                            if (!(formats2.validate(data4))) {
                                                validateDummy.errors = [e(instancePath + "/items/" + i0 + "/deliveredOn", "Item/properties/deliveredOn/format", "format", { format: "date-time" })];
                                                return false;
                                            }
                                        }
                                        else {
                                            validateDummy.errors = [e(instancePath + "/items/" + i0 + "/deliveredOn", "Item/properties/deliveredOn/type", "type", { type: "string" })];
                                            return false;
                                        }
                                    }
                                    else {
                                        var valid3 = true;
                                    }
                                    if (valid3) {
                                        if (!isUndefined(data2.emailAddress)) {
                                            let data5 = data2.emailAddress;
                                            if (isStr(data5)) {
                                                if (!(formats4.test(data5))) {
                                                    validateDummy.errors = [e(instancePath + "/items/" + i0 + "/emailAddress", "Item/properties/emailAddress/format", "format", { format: "email" })];
                                                    return false;
                                                }
                                            }
                                            else {
                                                validateDummy.errors = [e(instancePath + "/items/" + i0 + "/emailAddress", "Item/properties/emailAddress/type", "type", { type: "string" })];
                                                return false;
                                            }
                                        }
                                        else {
                                            var valid3 = true;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            validateDummy.errors = [e(instancePath + "/items/" + i0, "Item/type", "type", { type: "object" })];
                            return false;
                        }
                        break;
                    }
                }
            }
        }
    }
    else {
        validateDummy.errors = [e(instancePath, "#/type", "type", { type: "object" })];
        return false;
    }
    validateDummy.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateItem: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (isObj(data)) {
        let missing0;
        if ((((data.deliveredOn === undefined) && (missing0 = "deliveredOn")) || ((data.emailAddress === undefined) && (missing0 = "emailAddress"))) || ((data.id === undefined) && (missing0 = "id"))) {
            validateItem.errors = [e(instancePath, "#/required", "required", { missingProperty: missing0 })];
            return false;
        }
        else {
            for (const key0 in data) {
                if (!(((key0 === "id") || (key0 === "deliveredOn")) || (key0 === "emailAddress"))) {
                    validateItem.errors = [e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 })];
                    return false;
                }
            }
            if (!isUndefined(data.id)) {
                let data0 = data.id;
                if (isStr(data0)) {
                    if (!(formats0.test(data0))) {
                        validateItem.errors = [e(instancePath + "/id", "#/properties/id/format", "format", { format: "uuid" })];
                        return false;
                    }
                }
                else {
                    validateItem.errors = [e(instancePath + "/id", "#/properties/id/type", "type", { type: "string" })];
                    return false;
                }
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (!isUndefined(data.deliveredOn)) {
                    let data1 = data.deliveredOn;
                    if (isStr(data1)) {
                        if (!(formats2.validate(data1))) {
                            validateItem.errors = [e(instancePath + "/deliveredOn", "#/properties/deliveredOn/format", "format", { format: "date-time" })];
                            return false;
                        }
                    }
                    else {
                        validateItem.errors = [e(instancePath + "/deliveredOn", "#/properties/deliveredOn/type", "type", { type: "string" })];
                        return false;
                    }
                }
                if (!isUndefined(data.emailAddress)) {
                    let data2 = data.emailAddress;
                    if (isStr(data2)) {
                        if (!(formats4.test(data2))) {
                            validateItem.errors = [e(instancePath + "/emailAddress", "#/properties/emailAddress/format", "format", { format: "email" })];
                            return false;
                        }
                    }
                    else {
                        validateItem.errors = [e(instancePath + "/emailAddress", "#/properties/emailAddress/type", "type", { type: "string" })];
                        return false;
                    }
                }
            }
        }
    }
    else {
        validateItem.errors = [e(instancePath, "#/type", "type", { type: "object" })];
        return false;
    }
    validateItem.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateNested: AsyncAjvValidationFn = async (data: any, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (isObj(data)) {
        for (const key0 in data) {
            if (!(key0 === "age")) {
                throw new Error0([e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 })]);
                break;
            }
        }
        if (!isUndefined(data.age)) {
            let data0 = data.age;
            if ((isStr(data0)) && (!isNull(data0))) {
                throw new Error0([e(instancePath + "/age", "#/properties/age/type", "type", { type: _constants.schema14[".properties.age.type"] })]);
            }
            const res0 = await new Promise(() => false);
            if (res0) {
                throw new Error0([e(instancePath + "/age", "#/properties/age/timeout", "timeout", {})]);
            }
        }
    }
    else {
        throw new Error0([e(instancePath, "#/type", "type", { type: "object" })]);
    }
    if (errors === 0) {
        return data;
    }
    else {
        throw new Error0(vErrors);
    }
};
const formats12 = anyfy(fullFormats).int32;
const formats14 = anyfy(fullFormats).int64;
const formats16 = anyfy(fullFormats).double;
const validateSample: AsyncAjvValidationFn = async (data: any, { instancePath = "", rootData = data } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (isObj(data)) {
        let missing0;
        if (((data.lastName === undefined) && (missing0 = "lastName")) || ((data.name === undefined) && (missing0 = "name"))) {
            throw new Error0([e(instancePath, "#/required", "required", { missingProperty: missing0 })]);
        }
        else {
            for (const key0 in data) {
                if (!(((((((key0 === "name") || (key0 === "lastName")) || (key0 === "anInt")) || (key0 === "aLong")) || (key0 === "aDecimal")) || (key0 === "nested")) || (key0 === "dummy"))) {
                    throw new Error0([e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 })]);
                    break;
                }
            }
            if (!isUndefined(data.name)) {
                let data0 = data.name;
                if (isStr(data0)) {
                    if (func4(data0) > 50) {
                        throw new Error0([e(instancePath + "/name", "#/properties/name/maxLength", "maxLength", { limit: 50 })]);
                    }
                    else {
                        if (func4(data0) < 1) {
                            throw new Error0([e(instancePath + "/name", "#/properties/name/minLength", "minLength", { limit: 1 })]);
                        }
                    }
                }
                else {
                    throw new Error0([e(instancePath + "/name", "#/properties/name/type", "type", { type: "string" })]);
                }
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (!isUndefined(data.lastName)) {
                    let data1 = data.lastName;
                    if (isStr(data1)) {
                        if (func4(data1) > 50) {
                            throw new Error0([e(instancePath + "/lastName", "#/properties/lastName/maxLength", "maxLength", { limit: 50 })]);
                        }
                    }
                    else {
                        throw new Error0([e(instancePath + "/lastName", "#/properties/lastName/type", "type", { type: "string" })]);
                    }
                }
                if (!isUndefined(data.anInt)) {
                    let data2 = data.anInt;
                    if (!(((isNum(data2)) && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                        throw new Error0([e(instancePath + "/anInt", "#/properties/anInt/type", "type", { type: "integer" })]);
                    }
                    if ((isNum(data2)) && (isFinite(data2))) {
                        if (data2 < -2147483648 || isNaN(data2)) {
                            throw new Error0([e(instancePath + "/anInt", "#/properties/anInt/minimum", "minimum", { comparison: ">=", limit: -2147483648 })]);
                        }
                        else {
                            if (data2 >= 50 || isNaN(data2)) {
                                throw new Error0([e(instancePath + "/anInt", "#/properties/anInt/exclusiveMaximum", "exclusiveMaximum", { comparison: "<", limit: 50 })]);
                            }
                            else {
                                if (!(formats12.validate(data2))) {
                                    throw new Error0([e(instancePath + "/anInt", "#/properties/anInt/format", "format", { format: "int32" })]);
                                }
                            }
                        }
                    }
                }
                if (!isUndefined(data.aLong)) {
                    let data3 = data.aLong;
                    if (!(((isNum(data3)) && (!(data3 % 1) && !isNaN(data3))) && (isFinite(data3)))) {
                        throw new Error0([e(instancePath + "/aLong", "#/properties/aLong/type", "type", { type: "integer" })]);
                    }
                    if ((isNum(data3)) && (isFinite(data3))) {
                        if (data3 > 9223372036854776000 || isNaN(data3)) {
                            throw new Error0([e(instancePath + "/aLong", "#/properties/aLong/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 })]);
                        }
                        else {
                            if (data3 <= 50 || isNaN(data3)) {
                                throw new Error0([e(instancePath + "/aLong", "#/properties/aLong/exclusiveMinimum", "exclusiveMinimum", { comparison: ">", limit: 50 })]);
                            }
                            else {
                                if (!(formats14.validate(data3))) {
                                    throw new Error0([e(instancePath + "/aLong", "#/properties/aLong/format", "format", { format: "int64" })]);
                                }
                            }
                        }
                    }
                }
                if (!isUndefined(data.aDecimal)) {
                    let data4 = data.aDecimal;
                    if ((isNum(data4)) && (isFinite(data4))) {
                        if (data4 > 1.7976931348623157e+308 || isNaN(data4)) {
                            throw new Error0([e(instancePath + "/aDecimal", "#/properties/aDecimal/maximum", "maximum", { comparison: "<=", limit: 1.7976931348623157e+308 })]);
                        }
                        else {
                            if (data4 < -1.7976931348623157e+308 || isNaN(data4)) {
                                throw new Error0([e(instancePath + "/aDecimal", "#/properties/aDecimal/minimum", "minimum", { comparison: ">=", limit: -1.7976931348623157e+308 })]);
                            }
                            else {
                                if (!(formats16.validate(data4))) {
                                    throw new Error0([e(instancePath + "/aDecimal", "#/properties/aDecimal/format", "format", { format: "double" })]);
                                }
                            }
                        }
                    }
                    else {
                        throw new Error0([e(instancePath + "/aDecimal", "#/properties/aDecimal/type", "type", { type: "number" })]);
                    }
                }
                if (!isUndefined(data.nested)) {
                    let data5 = data.nested;
                    if (isObj(data5)) {
                        for (const key1 in data5) {
                            if (!(key1 === "age")) {
                                throw new Error0([e(instancePath + "/nested", "Nested/additionalProperties", "additionalProperties", { additionalProperty: key1 })]);
                                break;
                            }
                        }
                        if (!isUndefined(data5.age)) {
                            let data6 = data5.age;
                            if ((isStr(data6)) && (!isNull(data6))) {
                                throw new Error0([e(instancePath + "/nested/age", "Nested/properties/age/type", "type", { type: _constants.schema14[".properties.age.type"] })]);
                            }
                            const res0 = await new Promise(() => false);
                            if (res0) {
                                throw new Error0([e(instancePath + "/nested/age", "Nested/properties/age/timeout", "timeout", {})]);
                            }
                        }
                    }
                    else {
                        throw new Error0([e(instancePath + "/nested", "Nested/type", "type", { type: "object" })]);
                    }
                }
                if (!isUndefined(data.dummy)) {
                    const _errs18: number = errors;
                    if (!(validateDummy(data.dummy, { instancePath: instancePath + "/dummy", parentData: data, parentDataProperty: "dummy", rootData }))) {
                        vErrors.push(...(validateDummy.errors || []));
                        errors = vErrors.length;
                    }
                    var valid0 = _errs18 === errors;
                }
            }
        }
    }
    else {
        throw new Error0([e(instancePath, "#/type", "type", { type: "object" })]);
    }
    if (errors === 0) {
        return data;
    }
    else {
        throw new Error0(vErrors);
    }
};

export const OpenApi3Validator = validatorFactory({Dummy: validateDummy,Item: validateItem,Nested: validateNested,Sample: validateSample}, true);
    