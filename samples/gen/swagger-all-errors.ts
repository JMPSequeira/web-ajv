/* eslint-disable */
import { fullFormats } from "ajv-formats/dist/formats";
import { e, validatorFactory, WebAjvError, anyfy, AjvValidationFn } from './web-ajv';
export type OpenApi2SchemaId = "ApiResponse"|"Category"|"Pet"|"Tag"|"Order"|"User";
            
const _constants = { schema13: { [".properties.status.enum"]: ["available", "pending", "sold"] }, schema17: { [".properties.status.enum"]: ["placed", "approved", "delivered"] } };
const formats0 = anyfy(fullFormats).int32;
const validateApiResponse: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.code !== undefined) {
            let data0 = data.code;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                errors = vErrors.push(e(instancePath + "/code", "#/properties/code/type", "type", { type: "integer" }));
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 2147483647 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/code", "#/properties/code/maximum", "maximum", { comparison: "<=", limit: 2147483647 }));
                }
                if (data0 < -2147483648 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/code", "#/properties/code/minimum", "minimum", { comparison: ">=", limit: -2147483648 }));
                }
                if (!(formats0.validate(data0))) {
                    errors = vErrors.push(e(instancePath + "/code", "#/properties/code/format", "format", { format: "int32" }));
                }
            }
        }
        if (data.type !== undefined) {
            if (typeof data.type !== "string") {
                errors = vErrors.push(e(instancePath + "/type", "#/properties/type/type", "type", { type: "string" }));
            }
        }
        if (data.message !== undefined) {
            if (typeof data.message !== "string") {
                errors = vErrors.push(e(instancePath + "/message", "#/properties/message/type", "type", { type: "string" }));
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
    }
    validateApiResponse.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const formats2 = anyfy(fullFormats).int64;
const validateCategory: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                errors = vErrors.push(e(instancePath + "/id", "#/properties/id/type", "type", { type: "integer" }));
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 9223372036854776000 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 }));
                }
                if (data0 < -9223372036854776000 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 }));
                }
                if (!(formats2.validate(data0))) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/format", "format", { format: "int64" }));
                }
            }
        }
        if (data.name !== undefined) {
            if (typeof data.name !== "string") {
                errors = vErrors.push(e(instancePath + "/name", "#/properties/name/type", "type", { type: "string" }));
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
    }
    validateCategory.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validatePet: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.name === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "name" }));
        }
        if (data.photoUrls === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "photoUrls" }));
        }
        if (data.id !== undefined) {
            let data0 = data.id;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                errors = vErrors.push(e(instancePath + "/id", "#/properties/id/type", "type", { type: "integer" }));
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 9223372036854776000 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 }));
                }
                if (data0 < -9223372036854776000 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 }));
                }
                if (!(formats2.validate(data0))) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/format", "format", { format: "int64" }));
                }
            }
        }
        if (data.category !== undefined) {
            let data1 = data.category;
            if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                if (data1.id !== undefined) {
                    let data2 = data1.id;
                    if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                        errors = vErrors.push(e(instancePath + "/category/id", "Category/properties/id/type", "type", { type: "integer" }));
                    }
                    if ((typeof data2 == "number") && (isFinite(data2))) {
                        if (data2 > 9223372036854776000 || isNaN(data2)) {
                            errors = vErrors.push(e(instancePath + "/category/id", "Category/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 }));
                        }
                        if (data2 < -9223372036854776000 || isNaN(data2)) {
                            errors = vErrors.push(e(instancePath + "/category/id", "Category/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 }));
                        }
                        if (!(formats2.validate(data2))) {
                            errors = vErrors.push(e(instancePath + "/category/id", "Category/properties/id/format", "format", { format: "int64" }));
                        }
                    }
                }
                if (data1.name !== undefined) {
                    if (typeof data1.name !== "string") {
                        errors = vErrors.push(e(instancePath + "/category/name", "Category/properties/name/type", "type", { type: "string" }));
                    }
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/category", "Category/type", "type", { type: "object" }));
            }
        }
        if (data.name !== undefined) {
            if (typeof data.name !== "string") {
                errors = vErrors.push(e(instancePath + "/name", "#/properties/name/type", "type", { type: "string" }));
            }
        }
        if (data.photoUrls !== undefined) {
            let data5 = data.photoUrls;
            if (Array.isArray(data5)) {
                const len0 = data5.length;
                for (let i0 = 0; i0 < len0; i0++) {
                    if (typeof data5[i0] !== "string") {
                        errors = vErrors.push(e(instancePath + "/photoUrls/" + i0, "#/properties/photoUrls/items/type", "type", { type: "string" }));
                    }
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/photoUrls", "#/properties/photoUrls/type", "type", { type: "array" }));
            }
        }
        if (data.tags !== undefined) {
            let data7 = data.tags;
            if (Array.isArray(data7)) {
                const len1 = data7.length;
                for (let i1 = 0; i1 < len1; i1++) {
                    let data8 = data7[i1];
                    if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                        if (data8.id !== undefined) {
                            let data9 = data8.id;
                            if (!(((typeof data9 == "number") && (!(data9 % 1) && !isNaN(data9))) && (isFinite(data9)))) {
                                errors = vErrors.push(e(instancePath + "/tags/" + i1 + "/id", "Tag/properties/id/type", "type", { type: "integer" }));
                            }
                            if ((typeof data9 == "number") && (isFinite(data9))) {
                                if (data9 > 9223372036854776000 || isNaN(data9)) {
                                    errors = vErrors.push(e(instancePath + "/tags/" + i1 + "/id", "Tag/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 }));
                                }
                                if (data9 < -9223372036854776000 || isNaN(data9)) {
                                    errors = vErrors.push(e(instancePath + "/tags/" + i1 + "/id", "Tag/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 }));
                                }
                                if (!(formats2.validate(data9))) {
                                    errors = vErrors.push(e(instancePath + "/tags/" + i1 + "/id", "Tag/properties/id/format", "format", { format: "int64" }));
                                }
                            }
                        }
                        if (data8.name !== undefined) {
                            if (typeof data8.name !== "string") {
                                errors = vErrors.push(e(instancePath + "/tags/" + i1 + "/name", "Tag/properties/name/type", "type", { type: "string" }));
                            }
                        }
                    }
                    else {
                        errors = vErrors.push(e(instancePath + "/tags/" + i1, "Tag/type", "type", { type: "object" }));
                    }
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/tags", "#/properties/tags/type", "type", { type: "array" }));
            }
        }
        if (data.status !== undefined) {
            let data11 = data.status;
            if (typeof data11 !== "string") {
                errors = vErrors.push(e(instancePath + "/status", "#/properties/status/type", "type", { type: "string" }));
            }
            if (!(((data11 === "available") || (data11 === "pending")) || (data11 === "sold"))) {
                errors = vErrors.push(e(instancePath + "/status", "#/properties/status/enum", "enum", { allowedValues: _constants.schema13[".properties.status.enum"] }));
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
    }
    validatePet.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateTag: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                errors = vErrors.push(e(instancePath + "/id", "#/properties/id/type", "type", { type: "integer" }));
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 9223372036854776000 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 }));
                }
                if (data0 < -9223372036854776000 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 }));
                }
                if (!(formats2.validate(data0))) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/format", "format", { format: "int64" }));
                }
            }
        }
        if (data.name !== undefined) {
            if (typeof data.name !== "string") {
                errors = vErrors.push(e(instancePath + "/name", "#/properties/name/type", "type", { type: "string" }));
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
    }
    validateTag.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const formats18 = anyfy(fullFormats)["date-time"];
const validateOrder: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                errors = vErrors.push(e(instancePath + "/id", "#/properties/id/type", "type", { type: "integer" }));
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 9223372036854776000 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 }));
                }
                if (data0 < -9223372036854776000 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 }));
                }
                if (!(formats2.validate(data0))) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/format", "format", { format: "int64" }));
                }
            }
        }
        if (data.petId !== undefined) {
            let data1 = data.petId;
            if (!(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))) {
                errors = vErrors.push(e(instancePath + "/petId", "#/properties/petId/type", "type", { type: "integer" }));
            }
            if ((typeof data1 == "number") && (isFinite(data1))) {
                if (data1 > 9223372036854776000 || isNaN(data1)) {
                    errors = vErrors.push(e(instancePath + "/petId", "#/properties/petId/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 }));
                }
                if (data1 < -9223372036854776000 || isNaN(data1)) {
                    errors = vErrors.push(e(instancePath + "/petId", "#/properties/petId/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 }));
                }
                if (!(formats2.validate(data1))) {
                    errors = vErrors.push(e(instancePath + "/petId", "#/properties/petId/format", "format", { format: "int64" }));
                }
            }
        }
        if (data.quantity !== undefined) {
            let data2 = data.quantity;
            if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                errors = vErrors.push(e(instancePath + "/quantity", "#/properties/quantity/type", "type", { type: "integer" }));
            }
            if ((typeof data2 == "number") && (isFinite(data2))) {
                if (data2 > 2147483647 || isNaN(data2)) {
                    errors = vErrors.push(e(instancePath + "/quantity", "#/properties/quantity/maximum", "maximum", { comparison: "<=", limit: 2147483647 }));
                }
                if (data2 < -2147483648 || isNaN(data2)) {
                    errors = vErrors.push(e(instancePath + "/quantity", "#/properties/quantity/minimum", "minimum", { comparison: ">=", limit: -2147483648 }));
                }
                if (!(formats0.validate(data2))) {
                    errors = vErrors.push(e(instancePath + "/quantity", "#/properties/quantity/format", "format", { format: "int32" }));
                }
            }
        }
        if (data.shipDate !== undefined) {
            let data3 = data.shipDate;
            if (typeof data3 === "string") {
                if (!(formats18.validate(data3))) {
                    errors = vErrors.push(e(instancePath + "/shipDate", "#/properties/shipDate/format", "format", { format: "date-time" }));
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/shipDate", "#/properties/shipDate/type", "type", { type: "string" }));
            }
        }
        if (data.status !== undefined) {
            let data4 = data.status;
            if (typeof data4 !== "string") {
                errors = vErrors.push(e(instancePath + "/status", "#/properties/status/type", "type", { type: "string" }));
            }
            if (!(((data4 === "placed") || (data4 === "approved")) || (data4 === "delivered"))) {
                errors = vErrors.push(e(instancePath + "/status", "#/properties/status/enum", "enum", { allowedValues: _constants.schema17[".properties.status.enum"] }));
            }
        }
        if (data.complete !== undefined) {
            if (typeof data.complete !== "boolean") {
                errors = vErrors.push(e(instancePath + "/complete", "#/properties/complete/type", "type", { type: "boolean" }));
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
    }
    validateOrder.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateUser: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                errors = vErrors.push(e(instancePath + "/id", "#/properties/id/type", "type", { type: "integer" }));
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 9223372036854776000 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 }));
                }
                if (data0 < -9223372036854776000 || isNaN(data0)) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 }));
                }
                if (!(formats2.validate(data0))) {
                    errors = vErrors.push(e(instancePath + "/id", "#/properties/id/format", "format", { format: "int64" }));
                }
            }
        }
        if (data.username !== undefined) {
            if (typeof data.username !== "string") {
                errors = vErrors.push(e(instancePath + "/username", "#/properties/username/type", "type", { type: "string" }));
            }
        }
        if (data.firstName !== undefined) {
            if (typeof data.firstName !== "string") {
                errors = vErrors.push(e(instancePath + "/firstName", "#/properties/firstName/type", "type", { type: "string" }));
            }
        }
        if (data.lastName !== undefined) {
            if (typeof data.lastName !== "string") {
                errors = vErrors.push(e(instancePath + "/lastName", "#/properties/lastName/type", "type", { type: "string" }));
            }
        }
        if (data.email !== undefined) {
            if (typeof data.email !== "string") {
                errors = vErrors.push(e(instancePath + "/email", "#/properties/email/type", "type", { type: "string" }));
            }
        }
        if (data.password !== undefined) {
            if (typeof data.password !== "string") {
                errors = vErrors.push(e(instancePath + "/password", "#/properties/password/type", "type", { type: "string" }));
            }
        }
        if (data.phone !== undefined) {
            if (typeof data.phone !== "string") {
                errors = vErrors.push(e(instancePath + "/phone", "#/properties/phone/type", "type", { type: "string" }));
            }
        }
        if (data.userStatus !== undefined) {
            let data7 = data.userStatus;
            if (!(((typeof data7 == "number") && (!(data7 % 1) && !isNaN(data7))) && (isFinite(data7)))) {
                errors = vErrors.push(e(instancePath + "/userStatus", "#/properties/userStatus/type", "type", { type: "integer" }));
            }
            if ((typeof data7 == "number") && (isFinite(data7))) {
                if (data7 > 2147483647 || isNaN(data7)) {
                    errors = vErrors.push(e(instancePath + "/userStatus", "#/properties/userStatus/maximum", "maximum", { comparison: "<=", limit: 2147483647 }));
                }
                if (data7 < -2147483648 || isNaN(data7)) {
                    errors = vErrors.push(e(instancePath + "/userStatus", "#/properties/userStatus/minimum", "minimum", { comparison: ">=", limit: -2147483648 }));
                }
                if (!(formats0.validate(data7))) {
                    errors = vErrors.push(e(instancePath + "/userStatus", "#/properties/userStatus/format", "format", { format: "int32" }));
                }
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
    }
    validateUser.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};

export const OpenApi2Validator = validatorFactory({ApiResponse: validateApiResponse,Category: validateCategory,Pet: validatePet,Tag: validateTag,Order: validateOrder,User: validateUser}, false);
    