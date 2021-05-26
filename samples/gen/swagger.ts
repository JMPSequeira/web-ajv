/* eslint-disable */
import { fullFormats } from "ajv-formats/dist/formats";
import { e, validatorFactory, WebAjvError, anyfy, AjvValidationFn } from './web-ajv';
export type OpenApi2SchemaId = "ApiResponse"|"Category"|"Pet"|"Tag"|"Order"|"User";
            
const _constants = { schema13: { [".properties.status.enum"]: ["available", "pending", "sold"] }, schema17: { [".properties.status.enum"]: ["placed", "approved", "delivered"] } };
const formats0 = anyfy(fullFormats).int32;
const validateApiResponse: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.code !== undefined) {
            let data0 = data.code;
            const _errs1: number = errors;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                validateApiResponse.errors = [e(instancePath + "/code", "#/properties/code/type", "type", { type: "integer" })];
                return false;
            }
            if (errors === _errs1) {
                if ((typeof data0 == "number") && (isFinite(data0))) {
                    if (data0 > 2147483647 || isNaN(data0)) {
                        validateApiResponse.errors = [e(instancePath + "/code", "#/properties/code/maximum", "maximum", { comparison: "<=", limit: 2147483647 })];
                        return false;
                    }
                    else {
                        if (data0 < -2147483648 || isNaN(data0)) {
                            validateApiResponse.errors = [e(instancePath + "/code", "#/properties/code/minimum", "minimum", { comparison: ">=", limit: -2147483648 })];
                            return false;
                        }
                        else {
                            if (!(formats0.validate(data0))) {
                                validateApiResponse.errors = [e(instancePath + "/code", "#/properties/code/format", "format", { format: "int32" })];
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
                    validateApiResponse.errors = [e(instancePath + "/type", "#/properties/type/type", "type", { type: "string" })];
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
                        validateApiResponse.errors = [e(instancePath + "/message", "#/properties/message/type", "type", { type: "string" })];
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
        validateApiResponse.errors = [e(instancePath, "#/type", "type", { type: "object" })];
        return false;
    }
    validateApiResponse.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const formats2 = anyfy(fullFormats).int64;
const validateCategory: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            const _errs1: number = errors;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                validateCategory.errors = [e(instancePath + "/id", "#/properties/id/type", "type", { type: "integer" })];
                return false;
            }
            if (errors === _errs1) {
                if ((typeof data0 == "number") && (isFinite(data0))) {
                    if (data0 > 9223372036854776000 || isNaN(data0)) {
                        validateCategory.errors = [e(instancePath + "/id", "#/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 })];
                        return false;
                    }
                    else {
                        if (data0 < -9223372036854776000 || isNaN(data0)) {
                            validateCategory.errors = [e(instancePath + "/id", "#/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 })];
                            return false;
                        }
                        else {
                            if (!(formats2.validate(data0))) {
                                validateCategory.errors = [e(instancePath + "/id", "#/properties/id/format", "format", { format: "int64" })];
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
                    validateCategory.errors = [e(instancePath + "/name", "#/properties/name/type", "type", { type: "string" })];
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
        validateCategory.errors = [e(instancePath, "#/type", "type", { type: "object" })];
        return false;
    }
    validateCategory.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validatePet: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing0;
        if (((data.name === undefined) && (missing0 = "name")) || ((data.photoUrls === undefined) && (missing0 = "photoUrls"))) {
            validatePet.errors = [e(instancePath, "#/required", "required", { missingProperty: missing0 })];
            return false;
        }
        else {
            if (data.id !== undefined) {
                let data0 = data.id;
                const _errs1: number = errors;
                if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                    validatePet.errors = [e(instancePath + "/id", "#/properties/id/type", "type", { type: "integer" })];
                    return false;
                }
                if (errors === _errs1) {
                    if ((typeof data0 == "number") && (isFinite(data0))) {
                        if (data0 > 9223372036854776000 || isNaN(data0)) {
                            validatePet.errors = [e(instancePath + "/id", "#/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 })];
                            return false;
                        }
                        else {
                            if (data0 < -9223372036854776000 || isNaN(data0)) {
                                validatePet.errors = [e(instancePath + "/id", "#/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 })];
                                return false;
                            }
                            else {
                                if (!(formats2.validate(data0))) {
                                    validatePet.errors = [e(instancePath + "/id", "#/properties/id/format", "format", { format: "int64" })];
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
                    if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                        if (data1.id !== undefined) {
                            let data2 = data1.id;
                            const _errs6: number = errors;
                            if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                                validatePet.errors = [e(instancePath + "/category/id", "Category/properties/id/type", "type", { type: "integer" })];
                                return false;
                            }
                            if (errors === _errs6) {
                                if ((typeof data2 == "number") && (isFinite(data2))) {
                                    if (data2 > 9223372036854776000 || isNaN(data2)) {
                                        validatePet.errors = [e(instancePath + "/category/id", "Category/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 })];
                                        return false;
                                    }
                                    else {
                                        if (data2 < -9223372036854776000 || isNaN(data2)) {
                                            validatePet.errors = [e(instancePath + "/category/id", "Category/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 })];
                                            return false;
                                        }
                                        else {
                                            if (!(formats2.validate(data2))) {
                                                validatePet.errors = [e(instancePath + "/category/id", "Category/properties/id/format", "format", { format: "int64" })];
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
                                    validatePet.errors = [e(instancePath + "/category/name", "Category/properties/name/type", "type", { type: "string" })];
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
                        validatePet.errors = [e(instancePath + "/category", "Category/type", "type", { type: "object" })];
                        return false;
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
                            validatePet.errors = [e(instancePath + "/name", "#/properties/name/type", "type", { type: "string" })];
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
                            if (Array.isArray(data5)) {
                                var valid3 = true;
                                const len0 = data5.length;
                                for (let i0 = 0; i0 < len0; i0++) {
                                    const _errs14: number = errors;
                                    if (typeof data5[i0] !== "string") {
                                        validatePet.errors = [e(instancePath + "/photoUrls/" + i0, "#/properties/photoUrls/items/type", "type", { type: "string" })];
                                        return false;
                                    }
                                    var valid3 = _errs14 === errors;
                                    if (!valid3) {
                                        break;
                                    }
                                }
                            }
                            else {
                                validatePet.errors = [e(instancePath + "/photoUrls", "#/properties/photoUrls/type", "type", { type: "array" })];
                                return false;
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
                                if (Array.isArray(data7)) {
                                    var valid4 = true;
                                    const len1 = data7.length;
                                    for (let i1 = 0; i1 < len1; i1++) {
                                        let data8 = data7[i1];
                                        const _errs18: number = errors;
                                        if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                                            if (data8.id !== undefined) {
                                                let data9 = data8.id;
                                                const _errs21: number = errors;
                                                if (!(((typeof data9 == "number") && (!(data9 % 1) && !isNaN(data9))) && (isFinite(data9)))) {
                                                    validatePet.errors = [e(instancePath + "/tags/" + i1 + "/id", "Tag/properties/id/type", "type", { type: "integer" })];
                                                    return false;
                                                }
                                                if (errors === _errs21) {
                                                    if ((typeof data9 == "number") && (isFinite(data9))) {
                                                        if (data9 > 9223372036854776000 || isNaN(data9)) {
                                                            validatePet.errors = [e(instancePath + "/tags/" + i1 + "/id", "Tag/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 })];
                                                            return false;
                                                        }
                                                        else {
                                                            if (data9 < -9223372036854776000 || isNaN(data9)) {
                                                                validatePet.errors = [e(instancePath + "/tags/" + i1 + "/id", "Tag/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 })];
                                                                return false;
                                                            }
                                                            else {
                                                                if (!(formats2.validate(data9))) {
                                                                    validatePet.errors = [e(instancePath + "/tags/" + i1 + "/id", "Tag/properties/id/format", "format", { format: "int64" })];
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
                                                        validatePet.errors = [e(instancePath + "/tags/" + i1 + "/name", "Tag/properties/name/type", "type", { type: "string" })];
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
                                            validatePet.errors = [e(instancePath + "/tags/" + i1, "Tag/type", "type", { type: "object" })];
                                            return false;
                                        }
                                        var valid4 = _errs18 === errors;
                                        if (!valid4) {
                                            break;
                                        }
                                    }
                                }
                                else {
                                    validatePet.errors = [e(instancePath + "/tags", "#/properties/tags/type", "type", { type: "array" })];
                                    return false;
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
                                        validatePet.errors = [e(instancePath + "/status", "#/properties/status/type", "type", { type: "string" })];
                                        return false;
                                    }
                                    if (!(((data11 === "available") || (data11 === "pending")) || (data11 === "sold"))) {
                                        validatePet.errors = [e(instancePath + "/status", "#/properties/status/enum", "enum", { allowedValues: _constants.schema13[".properties.status.enum"] })];
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
        validatePet.errors = [e(instancePath, "#/type", "type", { type: "object" })];
        return false;
    }
    validatePet.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateTag: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            const _errs1: number = errors;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                validateTag.errors = [e(instancePath + "/id", "#/properties/id/type", "type", { type: "integer" })];
                return false;
            }
            if (errors === _errs1) {
                if ((typeof data0 == "number") && (isFinite(data0))) {
                    if (data0 > 9223372036854776000 || isNaN(data0)) {
                        validateTag.errors = [e(instancePath + "/id", "#/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 })];
                        return false;
                    }
                    else {
                        if (data0 < -9223372036854776000 || isNaN(data0)) {
                            validateTag.errors = [e(instancePath + "/id", "#/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 })];
                            return false;
                        }
                        else {
                            if (!(formats2.validate(data0))) {
                                validateTag.errors = [e(instancePath + "/id", "#/properties/id/format", "format", { format: "int64" })];
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
                    validateTag.errors = [e(instancePath + "/name", "#/properties/name/type", "type", { type: "string" })];
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
        validateTag.errors = [e(instancePath, "#/type", "type", { type: "object" })];
        return false;
    }
    validateTag.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const formats18 = anyfy(fullFormats)["date-time"];
const validateOrder: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            const _errs1: number = errors;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                validateOrder.errors = [e(instancePath + "/id", "#/properties/id/type", "type", { type: "integer" })];
                return false;
            }
            if (errors === _errs1) {
                if ((typeof data0 == "number") && (isFinite(data0))) {
                    if (data0 > 9223372036854776000 || isNaN(data0)) {
                        validateOrder.errors = [e(instancePath + "/id", "#/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 })];
                        return false;
                    }
                    else {
                        if (data0 < -9223372036854776000 || isNaN(data0)) {
                            validateOrder.errors = [e(instancePath + "/id", "#/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 })];
                            return false;
                        }
                        else {
                            if (!(formats2.validate(data0))) {
                                validateOrder.errors = [e(instancePath + "/id", "#/properties/id/format", "format", { format: "int64" })];
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
                    validateOrder.errors = [e(instancePath + "/petId", "#/properties/petId/type", "type", { type: "integer" })];
                    return false;
                }
                if (errors === _errs3) {
                    if ((typeof data1 == "number") && (isFinite(data1))) {
                        if (data1 > 9223372036854776000 || isNaN(data1)) {
                            validateOrder.errors = [e(instancePath + "/petId", "#/properties/petId/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 })];
                            return false;
                        }
                        else {
                            if (data1 < -9223372036854776000 || isNaN(data1)) {
                                validateOrder.errors = [e(instancePath + "/petId", "#/properties/petId/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 })];
                                return false;
                            }
                            else {
                                if (!(formats2.validate(data1))) {
                                    validateOrder.errors = [e(instancePath + "/petId", "#/properties/petId/format", "format", { format: "int64" })];
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
                        validateOrder.errors = [e(instancePath + "/quantity", "#/properties/quantity/type", "type", { type: "integer" })];
                        return false;
                    }
                    if (errors === _errs5) {
                        if ((typeof data2 == "number") && (isFinite(data2))) {
                            if (data2 > 2147483647 || isNaN(data2)) {
                                validateOrder.errors = [e(instancePath + "/quantity", "#/properties/quantity/maximum", "maximum", { comparison: "<=", limit: 2147483647 })];
                                return false;
                            }
                            else {
                                if (data2 < -2147483648 || isNaN(data2)) {
                                    validateOrder.errors = [e(instancePath + "/quantity", "#/properties/quantity/minimum", "minimum", { comparison: ">=", limit: -2147483648 })];
                                    return false;
                                }
                                else {
                                    if (!(formats0.validate(data2))) {
                                        validateOrder.errors = [e(instancePath + "/quantity", "#/properties/quantity/format", "format", { format: "int32" })];
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
                        if (typeof data3 === "string") {
                            if (!(formats18.validate(data3))) {
                                validateOrder.errors = [e(instancePath + "/shipDate", "#/properties/shipDate/format", "format", { format: "date-time" })];
                                return false;
                            }
                        }
                        else {
                            validateOrder.errors = [e(instancePath + "/shipDate", "#/properties/shipDate/type", "type", { type: "string" })];
                            return false;
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
                                validateOrder.errors = [e(instancePath + "/status", "#/properties/status/type", "type", { type: "string" })];
                                return false;
                            }
                            if (!(((data4 === "placed") || (data4 === "approved")) || (data4 === "delivered"))) {
                                validateOrder.errors = [e(instancePath + "/status", "#/properties/status/enum", "enum", { allowedValues: _constants.schema17[".properties.status.enum"] })];
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
                                    validateOrder.errors = [e(instancePath + "/complete", "#/properties/complete/type", "type", { type: "boolean" })];
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
        validateOrder.errors = [e(instancePath, "#/type", "type", { type: "object" })];
        return false;
    }
    validateOrder.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateUser: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.id !== undefined) {
            let data0 = data.id;
            const _errs1: number = errors;
            if (!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) {
                validateUser.errors = [e(instancePath + "/id", "#/properties/id/type", "type", { type: "integer" })];
                return false;
            }
            if (errors === _errs1) {
                if ((typeof data0 == "number") && (isFinite(data0))) {
                    if (data0 > 9223372036854776000 || isNaN(data0)) {
                        validateUser.errors = [e(instancePath + "/id", "#/properties/id/maximum", "maximum", { comparison: "<=", limit: 9223372036854776000 })];
                        return false;
                    }
                    else {
                        if (data0 < -9223372036854776000 || isNaN(data0)) {
                            validateUser.errors = [e(instancePath + "/id", "#/properties/id/minimum", "minimum", { comparison: ">=", limit: -9223372036854776000 })];
                            return false;
                        }
                        else {
                            if (!(formats2.validate(data0))) {
                                validateUser.errors = [e(instancePath + "/id", "#/properties/id/format", "format", { format: "int64" })];
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
                    validateUser.errors = [e(instancePath + "/username", "#/properties/username/type", "type", { type: "string" })];
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
                        validateUser.errors = [e(instancePath + "/firstName", "#/properties/firstName/type", "type", { type: "string" })];
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
                            validateUser.errors = [e(instancePath + "/lastName", "#/properties/lastName/type", "type", { type: "string" })];
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
                                validateUser.errors = [e(instancePath + "/email", "#/properties/email/type", "type", { type: "string" })];
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
                                    validateUser.errors = [e(instancePath + "/password", "#/properties/password/type", "type", { type: "string" })];
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
                                        validateUser.errors = [e(instancePath + "/phone", "#/properties/phone/type", "type", { type: "string" })];
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
                                            validateUser.errors = [e(instancePath + "/userStatus", "#/properties/userStatus/type", "type", { type: "integer" })];
                                            return false;
                                        }
                                        if (errors === _errs15) {
                                            if ((typeof data7 == "number") && (isFinite(data7))) {
                                                if (data7 > 2147483647 || isNaN(data7)) {
                                                    validateUser.errors = [e(instancePath + "/userStatus", "#/properties/userStatus/maximum", "maximum", { comparison: "<=", limit: 2147483647 })];
                                                    return false;
                                                }
                                                else {
                                                    if (data7 < -2147483648 || isNaN(data7)) {
                                                        validateUser.errors = [e(instancePath + "/userStatus", "#/properties/userStatus/minimum", "minimum", { comparison: ">=", limit: -2147483648 })];
                                                        return false;
                                                    }
                                                    else {
                                                        if (!(formats0.validate(data7))) {
                                                            validateUser.errors = [e(instancePath + "/userStatus", "#/properties/userStatus/format", "format", { format: "int32" })];
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
        validateUser.errors = [e(instancePath, "#/type", "type", { type: "object" })];
        return false;
    }
    validateUser.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};

export const OpenApi2Validator = validatorFactory({ApiResponse: validateApiResponse,Category: validateCategory,Pet: validatePet,Tag: validateTag,Order: validateOrder,User: validateUser}, false);
    