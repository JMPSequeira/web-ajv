/* eslint-disable */
import { fullFormats } from "ajv-formats/dist/formats";
import func0 from "ajv/dist/runtime/equal"
import { validatorFactory, AjvValidationFn } from 'web-ajv';
export type OpenApi2SchemaId = "ApiResponse"|"Category"|"Pet"|"Tag"|"Order"|"User";

const schemaApiResponse = { "type": "object", "properties": { "code": { "type": "integer", "format": "int32", "minimum": -2147483648, "maximum": 2147483647 }, "type": { "type": "string" }, "message": { "type": "string" } }, "$id": "ApiResponse" } as const;
const formats0 = (fullFormats as any).int32;
const validateApiResponse: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors: any = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.code !== undefined) {
            let data0 = data.code;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                const err0 = { instancePath: instancePath + "/code", schemaPath: "#/properties/code/type", keyword: "type", params: { type: "integer" } };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 2147483647 || isNaN(data0)) {
                    const err1 = { instancePath: instancePath + "/code", schemaPath: "#/properties/code/maximum", keyword: "maximum", params: { comparison: "<=", limit: 2147483647 } };
                    if (vErrors === null) {
                        vErrors = [err1];
                    }
                    else {
                        vErrors.push(err1);
                    }
                    errors++;
                }
                if (data0 < -2147483648 || isNaN(data0)) {
                    const err2 = { instancePath: instancePath + "/code", schemaPath: "#/properties/code/minimum", keyword: "minimum", params: { comparison: ">=", limit: -2147483648 } };
                    if (vErrors === null) {
                        vErrors = [err2];
                    }
                    else {
                        vErrors.push(err2);
                    }
                    errors++;
                }
                if (!(formats0.validate(data0))) {
                    const err3 = { instancePath: instancePath + "/code", schemaPath: "#/properties/code/format", keyword: "format", params: { format: "int32" } };
                    if (vErrors === null) {
                        vErrors = [err3];
                    }
                    else {
                        vErrors.push(err3);
                    }
                    errors++;
                }
            }
        }
        if (data.type !== undefined) {
            if (typeof data.type !== "string") {
                const err4 = { instancePath: instancePath + "/type", schemaPath: "#/properties/type/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err4];
                }
                else {
                    vErrors.push(err4);
                }
                errors++;
            }
        }
        if (data.message !== undefined) {
            if (typeof data.message !== "string") {
                const err5 = { instancePath: instancePath + "/message", schemaPath: "#/properties/message/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err5];
                }
                else {
                    vErrors.push(err5);
                }
                errors++;
            }
        }
    }
    else {
        const err6 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } };
        if (vErrors === null) {
            vErrors = [err6];
        }
        else {
            vErrors.push(err6);
        }
        errors++;
    }
    validateApiResponse.errors = vErrors;
    return errors === 0;
};
const schemaCategory = { "type": "object", "properties": { "id": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "name": { "type": "string" } }, "$id": "Category" } as const;
const formats2 = (fullFormats as any).int64;
const validateCategory: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors: any = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                const err0 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "integer" } };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 9223372036854776000 || isNaN(data0)) {
                    const err1 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err1];
                    }
                    else {
                        vErrors.push(err1);
                    }
                    errors++;
                }
                if (data0 < -9223372036854776000 || isNaN(data0)) {
                    const err2 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err2];
                    }
                    else {
                        vErrors.push(err2);
                    }
                    errors++;
                }
                if (!(formats2.validate(data0))) {
                    const err3 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/format", keyword: "format", params: { format: "int64" } };
                    if (vErrors === null) {
                        vErrors = [err3];
                    }
                    else {
                        vErrors.push(err3);
                    }
                    errors++;
                }
            }
        }
        if (data.name !== undefined) {
            if (typeof data.name !== "string") {
                const err4 = { instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err4];
                }
                else {
                    vErrors.push(err4);
                }
                errors++;
            }
        }
    }
    else {
        const err5 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } };
        if (vErrors === null) {
            vErrors = [err5];
        }
        else {
            vErrors.push(err5);
        }
        errors++;
    }
    validateCategory.errors = vErrors;
    return errors === 0;
};
const schemaPet = { "type": "object", "required": ["name", "photoUrls"], "properties": { "id": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "category": { "$ref": "Category" }, "name": { "type": "string" }, "photoUrls": { "type": "array", "items": { "type": "string" } }, "tags": { "type": "array", "items": { "$ref": "Tag" } }, "status": { "type": "string", "description": "pet status in the store", "enum": ["available", "pending", "sold"] } }, "$id": "Pet" } as const;
const schemaTag = { "type": "object", "properties": { "id": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "name": { "type": "string" } }, "$id": "Tag" } as const;
const validatePet: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors: any = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.name === undefined) {
            const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "name" } };
            if (vErrors === null) {
                vErrors = [err0];
            }
            else {
                vErrors.push(err0);
            }
            errors++;
        }
        if (data.photoUrls === undefined) {
            const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "photoUrls" } };
            if (vErrors === null) {
                vErrors = [err1];
            }
            else {
                vErrors.push(err1);
            }
            errors++;
        }
        if (data.id !== undefined) {
            let data0 = data.id;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                const err2 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "integer" } };
                if (vErrors === null) {
                    vErrors = [err2];
                }
                else {
                    vErrors.push(err2);
                }
                errors++;
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 9223372036854776000 || isNaN(data0)) {
                    const err3 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err3];
                    }
                    else {
                        vErrors.push(err3);
                    }
                    errors++;
                }
                if (data0 < -9223372036854776000 || isNaN(data0)) {
                    const err4 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err4];
                    }
                    else {
                        vErrors.push(err4);
                    }
                    errors++;
                }
                if (!(formats2.validate(data0))) {
                    const err5 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/format", keyword: "format", params: { format: "int64" } };
                    if (vErrors === null) {
                        vErrors = [err5];
                    }
                    else {
                        vErrors.push(err5);
                    }
                    errors++;
                }
            }
        }
        if (data.category !== undefined) {
            let data1 = data.category;
            if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                if (data1.id !== undefined) {
                    let data2 = data1.id;
                    if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                        const err6 = { instancePath: instancePath + "/category/id", schemaPath: "Category/properties/id/type", keyword: "type", params: { type: "integer" } };
                        if (vErrors === null) {
                            vErrors = [err6];
                        }
                        else {
                            vErrors.push(err6);
                        }
                        errors++;
                    }
                    if ((typeof data2 == "number") && (isFinite(data2))) {
                        if (data2 > 9223372036854776000 || isNaN(data2)) {
                            const err7 = { instancePath: instancePath + "/category/id", schemaPath: "Category/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } };
                            if (vErrors === null) {
                                vErrors = [err7];
                            }
                            else {
                                vErrors.push(err7);
                            }
                            errors++;
                        }
                        if (data2 < -9223372036854776000 || isNaN(data2)) {
                            const err8 = { instancePath: instancePath + "/category/id", schemaPath: "Category/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } };
                            if (vErrors === null) {
                                vErrors = [err8];
                            }
                            else {
                                vErrors.push(err8);
                            }
                            errors++;
                        }
                        if (!(formats2.validate(data2))) {
                            const err9 = { instancePath: instancePath + "/category/id", schemaPath: "Category/properties/id/format", keyword: "format", params: { format: "int64" } };
                            if (vErrors === null) {
                                vErrors = [err9];
                            }
                            else {
                                vErrors.push(err9);
                            }
                            errors++;
                        }
                    }
                }
                if (data1.name !== undefined) {
                    if (typeof data1.name !== "string") {
                        const err10 = { instancePath: instancePath + "/category/name", schemaPath: "Category/properties/name/type", keyword: "type", params: { type: "string" } };
                        if (vErrors === null) {
                            vErrors = [err10];
                        }
                        else {
                            vErrors.push(err10);
                        }
                        errors++;
                    }
                }
            }
            else {
                const err11 = { instancePath: instancePath + "/category", schemaPath: "Category/type", keyword: "type", params: { type: "object" } };
                if (vErrors === null) {
                    vErrors = [err11];
                }
                else {
                    vErrors.push(err11);
                }
                errors++;
            }
        }
        if (data.name !== undefined) {
            if (typeof data.name !== "string") {
                const err12 = { instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err12];
                }
                else {
                    vErrors.push(err12);
                }
                errors++;
            }
        }
        if (data.photoUrls !== undefined) {
            let data5 = data.photoUrls;
            if (Array.isArray(data5)) {
                const len0 = data5.length;
                for (let i0 = 0; i0 < len0; i0++) {
                    if (typeof data5[i0] !== "string") {
                        const err13 = { instancePath: instancePath + "/photoUrls/" + i0, schemaPath: "#/properties/photoUrls/items/type", keyword: "type", params: { type: "string" } };
                        if (vErrors === null) {
                            vErrors = [err13];
                        }
                        else {
                            vErrors.push(err13);
                        }
                        errors++;
                    }
                }
            }
            else {
                const err14 = { instancePath: instancePath + "/photoUrls", schemaPath: "#/properties/photoUrls/type", keyword: "type", params: { type: "array" } };
                if (vErrors === null) {
                    vErrors = [err14];
                }
                else {
                    vErrors.push(err14);
                }
                errors++;
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
                                const err15 = { instancePath: instancePath + "/tags/" + i1 + "/id", schemaPath: "Tag/properties/id/type", keyword: "type", params: { type: "integer" } };
                                if (vErrors === null) {
                                    vErrors = [err15];
                                }
                                else {
                                    vErrors.push(err15);
                                }
                                errors++;
                            }
                            if ((typeof data9 == "number") && (isFinite(data9))) {
                                if (data9 > 9223372036854776000 || isNaN(data9)) {
                                    const err16 = { instancePath: instancePath + "/tags/" + i1 + "/id", schemaPath: "Tag/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } };
                                    if (vErrors === null) {
                                        vErrors = [err16];
                                    }
                                    else {
                                        vErrors.push(err16);
                                    }
                                    errors++;
                                }
                                if (data9 < -9223372036854776000 || isNaN(data9)) {
                                    const err17 = { instancePath: instancePath + "/tags/" + i1 + "/id", schemaPath: "Tag/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } };
                                    if (vErrors === null) {
                                        vErrors = [err17];
                                    }
                                    else {
                                        vErrors.push(err17);
                                    }
                                    errors++;
                                }
                                if (!(formats2.validate(data9))) {
                                    const err18 = { instancePath: instancePath + "/tags/" + i1 + "/id", schemaPath: "Tag/properties/id/format", keyword: "format", params: { format: "int64" } };
                                    if (vErrors === null) {
                                        vErrors = [err18];
                                    }
                                    else {
                                        vErrors.push(err18);
                                    }
                                    errors++;
                                }
                            }
                        }
                        if (data8.name !== undefined) {
                            if (typeof data8.name !== "string") {
                                const err19 = { instancePath: instancePath + "/tags/" + i1 + "/name", schemaPath: "Tag/properties/name/type", keyword: "type", params: { type: "string" } };
                                if (vErrors === null) {
                                    vErrors = [err19];
                                }
                                else {
                                    vErrors.push(err19);
                                }
                                errors++;
                            }
                        }
                    }
                    else {
                        const err20 = { instancePath: instancePath + "/tags/" + i1, schemaPath: "Tag/type", keyword: "type", params: { type: "object" } };
                        if (vErrors === null) {
                            vErrors = [err20];
                        }
                        else {
                            vErrors.push(err20);
                        }
                        errors++;
                    }
                }
            }
            else {
                const err21 = { instancePath: instancePath + "/tags", schemaPath: "#/properties/tags/type", keyword: "type", params: { type: "array" } };
                if (vErrors === null) {
                    vErrors = [err21];
                }
                else {
                    vErrors.push(err21);
                }
                errors++;
            }
        }
        if (data.status !== undefined) {
            let data11 = data.status;
            if (typeof data11 !== "string") {
                const err22 = { instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err22];
                }
                else {
                    vErrors.push(err22);
                }
                errors++;
            }
            if (!(((data11 === "available") || (data11 === "pending")) || (data11 === "sold"))) {
                const err23 = { instancePath: instancePath + "/status", schemaPath: "#/properties/status/enum", keyword: "enum", params: { allowedValues: schemaPet.properties.status.enum } };
                if (vErrors === null) {
                    vErrors = [err23];
                }
                else {
                    vErrors.push(err23);
                }
                errors++;
            }
        }
    }
    else {
        const err24 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } };
        if (vErrors === null) {
            vErrors = [err24];
        }
        else {
            vErrors.push(err24);
        }
        errors++;
    }
    validatePet.errors = vErrors;
    return errors === 0;
};
const validateTag: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors: any = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                const err0 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "integer" } };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 9223372036854776000 || isNaN(data0)) {
                    const err1 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err1];
                    }
                    else {
                        vErrors.push(err1);
                    }
                    errors++;
                }
                if (data0 < -9223372036854776000 || isNaN(data0)) {
                    const err2 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err2];
                    }
                    else {
                        vErrors.push(err2);
                    }
                    errors++;
                }
                if (!(formats2.validate(data0))) {
                    const err3 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/format", keyword: "format", params: { format: "int64" } };
                    if (vErrors === null) {
                        vErrors = [err3];
                    }
                    else {
                        vErrors.push(err3);
                    }
                    errors++;
                }
            }
        }
        if (data.name !== undefined) {
            if (typeof data.name !== "string") {
                const err4 = { instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err4];
                }
                else {
                    vErrors.push(err4);
                }
                errors++;
            }
        }
    }
    else {
        const err5 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } };
        if (vErrors === null) {
            vErrors = [err5];
        }
        else {
            vErrors.push(err5);
        }
        errors++;
    }
    validateTag.errors = vErrors;
    return errors === 0;
};
const schemaOrder = { "type": "object", "properties": { "id": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "petId": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "quantity": { "type": "integer", "format": "int32", "minimum": -2147483648, "maximum": 2147483647 }, "shipDate": { "type": "string", "format": "date-time" }, "status": { "type": "string", "description": "Order Status", "enum": ["placed", "approved", "delivered"] }, "complete": { "type": "boolean" } }, "$id": "Order" } as const;
const formats18 = (fullFormats as any)["date-time"];
const validateOrder: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors: any = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                const err0 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "integer" } };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 9223372036854776000 || isNaN(data0)) {
                    const err1 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err1];
                    }
                    else {
                        vErrors.push(err1);
                    }
                    errors++;
                }
                if (data0 < -9223372036854776000 || isNaN(data0)) {
                    const err2 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err2];
                    }
                    else {
                        vErrors.push(err2);
                    }
                    errors++;
                }
                if (!(formats2.validate(data0))) {
                    const err3 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/format", keyword: "format", params: { format: "int64" } };
                    if (vErrors === null) {
                        vErrors = [err3];
                    }
                    else {
                        vErrors.push(err3);
                    }
                    errors++;
                }
            }
        }
        if (data.petId !== undefined) {
            let data1 = data.petId;
            if (!(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))) {
                const err4 = { instancePath: instancePath + "/petId", schemaPath: "#/properties/petId/type", keyword: "type", params: { type: "integer" } };
                if (vErrors === null) {
                    vErrors = [err4];
                }
                else {
                    vErrors.push(err4);
                }
                errors++;
            }
            if ((typeof data1 == "number") && (isFinite(data1))) {
                if (data1 > 9223372036854776000 || isNaN(data1)) {
                    const err5 = { instancePath: instancePath + "/petId", schemaPath: "#/properties/petId/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err5];
                    }
                    else {
                        vErrors.push(err5);
                    }
                    errors++;
                }
                if (data1 < -9223372036854776000 || isNaN(data1)) {
                    const err6 = { instancePath: instancePath + "/petId", schemaPath: "#/properties/petId/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err6];
                    }
                    else {
                        vErrors.push(err6);
                    }
                    errors++;
                }
                if (!(formats2.validate(data1))) {
                    const err7 = { instancePath: instancePath + "/petId", schemaPath: "#/properties/petId/format", keyword: "format", params: { format: "int64" } };
                    if (vErrors === null) {
                        vErrors = [err7];
                    }
                    else {
                        vErrors.push(err7);
                    }
                    errors++;
                }
            }
        }
        if (data.quantity !== undefined) {
            let data2 = data.quantity;
            if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                const err8 = { instancePath: instancePath + "/quantity", schemaPath: "#/properties/quantity/type", keyword: "type", params: { type: "integer" } };
                if (vErrors === null) {
                    vErrors = [err8];
                }
                else {
                    vErrors.push(err8);
                }
                errors++;
            }
            if ((typeof data2 == "number") && (isFinite(data2))) {
                if (data2 > 2147483647 || isNaN(data2)) {
                    const err9 = { instancePath: instancePath + "/quantity", schemaPath: "#/properties/quantity/maximum", keyword: "maximum", params: { comparison: "<=", limit: 2147483647 } };
                    if (vErrors === null) {
                        vErrors = [err9];
                    }
                    else {
                        vErrors.push(err9);
                    }
                    errors++;
                }
                if (data2 < -2147483648 || isNaN(data2)) {
                    const err10 = { instancePath: instancePath + "/quantity", schemaPath: "#/properties/quantity/minimum", keyword: "minimum", params: { comparison: ">=", limit: -2147483648 } };
                    if (vErrors === null) {
                        vErrors = [err10];
                    }
                    else {
                        vErrors.push(err10);
                    }
                    errors++;
                }
                if (!(formats0.validate(data2))) {
                    const err11 = { instancePath: instancePath + "/quantity", schemaPath: "#/properties/quantity/format", keyword: "format", params: { format: "int32" } };
                    if (vErrors === null) {
                        vErrors = [err11];
                    }
                    else {
                        vErrors.push(err11);
                    }
                    errors++;
                }
            }
        }
        if (data.shipDate !== undefined) {
            let data3 = data.shipDate;
            if (typeof data3 === "string") {
                if (!(formats18.validate(data3))) {
                    const err12 = { instancePath: instancePath + "/shipDate", schemaPath: "#/properties/shipDate/format", keyword: "format", params: { format: "date-time" } };
                    if (vErrors === null) {
                        vErrors = [err12];
                    }
                    else {
                        vErrors.push(err12);
                    }
                    errors++;
                }
            }
            else {
                const err13 = { instancePath: instancePath + "/shipDate", schemaPath: "#/properties/shipDate/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err13];
                }
                else {
                    vErrors.push(err13);
                }
                errors++;
            }
        }
        if (data.status !== undefined) {
            let data4 = data.status;
            if (typeof data4 !== "string") {
                const err14 = { instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err14];
                }
                else {
                    vErrors.push(err14);
                }
                errors++;
            }
            if (!(((data4 === "placed") || (data4 === "approved")) || (data4 === "delivered"))) {
                const err15 = { instancePath: instancePath + "/status", schemaPath: "#/properties/status/enum", keyword: "enum", params: { allowedValues: schemaOrder.properties.status.enum } };
                if (vErrors === null) {
                    vErrors = [err15];
                }
                else {
                    vErrors.push(err15);
                }
                errors++;
            }
        }
        if (data.complete !== undefined) {
            if (typeof data.complete !== "boolean") {
                const err16 = { instancePath: instancePath + "/complete", schemaPath: "#/properties/complete/type", keyword: "type", params: { type: "boolean" } };
                if (vErrors === null) {
                    vErrors = [err16];
                }
                else {
                    vErrors.push(err16);
                }
                errors++;
            }
        }
    }
    else {
        const err17 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } };
        if (vErrors === null) {
            vErrors = [err17];
        }
        else {
            vErrors.push(err17);
        }
        errors++;
    }
    validateOrder.errors = vErrors;
    return errors === 0;
};
const schemaUser = { "type": "object", "properties": { "id": { "type": "integer", "format": "int64", "minimum": -9223372036854776000, "maximum": 9223372036854776000 }, "username": { "type": "string" }, "firstName": { "type": "string" }, "lastName": { "type": "string" }, "email": { "type": "string" }, "password": { "type": "string" }, "phone": { "type": "string" }, "userStatus": { "type": "integer", "format": "int32", "description": "User Status", "minimum": -2147483648, "maximum": 2147483647 } }, "$id": "User" } as const;
const validateUser: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors: any = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                const err0 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "integer" } };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
            if ((typeof data0 == "number") && (isFinite(data0))) {
                if (data0 > 9223372036854776000 || isNaN(data0)) {
                    const err1 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/maximum", keyword: "maximum", params: { comparison: "<=", limit: 9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err1];
                    }
                    else {
                        vErrors.push(err1);
                    }
                    errors++;
                }
                if (data0 < -9223372036854776000 || isNaN(data0)) {
                    const err2 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/minimum", keyword: "minimum", params: { comparison: ">=", limit: -9223372036854776000 } };
                    if (vErrors === null) {
                        vErrors = [err2];
                    }
                    else {
                        vErrors.push(err2);
                    }
                    errors++;
                }
                if (!(formats2.validate(data0))) {
                    const err3 = { instancePath: instancePath + "/id", schemaPath: "#/properties/id/format", keyword: "format", params: { format: "int64" } };
                    if (vErrors === null) {
                        vErrors = [err3];
                    }
                    else {
                        vErrors.push(err3);
                    }
                    errors++;
                }
            }
        }
        if (data.username !== undefined) {
            if (typeof data.username !== "string") {
                const err4 = { instancePath: instancePath + "/username", schemaPath: "#/properties/username/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err4];
                }
                else {
                    vErrors.push(err4);
                }
                errors++;
            }
        }
        if (data.firstName !== undefined) {
            if (typeof data.firstName !== "string") {
                const err5 = { instancePath: instancePath + "/firstName", schemaPath: "#/properties/firstName/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err5];
                }
                else {
                    vErrors.push(err5);
                }
                errors++;
            }
        }
        if (data.lastName !== undefined) {
            if (typeof data.lastName !== "string") {
                const err6 = { instancePath: instancePath + "/lastName", schemaPath: "#/properties/lastName/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err6];
                }
                else {
                    vErrors.push(err6);
                }
                errors++;
            }
        }
        if (data.email !== undefined) {
            if (typeof data.email !== "string") {
                const err7 = { instancePath: instancePath + "/email", schemaPath: "#/properties/email/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err7];
                }
                else {
                    vErrors.push(err7);
                }
                errors++;
            }
        }
        if (data.password !== undefined) {
            if (typeof data.password !== "string") {
                const err8 = { instancePath: instancePath + "/password", schemaPath: "#/properties/password/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err8];
                }
                else {
                    vErrors.push(err8);
                }
                errors++;
            }
        }
        if (data.phone !== undefined) {
            if (typeof data.phone !== "string") {
                const err9 = { instancePath: instancePath + "/phone", schemaPath: "#/properties/phone/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err9];
                }
                else {
                    vErrors.push(err9);
                }
                errors++;
            }
        }
        if (data.userStatus !== undefined) {
            let data7 = data.userStatus;
            if (!(((typeof data7 == "number") && (!(data7 % 1) && !isNaN(data7))) && (isFinite(data7)))) {
                const err10 = { instancePath: instancePath + "/userStatus", schemaPath: "#/properties/userStatus/type", keyword: "type", params: { type: "integer" } };
                if (vErrors === null) {
                    vErrors = [err10];
                }
                else {
                    vErrors.push(err10);
                }
                errors++;
            }
            if ((typeof data7 == "number") && (isFinite(data7))) {
                if (data7 > 2147483647 || isNaN(data7)) {
                    const err11 = { instancePath: instancePath + "/userStatus", schemaPath: "#/properties/userStatus/maximum", keyword: "maximum", params: { comparison: "<=", limit: 2147483647 } };
                    if (vErrors === null) {
                        vErrors = [err11];
                    }
                    else {
                        vErrors.push(err11);
                    }
                    errors++;
                }
                if (data7 < -2147483648 || isNaN(data7)) {
                    const err12 = { instancePath: instancePath + "/userStatus", schemaPath: "#/properties/userStatus/minimum", keyword: "minimum", params: { comparison: ">=", limit: -2147483648 } };
                    if (vErrors === null) {
                        vErrors = [err12];
                    }
                    else {
                        vErrors.push(err12);
                    }
                    errors++;
                }
                if (!(formats0.validate(data7))) {
                    const err13 = { instancePath: instancePath + "/userStatus", schemaPath: "#/properties/userStatus/format", keyword: "format", params: { format: "int32" } };
                    if (vErrors === null) {
                        vErrors = [err13];
                    }
                    else {
                        vErrors.push(err13);
                    }
                    errors++;
                }
            }
        }
    }
    else {
        const err14 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } };
        if (vErrors === null) {
            vErrors = [err14];
        }
        else {
            vErrors.push(err14);
        }
        errors++;
    }
    validateUser.errors = vErrors;
    return errors === 0;
};

export const OpenApi2Validator = validatorFactory<OpenApi2SchemaId,false>({ApiResponse: {validator:validateApiResponse, schema: schemaApiResponse},
Category: {validator:validateCategory, schema: schemaCategory},
Pet: {validator:validatePet, schema: schemaPet},
Tag: {validator:validateTag, schema: schemaTag},
Order: {validator:validateOrder, schema: schemaOrder},
User: {validator:validateUser, schema: schemaUser}}, false);
