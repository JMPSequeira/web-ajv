/* eslint-disable */
import { fullFormats } from "ajv-formats/dist/formats";
import Error0 from "ajv/dist/runtime/validation_error";
import func4 from "ajv/dist/runtime/ucs2length"
import { validatorFactory, anyfy, AsyncAjvValidationFn, AjvValidationFn } from './web-ajv';
export type OpenApi3SchemaId = "Dummy"|"Item"|"Nested"|"Sample";

const schemaDummy = { "type": "object", "properties": { "name": { "type": ["string", "null"] }, "items": { "type": ["array", "null"], "items": { "$ref": "Item" } } }, "additionalProperties": false, "$id": "Dummy" } as const;
const schemaItem = { "required": ["deliveredOn", "emailAddress", "id"], "type": "object", "properties": { "id": { "type": "string", "format": "uuid" }, "deliveredOn": { "type": "string", "format": "date-time" }, "emailAddress": { "type": "string", "format": "email" } }, "additionalProperties": false, "$id": "Item" } as const;
const formats0 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
const formats2 = anyfy(fullFormats)["date-time"];
const formats4 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const validateDummy: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            const _errs1: number = errors;
            for (const key0 in data) {
                if (!((key0 === "name") || (key0 === "items"))) {
                    validateDummy.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 } }];
                    return false;
                    break;
                }
            }
            if (_errs1 === errors) {
                if (data.name !== undefined) {
                    let data0 = data.name;
                    const _errs2: number = errors;
                    if ((typeof data0 !== "string") && (data0 !== null)) {
                        validateDummy.errors = [{ instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: schemaDummy.properties.name.type } }];
                        return false;
                    }
                    var valid0 = _errs2 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.items !== undefined) {
                        let data1 = data.items;
                        const _errs4: number = errors;
                        if ((!(Array.isArray(data1))) && (data1 !== null)) {
                            validateDummy.errors = [{ instancePath: instancePath + "/items", schemaPath: "#/properties/items/type", keyword: "type", params: { type: schemaDummy.properties.items.type } }];
                            return false;
                        }
                        if (errors === _errs4) {
                            if (Array.isArray(data1)) {
                                var valid1 = true;
                                const len0 = data1.length;
                                for (let i0 = 0; i0 < len0; i0++) {
                                    let data2 = data1[i0];
                                    const _errs6: number = errors;
                                    const _errs7: number = errors;
                                    if (errors === _errs7) {
                                        if (data2 && typeof data2 == "object" && !Array.isArray(data2)) {
                                            let missing0;
                                            if ((((data2.deliveredOn === undefined) && (missing0 = "deliveredOn")) || ((data2.emailAddress === undefined) && (missing0 = "emailAddress"))) || ((data2.id === undefined) && (missing0 = "id"))) {
                                                validateDummy.errors = [{ instancePath: instancePath + "/items/" + i0, schemaPath: "Item/required", keyword: "required", params: { missingProperty: missing0 } }];
                                                return false;
                                            }
                                            else {
                                                const _errs9: number = errors;
                                                for (const key1 in data2) {
                                                    if (!(((key1 === "id") || (key1 === "deliveredOn")) || (key1 === "emailAddress"))) {
                                                        validateDummy.errors = [{ instancePath: instancePath + "/items/" + i0, schemaPath: "Item/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 } }];
                                                        return false;
                                                        break;
                                                    }
                                                }
                                                if (_errs9 === errors) {
                                                    if (data2.id !== undefined) {
                                                        let data3 = data2.id;
                                                        const _errs10: number = errors;
                                                        if (errors === _errs10) {
                                                            if (errors === _errs10) {
                                                                if (typeof data3 === "string") {
                                                                    if (!(formats0.test(data3))) {
                                                                        validateDummy.errors = [{ instancePath: instancePath + "/items/" + i0 + "/id", schemaPath: "Item/properties/id/format", keyword: "format", params: { format: "uuid" } }];
                                                                        return false;
                                                                    }
                                                                }
                                                                else {
                                                                    validateDummy.errors = [{ instancePath: instancePath + "/items/" + i0 + "/id", schemaPath: "Item/properties/id/type", keyword: "type", params: { type: "string" } }];
                                                                    return false;
                                                                }
                                                            }
                                                        }
                                                        var valid3 = _errs10 === errors;
                                                    }
                                                    else {
                                                        var valid3 = true;
                                                    }
                                                    if (valid3) {
                                                        if (data2.deliveredOn !== undefined) {
                                                            let data4 = data2.deliveredOn;
                                                            const _errs12: number = errors;
                                                            if (errors === _errs12) {
                                                                if (errors === _errs12) {
                                                                    if (typeof data4 === "string") {
                                                                        if (!(formats2.validate(data4))) {
                                                                            validateDummy.errors = [{ instancePath: instancePath + "/items/" + i0 + "/deliveredOn", schemaPath: "Item/properties/deliveredOn/format", keyword: "format", params: { format: "date-time" } }];
                                                                            return false;
                                                                        }
                                                                    }
                                                                    else {
                                                                        validateDummy.errors = [{ instancePath: instancePath + "/items/" + i0 + "/deliveredOn", schemaPath: "Item/properties/deliveredOn/type", keyword: "type", params: { type: "string" } }];
                                                                        return false;
                                                                    }
                                                                }
                                                            }
                                                            var valid3 = _errs12 === errors;
                                                        }
                                                        else {
                                                            var valid3 = true;
                                                        }
                                                        if (valid3) {
                                                            if (data2.emailAddress !== undefined) {
                                                                let data5 = data2.emailAddress;
                                                                const _errs14: number = errors;
                                                                if (errors === _errs14) {
                                                                    if (errors === _errs14) {
                                                                        if (typeof data5 === "string") {
                                                                            if (!(formats4.test(data5))) {
                                                                                validateDummy.errors = [{ instancePath: instancePath + "/items/" + i0 + "/emailAddress", schemaPath: "Item/properties/emailAddress/format", keyword: "format", params: { format: "email" } }];
                                                                                return false;
                                                                            }
                                                                        }
                                                                        else {
                                                                            validateDummy.errors = [{ instancePath: instancePath + "/items/" + i0 + "/emailAddress", schemaPath: "Item/properties/emailAddress/type", keyword: "type", params: { type: "string" } }];
                                                                            return false;
                                                                        }
                                                                    }
                                                                }
                                                                var valid3 = _errs14 === errors;
                                                            }
                                                            else {
                                                                var valid3 = true;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else {
                                            validateDummy.errors = [{ instancePath: instancePath + "/items/" + i0, schemaPath: "Item/type", keyword: "type", params: { type: "object" } }];
                                            return false;
                                        }
                                    }
                                    var valid1 = _errs6 === errors;
                                    if (!valid1) {
                                        break;
                                    }
                                }
                            }
                        }
                        var valid0 = _errs4 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                }
            }
        }
        else {
            validateDummy.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }];
            return false;
        }
    }
    validateDummy.errors = vErrors;
    return errors === 0;
};
const validateItem: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            let missing0;
            if ((((data.deliveredOn === undefined) && (missing0 = "deliveredOn")) || ((data.emailAddress === undefined) && (missing0 = "emailAddress"))) || ((data.id === undefined) && (missing0 = "id"))) {
                validateItem.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 } }];
                return false;
            }
            else {
                const _errs1: number = errors;
                for (const key0 in data) {
                    if (!(((key0 === "id") || (key0 === "deliveredOn")) || (key0 === "emailAddress"))) {
                        validateItem.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 } }];
                        return false;
                        break;
                    }
                }
                if (_errs1 === errors) {
                    if (data.id !== undefined) {
                        let data0 = data.id;
                        const _errs2: number = errors;
                        if (errors === _errs2) {
                            if (errors === _errs2) {
                                if (typeof data0 === "string") {
                                    if (!(formats0.test(data0))) {
                                        validateItem.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/format", keyword: "format", params: { format: "uuid" } }];
                                        return false;
                                    }
                                }
                                else {
                                    validateItem.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" } }];
                                    return false;
                                }
                            }
                        }
                        var valid0 = _errs2 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.deliveredOn !== undefined) {
                            let data1 = data.deliveredOn;
                            const _errs4: number = errors;
                            if (errors === _errs4) {
                                if (errors === _errs4) {
                                    if (typeof data1 === "string") {
                                        if (!(formats2.validate(data1))) {
                                            validateItem.errors = [{ instancePath: instancePath + "/deliveredOn", schemaPath: "#/properties/deliveredOn/format", keyword: "format", params: { format: "date-time" } }];
                                            return false;
                                        }
                                    }
                                    else {
                                        validateItem.errors = [{ instancePath: instancePath + "/deliveredOn", schemaPath: "#/properties/deliveredOn/type", keyword: "type", params: { type: "string" } }];
                                        return false;
                                    }
                                }
                            }
                            var valid0 = _errs4 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.emailAddress !== undefined) {
                                let data2 = data.emailAddress;
                                const _errs6: number = errors;
                                if (errors === _errs6) {
                                    if (errors === _errs6) {
                                        if (typeof data2 === "string") {
                                            if (!(formats4.test(data2))) {
                                                validateItem.errors = [{ instancePath: instancePath + "/emailAddress", schemaPath: "#/properties/emailAddress/format", keyword: "format", params: { format: "email" } }];
                                                return false;
                                            }
                                        }
                                        else {
                                            validateItem.errors = [{ instancePath: instancePath + "/emailAddress", schemaPath: "#/properties/emailAddress/type", keyword: "type", params: { type: "string" } }];
                                            return false;
                                        }
                                    }
                                }
                                var valid0 = _errs6 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                        }
                    }
                }
            }
        }
        else {
            validateItem.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }];
            return false;
        }
    }
    validateItem.errors = vErrors;
    return errors === 0;
};
const schemaNested = { "type": "object", "properties": { "age": { "type": ["string", "null"], "timeout": { "time": 123 } } }, "additionalProperties": false, "$id": "Nested", "$async": true } as const;
const validateNested: AsyncAjvValidationFn = async (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            const _errs1: number = errors;
            for (const key0 in data) {
                if (!(key0 === "age")) {
                    throw new Error0([{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 } }]);
                    break;
                }
            }
            if (_errs1 === errors) {
                if (data.age !== undefined) {
                    let data0 = data.age;
                    if ((typeof data0 !== "string") && (data0 !== null)) {
                        throw new Error0([{ instancePath: instancePath + "/age", schemaPath: "#/properties/age/type", keyword: "type", params: { type: schemaNested.properties.age.type } }]);
                    }
                    const res0 = await new Promise(() => false);
                    if (res0) {
                        throw new Error0([{ instancePath: instancePath + "/age", schemaPath: "#/properties/age/timeout", keyword: "timeout", params: {} }]);
                    }
                }
            }
        }
        else {
            throw new Error0([{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }]);
        }
    }
    if (errors === 0) {
        return data;
    }
    else {
        throw new Error0(vErrors);
    }
};
const schemaSample = { "required": ["lastName", "name"], "type": "object", "properties": { "name": { "maxLength": 50, "minLength": 1, "type": "string" }, "lastName": { "maxLength": 50, "type": "string" }, "anInt": { "exclusiveMaximum": 50, "type": "integer", "format": "int32", "minimum": -2147483648 }, "aLong": { "exclusiveMinimum": 50, "type": "integer", "format": "int64", "maximum": 9223372036854776000 }, "aDecimal": { "type": "number", "format": "double", "minimum": -1.7976931348623157e+308, "maximum": 1.7976931348623157e+308 }, "nested": { "$ref": "Nested" }, "dummy": { "$ref": "Dummy" } }, "additionalProperties": false, "$id": "Sample", "$async": true } as const;
const formats12 = anyfy(fullFormats).int32;
const formats14 = anyfy(fullFormats).int64;
const formats16 = anyfy(fullFormats).double;
const validateSample: AsyncAjvValidationFn = async (data: any, { instancePath = "", rootData = data } = {}) => {
    ;
    let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            let missing0;
            if (((data.lastName === undefined) && (missing0 = "lastName")) || ((data.name === undefined) && (missing0 = "name"))) {
                throw new Error0([{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 } }]);
            }
            else {
                const _errs1: number = errors;
                for (const key0 in data) {
                    if (!(((((((key0 === "name") || (key0 === "lastName")) || (key0 === "anInt")) || (key0 === "aLong")) || (key0 === "aDecimal")) || (key0 === "nested")) || (key0 === "dummy"))) {
                        throw new Error0([{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 } }]);
                        break;
                    }
                }
                if (_errs1 === errors) {
                    if (data.name !== undefined) {
                        let data0 = data.name;
                        const _errs2: number = errors;
                        if (errors === _errs2) {
                            if (typeof data0 === "string") {
                                if (func4(data0) > 50) {
                                    throw new Error0([{ instancePath: instancePath + "/name", schemaPath: "#/properties/name/maxLength", keyword: "maxLength", params: { limit: 50 } }]);
                                }
                                else {
                                    if (func4(data0) < 1) {
                                        throw new Error0([{ instancePath: instancePath + "/name", schemaPath: "#/properties/name/minLength", keyword: "minLength", params: { limit: 1 } }]);
                                    }
                                }
                            }
                            else {
                                throw new Error0([{ instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" } }]);
                            }
                        }
                        var valid0 = _errs2 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.lastName !== undefined) {
                            let data1 = data.lastName;
                            const _errs4: number = errors;
                            if (errors === _errs4) {
                                if (typeof data1 === "string") {
                                    if (func4(data1) > 50) {
                                        throw new Error0([{ instancePath: instancePath + "/lastName", schemaPath: "#/properties/lastName/maxLength", keyword: "maxLength", params: { limit: 50 } }]);
                                    }
                                }
                                else {
                                    throw new Error0([{ instancePath: instancePath + "/lastName", schemaPath: "#/properties/lastName/type", keyword: "type", params: { type: "string" } }]);
                                }
                            }
                            var valid0 = _errs4 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.anInt !== undefined) {
                                let data2 = data.anInt;
                                const _errs6: number = errors;
                                if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                                    throw new Error0([{ instancePath: instancePath + "/anInt", schemaPath: "#/properties/anInt/type", keyword: "type", params: { type: "integer" } }]);
                                }
                                if (errors === _errs6) {
                                    if ((typeof data2 == "number") && (isFinite(data2))) {
                                        if (data2 < -2147483648 || isNaN(data2)) {
                                            throw new Error0([{ instancePath: instancePath + "/anInt", schemaPath: "#/properties/anInt/minimum", keyword: "minimum", params: { comparison: ">=", limit: -2147483648 } }]);
                                        }
                                        else {
                                            if (data2 >= 50 || isNaN(data2)) {
                                                throw new Error0([{ instancePath: instancePath + "/anInt", schemaPath: "#/properties/anInt/exclusiveMaximum", keyword: "exclusiveMaximum", params: { comparison: "<", limit: 50 } }]);
                                            }
                                            else {
                                                if (!(formats12.validate(data2))) {
                                                    throw new Error0([{ instancePath: instancePath + "/anInt", schemaPath: "#/properties/anInt/format", keyword: "format", params: { format: "int32" } }]);
                                                }
                                            }
                                        }
                                    }
                                }
                                var valid0 = _errs6 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.aLong !== undefined) {
                                    let data3 = data.aLong;
                                    const _errs8: number = errors;
                                    if (!(((typeof data3 == "number") && (!(data3 % 1) && !isNaN(data3))) && (isFinite(data3)))) {
                                        throw new Error0([{ instancePath: instancePath + "/aLong", schemaPath: "#/properties/aLong/type", keyword: "type", params: { type: "integer" } }]);
                                    }
                                    if (errors === _errs8) {
                                        if ((typeof data3 == "number") && (isFinite(data3))) {
                                            if (data3 > 9223372036854776000 || isNaN(data3)) {
                                                throw new Error0([{ instancePath: instancePath + "/aLong", schemaPath: "#/properties/aLong/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } }]);
                                            }
                                            else {
                                                if (data3 <= 50 || isNaN(data3)) {
                                                    throw new Error0([{ instancePath: instancePath + "/aLong", schemaPath: "#/properties/aLong/exclusiveMinimum", keyword: "exclusiveMinimum", params: { comparison: ">", limit: 50 } }]);
                                                }
                                                else {
                                                    if (!(formats14.validate(data3))) {
                                                        throw new Error0([{ instancePath: instancePath + "/aLong", schemaPath: "#/properties/aLong/format", keyword: "format", params: { format: "int64" } }]);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    var valid0 = _errs8 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.aDecimal !== undefined) {
                                        let data4 = data.aDecimal;
                                        const _errs10: number = errors;
                                        if (errors === _errs10) {
                                            if ((typeof data4 == "number") && (isFinite(data4))) {
                                                if (data4 > 1.7976931348623157e+308 || isNaN(data4)) {
                                                    throw new Error0([{ instancePath: instancePath + "/aDecimal", schemaPath: "#/properties/aDecimal/maximum", keyword: "maximum", params: { comparison: "<=", limit: 1.7976931348623157e+308 } }]);
                                                }
                                                else {
                                                    if (data4 < -1.7976931348623157e+308 || isNaN(data4)) {
                                                        throw new Error0([{ instancePath: instancePath + "/aDecimal", schemaPath: "#/properties/aDecimal/minimum", keyword: "minimum", params: { comparison: ">=", limit: -1.7976931348623157e+308 } }]);
                                                    }
                                                    else {
                                                        if (!(formats16.validate(data4))) {
                                                            throw new Error0([{ instancePath: instancePath + "/aDecimal", schemaPath: "#/properties/aDecimal/format", keyword: "format", params: { format: "double" } }]);
                                                        }
                                                    }
                                                }
                                            }
                                            else {
                                                throw new Error0([{ instancePath: instancePath + "/aDecimal", schemaPath: "#/properties/aDecimal/type", keyword: "type", params: { type: "number" } }]);
                                            }
                                        }
                                        var valid0 = _errs10 === errors;
                                    }
                                    else {
                                        var valid0 = true;
                                    }
                                    if (valid0) {
                                        if (data.nested !== undefined) {
                                            let data5 = data.nested;
                                            const _errs12: number = errors;
                                            const _errs13: number = errors;
                                            if (errors === _errs13) {
                                                if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
                                                    const _errs15: number = errors;
                                                    for (const key1 in data5) {
                                                        if (!(key1 === "age")) {
                                                            throw new Error0([{ instancePath: instancePath + "/nested", schemaPath: "Nested/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 } }]);
                                                            break;
                                                        }
                                                    }
                                                    if (_errs15 === errors) {
                                                        if (data5.age !== undefined) {
                                                            let data6 = data5.age;
                                                            if ((typeof data6 !== "string") && (data6 !== null)) {
                                                                throw new Error0([{ instancePath: instancePath + "/nested/age", schemaPath: "Nested/properties/age/type", keyword: "type", params: { type: schemaNested.properties.age.type } }]);
                                                            }
                                                            const res0 = await new Promise(() => false);
                                                            if (res0) {
                                                                throw new Error0([{ instancePath: instancePath + "/nested/age", schemaPath: "Nested/properties/age/timeout", keyword: "timeout", params: {} }]);
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    throw new Error0([{ instancePath: instancePath + "/nested", schemaPath: "Nested/type", keyword: "type", params: { type: "object" } }]);
                                                }
                                            }
                                            var valid0 = _errs12 === errors;
                                        }
                                        else {
                                            var valid0 = true;
                                        }
                                        if (valid0) {
                                            if (data.dummy !== undefined) {
                                                const _errs18: number = errors;
                                                if (!(validateDummy(data.dummy, { instancePath: instancePath + "/dummy", parentData: data, parentDataProperty: "dummy", rootData }))) {
                                                    vErrors = vErrors === null ? validateDummy.errors : vErrors.concat(validateDummy.errors);
                                                    errors = vErrors.length;
                                                }
                                                var valid0 = _errs18 === errors;
                                            }
                                            else {
                                                var valid0 = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            throw new Error0([{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }]);
        }
    }
    if (errors === 0) {
        return data;
    }
    else {
        throw new Error0(vErrors);
    }
};

export const OpenApi3Validator = validatorFactory({Dummy: {validator:validateDummy, schema: schemaDummy},
Item: {validator:validateItem, schema: schemaItem},
Nested: {validator:validateNested, schema: schemaNested},
Sample: {validator:validateSample, schema: schemaSample}}, true);
