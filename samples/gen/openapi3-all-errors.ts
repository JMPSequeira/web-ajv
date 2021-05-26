/* eslint-disable */
import { fullFormats } from "ajv-formats/dist/formats";
import Error0 from "ajv/dist/runtime/validation_error";
import func4 from "ajv/dist/runtime/ucs2length"
import { e, validatorFactory, WebAjvError, anyfy, AsyncAjvValidationFn, AjvValidationFn } from './web-ajv';
export type OpenApi3SchemaId = "Dummy"|"Item"|"Nested"|"Sample";
            
const _constants = { schema11: { [".properties.name.type"]: ["string", "null"], [".properties.items.type"]: ["array", "null"] }, schema14: { [".properties.age.type"]: ["string", "null"] } };
const formats0 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
const formats2 = anyfy(fullFormats)["date-time"];
const formats4 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const validateDummy: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!((key0 === "name") || (key0 === "items"))) {
                errors = vErrors.push(e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 }));
            }
        }
        if (data.name !== undefined) {
            let data0 = data.name;
            if ((typeof data0 !== "string") && (data0 !== null)) {
                errors = vErrors.push(e(instancePath + "/name", "#/properties/name/type", "type", { type: _constants.schema11[".properties.name.type"] }));
            }
        }
        if (data.items !== undefined) {
            let data1 = data.items;
            if ((!(Array.isArray(data1))) && (data1 !== null)) {
                errors = vErrors.push(e(instancePath + "/items", "#/properties/items/type", "type", { type: _constants.schema11[".properties.items.type"] }));
            }
            if (Array.isArray(data1)) {
                const len0 = data1.length;
                for (let i0 = 0; i0 < len0; i0++) {
                    let data2 = data1[i0];
                    if (data2 && typeof data2 == "object" && !Array.isArray(data2)) {
                        if (data2.deliveredOn === undefined) {
                            errors = vErrors.push(e(instancePath + "/items/" + i0, "Item/required", "required", { missingProperty: "deliveredOn" }));
                        }
                        if (data2.emailAddress === undefined) {
                            errors = vErrors.push(e(instancePath + "/items/" + i0, "Item/required", "required", { missingProperty: "emailAddress" }));
                        }
                        if (data2.id === undefined) {
                            errors = vErrors.push(e(instancePath + "/items/" + i0, "Item/required", "required", { missingProperty: "id" }));
                        }
                        for (const key1 in data2) {
                            if (!(((key1 === "id") || (key1 === "deliveredOn")) || (key1 === "emailAddress"))) {
                                errors = vErrors.push(e(instancePath + "/items/" + i0, "Item/additionalProperties", "additionalProperties", { additionalProperty: key1 }));
                            }
                        }
                        if (data2.id !== undefined) {
                            let data3 = data2.id;
                            if (typeof data3 === "string") {
                                if (!(formats0.test(data3))) {
                                    errors = vErrors.push(e(instancePath + "/items/" + i0 + "/id", "Item/properties/id/format", "format", { format: "uuid" }));
                                }
                            }
                            else {
                                errors = vErrors.push(e(instancePath + "/items/" + i0 + "/id", "Item/properties/id/type", "type", { type: "string" }));
                            }
                        }
                        if (data2.deliveredOn !== undefined) {
                            let data4 = data2.deliveredOn;
                            if (typeof data4 === "string") {
                                if (!(formats2.validate(data4))) {
                                    errors = vErrors.push(e(instancePath + "/items/" + i0 + "/deliveredOn", "Item/properties/deliveredOn/format", "format", { format: "date-time" }));
                                }
                            }
                            else {
                                errors = vErrors.push(e(instancePath + "/items/" + i0 + "/deliveredOn", "Item/properties/deliveredOn/type", "type", { type: "string" }));
                            }
                        }
                        if (data2.emailAddress !== undefined) {
                            let data5 = data2.emailAddress;
                            if (typeof data5 === "string") {
                                if (!(formats4.test(data5))) {
                                    errors = vErrors.push(e(instancePath + "/items/" + i0 + "/emailAddress", "Item/properties/emailAddress/format", "format", { format: "email" }));
                                }
                            }
                            else {
                                errors = vErrors.push(e(instancePath + "/items/" + i0 + "/emailAddress", "Item/properties/emailAddress/type", "type", { type: "string" }));
                            }
                        }
                    }
                    else {
                        errors = vErrors.push(e(instancePath + "/items/" + i0, "Item/type", "type", { type: "object" }));
                    }
                }
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
    }
    validateDummy.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateItem: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.deliveredOn === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "deliveredOn" }));
        }
        if (data.emailAddress === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "emailAddress" }));
        }
        if (data.id === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "id" }));
        }
        for (const key0 in data) {
            if (!(((key0 === "id") || (key0 === "deliveredOn")) || (key0 === "emailAddress"))) {
                errors = vErrors.push(e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 }));
            }
        }
        if (data.id !== undefined) {
            let data0 = data.id;
            if (typeof data0 === "string") {
                if (!(formats0.test(data0))) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/format", "format", { format: "uuid" }));
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/id", "#/properties/id/type", "type", { type: "string" }));
            }
        }
        if (data.deliveredOn !== undefined) {
            let data1 = data.deliveredOn;
            if (typeof data1 === "string") {
                if (!(formats2.validate(data1))) {
                    errors = vErrors.push(e(instancePath + "/deliveredOn", "#/properties/deliveredOn/format", "format", { format: "date-time" }));
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/deliveredOn", "#/properties/deliveredOn/type", "type", { type: "string" }));
            }
        }
        if (data.emailAddress !== undefined) {
            let data2 = data.emailAddress;
            if (typeof data2 === "string") {
                if (!(formats4.test(data2))) {
                    errors = vErrors.push(e(instancePath + "/emailAddress", "#/properties/emailAddress/format", "format", { format: "email" }));
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/emailAddress", "#/properties/emailAddress/type", "type", { type: "string" }));
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
    }
    validateItem.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateNested: AsyncAjvValidationFn = async (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!(key0 === "age")) {
                errors = vErrors.push(e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 }));
            }
        }
        if (data.age !== undefined) {
            let data0 = data.age;
            if ((typeof data0 !== "string") && (data0 !== null)) {
                errors = vErrors.push(e(instancePath + "/age", "#/properties/age/type", "type", { type: _constants.schema14[".properties.age.type"] }));
            }
            const res0 = await new Promise(() => false);
            if (res0) {
                errors = vErrors.push(e(instancePath + "/age", "#/properties/age/timeout", "timeout", {}));
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
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
const validateSample: AsyncAjvValidationFn = async (data, { instancePath = "", rootData = data } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.lastName === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "lastName" }));
        }
        if (data.name === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "name" }));
        }
        for (const key0 in data) {
            if (!(((((((key0 === "name") || (key0 === "lastName")) || (key0 === "anInt")) || (key0 === "aLong")) || (key0 === "aDecimal")) || (key0 === "nested")) || (key0 === "dummy"))) {
                errors = vErrors.push(e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 }));
            }
        }
        if (data.name !== undefined) {
            let data0 = data.name;
            if (typeof data0 === "string") {
                if (func4(data0) > 50) {
                    errors = vErrors.push(e(instancePath + "/name", "#/properties/name/maxLength", "maxLength", { limit: 50 }));
                }
                if (func4(data0) < 1) {
                    errors = vErrors.push(e(instancePath + "/name", "#/properties/name/minLength", "minLength", { limit: 1 }));
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/name", "#/properties/name/type", "type", { type: "string" }));
            }
        }
        if (data.lastName !== undefined) {
            let data1 = data.lastName;
            if (typeof data1 === "string") {
                if (func4(data1) > 50) {
                    errors = vErrors.push(e(instancePath + "/lastName", "#/properties/lastName/maxLength", "maxLength", { limit: 50 }));
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/lastName", "#/properties/lastName/type", "type", { type: "string" }));
            }
        }
        if (data.anInt !== undefined) {
            let data2 = data.anInt;
            if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                errors = vErrors.push(e(instancePath + "/anInt", "#/properties/anInt/type", "type", { type: "integer" }));
            }
            if ((typeof data2 == "number") && (isFinite(data2))) {
                if (data2 < -2147483648 || isNaN(data2)) {
                    errors = vErrors.push(e(instancePath + "/anInt", "#/properties/anInt/minimum", "minimum", { comparison: ">=", limit: -2147483648 }));
                }
                if (data2 >= 50 || isNaN(data2)) {
                    errors = vErrors.push(e(instancePath + "/anInt", "#/properties/anInt/exclusiveMaximum", "exclusiveMaximum", { comparison: "<", limit: 50 }));
                }
                if (!(formats12.validate(data2))) {
                    errors = vErrors.push(e(instancePath + "/anInt", "#/properties/anInt/format", "format", { format: "int32" }));
                }
            }
        }
        if (data.aLong !== undefined) {
            let data3 = data.aLong;
            if (!(((typeof data3 == "number") && (!(data3 % 1) && !isNaN(data3))) && (isFinite(data3)))) {
                errors = vErrors.push(e(instancePath + "/aLong", "#/properties/aLong/type", "type", { type: "integer" }));
            }
            if ((typeof data3 == "number") && (isFinite(data3))) {
                if (data3 > 9223372036854776000 || isNaN(data3)) {
                    errors = vErrors.push(e(instancePath + "/aLong", "#/properties/aLong/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 }));
                }
                if (data3 <= 50 || isNaN(data3)) {
                    errors = vErrors.push(e(instancePath + "/aLong", "#/properties/aLong/exclusiveMinimum", "exclusiveMinimum", { comparison: ">", limit: 50 }));
                }
                if (!(formats14.validate(data3))) {
                    errors = vErrors.push(e(instancePath + "/aLong", "#/properties/aLong/format", "format", { format: "int64" }));
                }
            }
        }
        if (data.aDecimal !== undefined) {
            let data4 = data.aDecimal;
            if ((typeof data4 == "number") && (isFinite(data4))) {
                if (data4 > 1.7976931348623157e+308 || isNaN(data4)) {
                    errors = vErrors.push(e(instancePath + "/aDecimal", "#/properties/aDecimal/maximum", "maximum", { comparison: "<=", limit: 1.7976931348623157e+308 }));
                }
                if (data4 < -1.7976931348623157e+308 || isNaN(data4)) {
                    errors = vErrors.push(e(instancePath + "/aDecimal", "#/properties/aDecimal/minimum", "minimum", { comparison: ">=", limit: -1.7976931348623157e+308 }));
                }
                if (!(formats16.validate(data4))) {
                    errors = vErrors.push(e(instancePath + "/aDecimal", "#/properties/aDecimal/format", "format", { format: "double" }));
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/aDecimal", "#/properties/aDecimal/type", "type", { type: "number" }));
            }
        }
        if (data.nested !== undefined) {
            let data5 = data.nested;
            if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
                for (const key1 in data5) {
                    if (!(key1 === "age")) {
                        errors = vErrors.push(e(instancePath + "/nested", "Nested/additionalProperties", "additionalProperties", { additionalProperty: key1 }));
                    }
                }
                if (data5.age !== undefined) {
                    let data6 = data5.age;
                    if ((typeof data6 !== "string") && (data6 !== null)) {
                        errors = vErrors.push(e(instancePath + "/nested/age", "Nested/properties/age/type", "type", { type: _constants.schema14[".properties.age.type"] }));
                    }
                    const res0 = await new Promise(() => false);
                    if (res0) {
                        errors = vErrors.push(e(instancePath + "/nested/age", "Nested/properties/age/timeout", "timeout", {}));
                    }
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/nested", "Nested/type", "type", { type: "object" }));
            }
        }
        if (data.dummy !== undefined) {
            if (!(validateDummy(data.dummy, { instancePath: instancePath + "/dummy", parentData: data, parentDataProperty: "dummy", rootData }))) {
                vErrors.push(...(validateDummy.errors || []));
                errors = vErrors.length;
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
    }
    if (errors === 0) {
        return data;
    }
    else {
        throw new Error0(vErrors);
    }
};

export const OpenApi3Validator = validatorFactory({Dummy: validateDummy,Item: validateItem,Nested: validateNested,Sample: validateSample}, true);
    