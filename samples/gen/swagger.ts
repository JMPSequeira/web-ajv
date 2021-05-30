/* eslint-disable */
import { fullFormats } from "ajv-formats/dist/formats";
import { validatorFactory, anyfy, AjvValidationFn } from './web-ajv';
export type OpenApi2SchemaId = "ApiResponse"|"Category"|"Pet"|"Tag"|"Order"|"User";

const schemaApiResponse = { "type": "object", "properties": { "code": { "type": "integer", "format": "int32", "minimum": -2147483648, "maximum": 2147483647 }, "type": { "type": "string" }, "message": { "type": "string" } }, "$id": "ApiResponse" } as const;
const formats0 = anyfy(fullFormats).int32;
const validateApiResponse: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            if (data.code !== undefined) {
                let data0 = data.code;
                const _errs1: number = errors;
                if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                    validateApiResponse.errors = [{ instancePath: instancePath + "/code", schemaPath: "#/properties/code/type", keyword: "type", params: { type: "integer" } }];
                    return false;
                }
                if (errors === _errs1) {
                    if ((typeof data0 == "number") && (isFinite(data0))) {
                        if (data0 > 2147483647 || isNaN(data0)) {
                            validateApiResponse.errors = [{ instancePath: instancePath + "/code", schemaPath: "#/properties/code/maximum", keyword: "maximum", params: { comparison: "<=", limit: 2147483647 } }];
                            return false;
                        }
                        else {
                            if (data0 < -2147483648 || isNaN(data0)) {
                                validateApiResponse.errors = [{ instancePath: instancePath + "/code", schemaPath: "#/properties/code/minimum", keyword: "minimum", params: { comparison: ">=", limit: -2147483648 } }];
                                return false;
                            }
                            else {
                                if (!(formats0.validate(data0))) {
                                    validateApiResponse.errors = [{ instancePath: instancePath + "/code", schemaPath: "#/properties/code/format", keyword: "format", params: { format: "int32" } }];
                                    return false;
                                }
                            }
                        }
                    }
                }
                var valid0 = _errs1 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.type !== undefined) {
                    const _errs3: number = errors;
                    if (typeof data.type !== "string") {
                        validateApiResponse.errors = [{ instancePath: instancePath + "/type", schemaPath: "#/properties/type/type", keyword: "type", params: { type: "string" } }];
                        return false;
                    }
                    var valid0 = _errs3 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.message !== undefined) {
                        const _errs5: number = errors;
                        if (typeof data.message !== "string") {
                            validateApiResponse.errors = [{ instancePath: instancePath + "/message", schemaPath: "#/properties/message/type", keyword: "type", params: { type: "string" } }];
                            return false;
                        }
                        var valid0 = _errs5 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                }
            }
        }
        else {
            validateApiResponse.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }];
            return false;
        }
    }
    validateApiResponse.errors = vErrors;
    return errors === 0;
};
const schemaCategory = { "type": "object", "properties": { "id": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "name": { "type": "string" } }, "$id": "Category" } as const;
const formats2 = anyfy(fullFormats).int64;
const validateCategory: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            if (data.id !== undefined) {
                let data0 = data.id;
                const _errs1: number = errors;
                if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                    validateCategory.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "integer" } }];
                    return false;
                }
                if (errors === _errs1) {
                    if ((typeof data0 == "number") && (isFinite(data0))) {
                        if (data0 > 9223372036854776000 || isNaN(data0)) {
                            validateCategory.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } }];
                            return false;
                        }
                        else {
                            if (data0 < -9223372036854776000 || isNaN(data0)) {
                                validateCategory.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } }];
                                return false;
                            }
                            else {
                                if (!(formats2.validate(data0))) {
                                    validateCategory.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/format", keyword: "format", params: { format: "int64" } }];
                                    return false;
                                }
                            }
                        }
                    }
                }
                var valid0 = _errs1 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.name !== undefined) {
                    const _errs3: number = errors;
                    if (typeof data.name !== "string") {
                        validateCategory.errors = [{ instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" } }];
                        return false;
                    }
                    var valid0 = _errs3 === errors;
                }
                else {
                    var valid0 = true;
                }
            }
        }
        else {
            validateCategory.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }];
            return false;
        }
    }
    validateCategory.errors = vErrors;
    return errors === 0;
};
const schemaPet = { "type": "object", "required": ["name", "photoUrls"], "properties": { "id": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "category": { "$ref": "Category" }, "name": { "type": "string" }, "photoUrls": { "type": "array", "items": { "type": "string" } }, "tags": { "type": "array", "items": { "$ref": "Tag" } }, "status": { "type": "string", "description": "pet status in the store", "enum": ["available", "pending", "sold"] } }, "$id": "Pet" } as const;
const schemaTag = { "type": "object", "properties": { "id": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "name": { "type": "string" } }, "$id": "Tag" } as const;
const validatePet: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            let missing0;
            if (((data.name === undefined) && (missing0 = "name")) || ((data.photoUrls === undefined) && (missing0 = "photoUrls"))) {
                validatePet.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 } }];
                return false;
            }
            else {
                if (data.id !== undefined) {
                    let data0 = data.id;
                    const _errs1: number = errors;
                    if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                        validatePet.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "integer" } }];
                        return false;
                    }
                    if (errors === _errs1) {
                        if ((typeof data0 == "number") && (isFinite(data0))) {
                            if (data0 > 9223372036854776000 || isNaN(data0)) {
                                validatePet.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } }];
                                return false;
                            }
                            else {
                                if (data0 < -9223372036854776000 || isNaN(data0)) {
                                    validatePet.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } }];
                                    return false;
                                }
                                else {
                                    if (!(formats2.validate(data0))) {
                                        validatePet.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/format", keyword: "format", params: { format: "int64" } }];
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                    var valid0 = _errs1 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.category !== undefined) {
                        let data1 = data.category;
                        const _errs3: number = errors;
                        const _errs4: number = errors;
                        if (errors === _errs4) {
                            if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                                if (data1.id !== undefined) {
                                    let data2 = data1.id;
                                    const _errs6: number = errors;
                                    if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                                        validatePet.errors = [{ instancePath: instancePath + "/category/id", schemaPath: "Category/properties/id/type", keyword: "type", params: { type: "integer" } }];
                                        return false;
                                    }
                                    if (errors === _errs6) {
                                        if ((typeof data2 == "number") && (isFinite(data2))) {
                                            if (data2 > 9223372036854776000 || isNaN(data2)) {
                                                validatePet.errors = [{ instancePath: instancePath + "/category/id", schemaPath: "Category/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } }];
                                                return false;
                                            }
                                            else {
                                                if (data2 < -9223372036854776000 || isNaN(data2)) {
                                                    validatePet.errors = [{ instancePath: instancePath + "/category/id", schemaPath: "Category/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } }];
                                                    return false;
                                                }
                                                else {
                                                    if (!(formats2.validate(data2))) {
                                                        validatePet.errors = [{ instancePath: instancePath + "/category/id", schemaPath: "Category/properties/id/format", keyword: "format", params: { format: "int64" } }];
                                                        return false;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    var valid2 = _errs6 === errors;
                                }
                                else {
                                    var valid2 = true;
                                }
                                if (valid2) {
                                    if (data1.name !== undefined) {
                                        const _errs8: number = errors;
                                        if (typeof data1.name !== "string") {
                                            validatePet.errors = [{ instancePath: instancePath + "/category/name", schemaPath: "Category/properties/name/type", keyword: "type", params: { type: "string" } }];
                                            return false;
                                        }
                                        var valid2 = _errs8 === errors;
                                    }
                                    else {
                                        var valid2 = true;
                                    }
                                }
                            }
                            else {
                                validatePet.errors = [{ instancePath: instancePath + "/category", schemaPath: "Category/type", keyword: "type", params: { type: "object" } }];
                                return false;
                            }
                        }
                        var valid0 = _errs3 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.name !== undefined) {
                            const _errs10: number = errors;
                            if (typeof data.name !== "string") {
                                validatePet.errors = [{ instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" } }];
                                return false;
                            }
                            var valid0 = _errs10 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.photoUrls !== undefined) {
                                let data5 = data.photoUrls;
                                const _errs12: number = errors;
                                if (errors === _errs12) {
                                    if (Array.isArray(data5)) {
                                        var valid3 = true;
                                        const len0 = data5.length;
                                        for (let i0 = 0; i0 < len0; i0++) {
                                            const _errs14: number = errors;
                                            if (typeof data5[i0] !== "string") {
                                                validatePet.errors = [{ instancePath: instancePath + "/photoUrls/" + i0, schemaPath: "#/properties/photoUrls/items/type", keyword: "type", params: { type: "string" } }];
                                                return false;
                                            }
                                            var valid3 = _errs14 === errors;
                                            if (!valid3) {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        validatePet.errors = [{ instancePath: instancePath + "/photoUrls", schemaPath: "#/properties/photoUrls/type", keyword: "type", params: { type: "array" } }];
                                        return false;
                                    }
                                }
                                var valid0 = _errs12 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.tags !== undefined) {
                                    let data7 = data.tags;
                                    const _errs16: number = errors;
                                    if (errors === _errs16) {
                                        if (Array.isArray(data7)) {
                                            var valid4 = true;
                                            const len1 = data7.length;
                                            for (let i1 = 0; i1 < len1; i1++) {
                                                let data8 = data7[i1];
                                                const _errs18: number = errors;
                                                const _errs19: number = errors;
                                                if (errors === _errs19) {
                                                    if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                                                        if (data8.id !== undefined) {
                                                            let data9 = data8.id;
                                                            const _errs21: number = errors;
                                                            if (!(((typeof data9 == "number") && (!(data9 % 1) && !isNaN(data9))) && (isFinite(data9)))) {
                                                                validatePet.errors = [{ instancePath: instancePath + "/tags/" + i1 + "/id", schemaPath: "Tag/properties/id/type", keyword: "type", params: { type: "integer" } }];
                                                                return false;
                                                            }
                                                            if (errors === _errs21) {
                                                                if ((typeof data9 == "number") && (isFinite(data9))) {
                                                                    if (data9 > 9223372036854776000 || isNaN(data9)) {
                                                                        validatePet.errors = [{ instancePath: instancePath + "/tags/" + i1 + "/id", schemaPath: "Tag/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } }];
                                                                        return false;
                                                                    }
                                                                    else {
                                                                        if (data9 < -9223372036854776000 || isNaN(data9)) {
                                                                            validatePet.errors = [{ instancePath: instancePath + "/tags/" + i1 + "/id", schemaPath: "Tag/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } }];
                                                                            return false;
                                                                        }
                                                                        else {
                                                                            if (!(formats2.validate(data9))) {
                                                                                validatePet.errors = [{ instancePath: instancePath + "/tags/" + i1 + "/id", schemaPath: "Tag/properties/id/format", keyword: "format", params: { format: "int64" } }];
                                                                                return false;
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            var valid6 = _errs21 === errors;
                                                        }
                                                        else {
                                                            var valid6 = true;
                                                        }
                                                        if (valid6) {
                                                            if (data8.name !== undefined) {
                                                                const _errs23: number = errors;
                                                                if (typeof data8.name !== "string") {
                                                                    validatePet.errors = [{ instancePath: instancePath + "/tags/" + i1 + "/name", schemaPath: "Tag/properties/name/type", keyword: "type", params: { type: "string" } }];
                                                                    return false;
                                                                }
                                                                var valid6 = _errs23 === errors;
                                                            }
                                                            else {
                                                                var valid6 = true;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        validatePet.errors = [{ instancePath: instancePath + "/tags/" + i1, schemaPath: "Tag/type", keyword: "type", params: { type: "object" } }];
                                                        return false;
                                                    }
                                                }
                                                var valid4 = _errs18 === errors;
                                                if (!valid4) {
                                                    break;
                                                }
                                            }
                                        }
                                        else {
                                            validatePet.errors = [{ instancePath: instancePath + "/tags", schemaPath: "#/properties/tags/type", keyword: "type", params: { type: "array" } }];
                                            return false;
                                        }
                                    }
                                    var valid0 = _errs16 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.status !== undefined) {
                                        let data11 = data.status;
                                        const _errs25: number = errors;
                                        if (typeof data11 !== "string") {
                                            validatePet.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" } }];
                                            return false;
                                        }
                                        if (!(((data11 === "available") || (data11 === "pending")) || (data11 === "sold"))) {
                                            validatePet.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/enum", keyword: "enum", params: { allowedValues: schemaPet.properties.status.enum } }];
                                            return false;
                                        }
                                        var valid0 = _errs25 === errors;
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
        else {
            validatePet.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }];
            return false;
        }
    }
    validatePet.errors = vErrors;
    return errors === 0;
};
const validateTag: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            if (data.id !== undefined) {
                let data0 = data.id;
                const _errs1: number = errors;
                if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                    validateTag.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "integer" } }];
                    return false;
                }
                if (errors === _errs1) {
                    if ((typeof data0 == "number") && (isFinite(data0))) {
                        if (data0 > 9223372036854776000 || isNaN(data0)) {
                            validateTag.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } }];
                            return false;
                        }
                        else {
                            if (data0 < -9223372036854776000 || isNaN(data0)) {
                                validateTag.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } }];
                                return false;
                            }
                            else {
                                if (!(formats2.validate(data0))) {
                                    validateTag.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/format", keyword: "format", params: { format: "int64" } }];
                                    return false;
                                }
                            }
                        }
                    }
                }
                var valid0 = _errs1 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.name !== undefined) {
                    const _errs3: number = errors;
                    if (typeof data.name !== "string") {
                        validateTag.errors = [{ instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" } }];
                        return false;
                    }
                    var valid0 = _errs3 === errors;
                }
                else {
                    var valid0 = true;
                }
            }
        }
        else {
            validateTag.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }];
            return false;
        }
    }
    validateTag.errors = vErrors;
    return errors === 0;
};
const schemaOrder = { "type": "object", "properties": { "id": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "petId": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "quantity": { "type": "integer", "format": "int32", "minimum": -2147483648, "maximum": 2147483647 }, "shipDate": { "type": "string", "format": "date-time" }, "status": { "type": "string", "description": "Order Status", "enum": ["placed", "approved", "delivered"] }, "complete": { "type": "boolean" } }, "$id": "Order" } as const;
const formats18 = anyfy(fullFormats)["date-time"];
const validateOrder: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            if (data.id !== undefined) {
                let data0 = data.id;
                const _errs1: number = errors;
                if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                    validateOrder.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "integer" } }];
                    return false;
                }
                if (errors === _errs1) {
                    if ((typeof data0 == "number") && (isFinite(data0))) {
                        if (data0 > 9223372036854776000 || isNaN(data0)) {
                            validateOrder.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } }];
                            return false;
                        }
                        else {
                            if (data0 < -9223372036854776000 || isNaN(data0)) {
                                validateOrder.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } }];
                                return false;
                            }
                            else {
                                if (!(formats2.validate(data0))) {
                                    validateOrder.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/format", keyword: "format", params: { format: "int64" } }];
                                    return false;
                                }
                            }
                        }
                    }
                }
                var valid0 = _errs1 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.petId !== undefined) {
                    let data1 = data.petId;
                    const _errs3: number = errors;
                    if (!(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))) {
                        validateOrder.errors = [{ instancePath: instancePath + "/petId", schemaPath: "#/properties/petId/type", keyword: "type", params: { type: "integer" } }];
                        return false;
                    }
                    if (errors === _errs3) {
                        if ((typeof data1 == "number") && (isFinite(data1))) {
                            if (data1 > 9223372036854776000 || isNaN(data1)) {
                                validateOrder.errors = [{ instancePath: instancePath + "/petId", schemaPath: "#/properties/petId/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } }];
                                return false;
                            }
                            else {
                                if (data1 < -9223372036854776000 || isNaN(data1)) {
                                    validateOrder.errors = [{ instancePath: instancePath + "/petId", schemaPath: "#/properties/petId/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } }];
                                    return false;
                                }
                                else {
                                    if (!(formats2.validate(data1))) {
                                        validateOrder.errors = [{ instancePath: instancePath + "/petId", schemaPath: "#/properties/petId/format", keyword: "format", params: { format: "int64" } }];
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                    var valid0 = _errs3 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.quantity !== undefined) {
                        let data2 = data.quantity;
                        const _errs5: number = errors;
                        if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                            validateOrder.errors = [{ instancePath: instancePath + "/quantity", schemaPath: "#/properties/quantity/type", keyword: "type", params: { type: "integer" } }];
                            return false;
                        }
                        if (errors === _errs5) {
                            if ((typeof data2 == "number") && (isFinite(data2))) {
                                if (data2 > 2147483647 || isNaN(data2)) {
                                    validateOrder.errors = [{ instancePath: instancePath + "/quantity", schemaPath: "#/properties/quantity/maximum", keyword: "maximum", params: { comparison: "<=", limit: 2147483647 } }];
                                    return false;
                                }
                                else {
                                    if (data2 < -2147483648 || isNaN(data2)) {
                                        validateOrder.errors = [{ instancePath: instancePath + "/quantity", schemaPath: "#/properties/quantity/minimum", keyword: "minimum", params: { comparison: ">=", limit: -2147483648 } }];
                                        return false;
                                    }
                                    else {
                                        if (!(formats0.validate(data2))) {
                                            validateOrder.errors = [{ instancePath: instancePath + "/quantity", schemaPath: "#/properties/quantity/format", keyword: "format", params: { format: "int32" } }];
                                            return false;
                                        }
                                    }
                                }
                            }
                        }
                        var valid0 = _errs5 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.shipDate !== undefined) {
                            let data3 = data.shipDate;
                            const _errs7: number = errors;
                            if (errors === _errs7) {
                                if (errors === _errs7) {
                                    if (typeof data3 === "string") {
                                        if (!(formats18.validate(data3))) {
                                            validateOrder.errors = [{ instancePath: instancePath + "/shipDate", schemaPath: "#/properties/shipDate/format", keyword: "format", params: { format: "date-time" } }];
                                            return false;
                                        }
                                    }
                                    else {
                                        validateOrder.errors = [{ instancePath: instancePath + "/shipDate", schemaPath: "#/properties/shipDate/type", keyword: "type", params: { type: "string" } }];
                                        return false;
                                    }
                                }
                            }
                            var valid0 = _errs7 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.status !== undefined) {
                                let data4 = data.status;
                                const _errs9: number = errors;
                                if (typeof data4 !== "string") {
                                    validateOrder.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" } }];
                                    return false;
                                }
                                if (!(((data4 === "placed") || (data4 === "approved")) || (data4 === "delivered"))) {
                                    validateOrder.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/enum", keyword: "enum", params: { allowedValues: schemaOrder.properties.status.enum } }];
                                    return false;
                                }
                                var valid0 = _errs9 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.complete !== undefined) {
                                    const _errs11: number = errors;
                                    if (typeof data.complete !== "boolean") {
                                        validateOrder.errors = [{ instancePath: instancePath + "/complete", schemaPath: "#/properties/complete/type", keyword: "type", params: { type: "boolean" } }];
                                        return false;
                                    }
                                    var valid0 = _errs11 === errors;
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
        else {
            validateOrder.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }];
            return false;
        }
    }
    validateOrder.errors = vErrors;
    return errors === 0;
};
const schemaUser = { "type": "object", "properties": { "id": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "username": { "type": "string" }, "firstName": { "type": "string" }, "lastName": { "type": "string" }, "email": { "type": "string" }, "password": { "type": "string" }, "phone": { "type": "string" }, "userStatus": { "type": "integer", "format": "int32", "description": "User Status", "minimum": -2147483648, "maximum": 2147483647 } }, "$id": "User" } as const;
const validateUser: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            if (data.id !== undefined) {
                let data0 = data.id;
                const _errs1: number = errors;
                if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                    validateUser.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "integer" } }];
                    return false;
                }
                if (errors === _errs1) {
                    if ((typeof data0 == "number") && (isFinite(data0))) {
                        if (data0 > 9223372036854776000 || isNaN(data0)) {
                            validateUser.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } }];
                            return false;
                        }
                        else {
                            if (data0 < -9223372036854776000 || isNaN(data0)) {
                                validateUser.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } }];
                                return false;
                            }
                            else {
                                if (!(formats2.validate(data0))) {
                                    validateUser.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/format", keyword: "format", params: { format: "int64" } }];
                                    return false;
                                }
                            }
                        }
                    }
                }
                var valid0 = _errs1 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.username !== undefined) {
                    const _errs3: number = errors;
                    if (typeof data.username !== "string") {
                        validateUser.errors = [{ instancePath: instancePath + "/username", schemaPath: "#/properties/username/type", keyword: "type", params: { type: "string" } }];
                        return false;
                    }
                    var valid0 = _errs3 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.firstName !== undefined) {
                        const _errs5: number = errors;
                        if (typeof data.firstName !== "string") {
                            validateUser.errors = [{ instancePath: instancePath + "/firstName", schemaPath: "#/properties/firstName/type", keyword: "type", params: { type: "string" } }];
                            return false;
                        }
                        var valid0 = _errs5 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.lastName !== undefined) {
                            const _errs7: number = errors;
                            if (typeof data.lastName !== "string") {
                                validateUser.errors = [{ instancePath: instancePath + "/lastName", schemaPath: "#/properties/lastName/type", keyword: "type", params: { type: "string" } }];
                                return false;
                            }
                            var valid0 = _errs7 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.email !== undefined) {
                                const _errs9: number = errors;
                                if (typeof data.email !== "string") {
                                    validateUser.errors = [{ instancePath: instancePath + "/email", schemaPath: "#/properties/email/type", keyword: "type", params: { type: "string" } }];
                                    return false;
                                }
                                var valid0 = _errs9 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.password !== undefined) {
                                    const _errs11: number = errors;
                                    if (typeof data.password !== "string") {
                                        validateUser.errors = [{ instancePath: instancePath + "/password", schemaPath: "#/properties/password/type", keyword: "type", params: { type: "string" } }];
                                        return false;
                                    }
                                    var valid0 = _errs11 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.phone !== undefined) {
                                        const _errs13: number = errors;
                                        if (typeof data.phone !== "string") {
                                            validateUser.errors = [{ instancePath: instancePath + "/phone", schemaPath: "#/properties/phone/type", keyword: "type", params: { type: "string" } }];
                                            return false;
                                        }
                                        var valid0 = _errs13 === errors;
                                    }
                                    else {
                                        var valid0 = true;
                                    }
                                    if (valid0) {
                                        if (data.userStatus !== undefined) {
                                            let data7 = data.userStatus;
                                            const _errs15: number = errors;
                                            if (!(((typeof data7 == "number") && (!(data7 % 1) && !isNaN(data7))) && (isFinite(data7)))) {
                                                validateUser.errors = [{ instancePath: instancePath + "/userStatus", schemaPath: "#/properties/userStatus/type", keyword: "type", params: { type: "integer" } }];
                                                return false;
                                            }
                                            if (errors === _errs15) {
                                                if ((typeof data7 == "number") && (isFinite(data7))) {
                                                    if (data7 > 2147483647 || isNaN(data7)) {
                                                        validateUser.errors = [{ instancePath: instancePath + "/userStatus", schemaPath: "#/properties/userStatus/maximum", keyword: "maximum", params: { comparison: "<=", limit: 2147483647 } }];
                                                        return false;
                                                    }
                                                    else {
                                                        if (data7 < -2147483648 || isNaN(data7)) {
                                                            validateUser.errors = [{ instancePath: instancePath + "/userStatus", schemaPath: "#/properties/userStatus/minimum", keyword: "minimum", params: { comparison: ">=", limit: -2147483648 } }];
                                                            return false;
                                                        }
                                                        else {
                                                            if (!(formats0.validate(data7))) {
                                                                validateUser.errors = [{ instancePath: instancePath + "/userStatus", schemaPath: "#/properties/userStatus/format", keyword: "format", params: { format: "int32" } }];
                                                                return false;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            var valid0 = _errs15 === errors;
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
        else {
            validateUser.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }];
            return false;
        }
    }
    validateUser.errors = vErrors;
    return errors === 0;
};

export const OpenApi2Validator = validatorFactory({ApiResponse: {validator:validateApiResponse, schema: schemaApiResponse},
Category: {validator:validateCategory, schema: schemaCategory},
Pet: {validator:validatePet, schema: schemaPet},
Tag: {validator:validateTag, schema: schemaTag},
Order: {validator:validateOrder, schema: schemaOrder},
User: {validator:validateUser, schema: schemaUser}}, false);
