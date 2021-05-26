/* eslint-disable */
import { e, validatorFactory, WebAjvError, AjvValidationFn } from './web-ajv';
export type JSONSchemaSchemaId = "JSONSchema"|"Nested"|"NestedAlternative"|"Top";
            
const validateTop: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing0;
        if ((((data.name === undefined) && (missing0 = "name")) || ((data.age === undefined) && (missing0 = "age"))) || ((data.nested === undefined) && (missing0 = "nested"))) {
            validateTop.errors = [e(instancePath, "#/required", "required", { missingProperty: missing0 })];
            return false;
        }
        else {
            const _errs1: number = errors;
            for (const key0 in data) {
                if (!(((((key0 === "age") || (key0 === "name")) || (key0 === "nested")) || (key0 === "nestedAll")) || (key0 === "nestedOne"))) {
                    validateTop.errors = [e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 })];
                    return false;
                }
            }
            if (_errs1 === errors) {
                if (data.age !== undefined) {
                    let data0 = data.age;
                    const _errs2: number = errors;
                    if (!((typeof data0 == "number") && (isFinite(data0)))) {
                        validateTop.errors = [e(instancePath + "/age", "#/properties/age/type", "type", { type: "number" })];
                        return false;
                    }
                    var valid0 = _errs2 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.name !== undefined) {
                        const _errs4: number = errors;
                        if (typeof data.name !== "string") {
                            validateTop.errors = [e(instancePath + "/name", "#/properties/name/type", "type", { type: "string" })];
                            return false;
                        }
                        var valid0 = _errs4 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.nested !== undefined) {
                            let data2 = data.nested;
                            const _errs6: number = errors;
                            const _errs7: number = errors;
                            let valid1 = false;
                            const _errs8: number = errors;
                            if (data2 && typeof data2 == "object" && !Array.isArray(data2)) {
                                let missing1;
                                if ((data2.surname === undefined) && (missing1 = "surname")) {
                                    errors = vErrors.push(e(instancePath + "/nested", "Nested/required", "required", { missingProperty: missing1 }));
                                }
                                else {
                                    const _errs11: number = errors;
                                    for (const key1 in data2) {
                                        if (!(key1 === "surname")) {
                                            errors = vErrors.push(e(instancePath + "/nested", "Nested/additionalProperties", "additionalProperties", { additionalProperty: key1 }));
                                            break;
                                        }
                                    }
                                    if (_errs11 === errors) {
                                        if (data2.surname !== undefined) {
                                            if (typeof data2.surname !== "string") {
                                                errors = vErrors.push(e(instancePath + "/nested/surname", "Nested/properties/surname/type", "type", { type: "string" }));
                                            }
                                        }
                                    }
                                }
                            }
                            else {
                                errors = vErrors.push(e(instancePath + "/nested", "Nested/type", "type", { type: "object" }));
                            }
                            var _valid0 = _errs8 === errors;
                            valid1 = valid1 || _valid0;
                            if (!valid1) {
                                const _errs14: number = errors;
                                if (Array.isArray(data2)) {
                                    var valid4 = true;
                                    const len0 = data2.length;
                                    for (let i0 = 0; i0 < len0; i0++) {
                                        let data4 = data2[i0];
                                        const _errs16: number = errors;
                                        if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
                                            let missing2;
                                            if ((data4.address === undefined) && (missing2 = "address")) {
                                                errors = vErrors.push(e(instancePath + "/nested/" + i0, "NestedAlternative/required", "required", { missingProperty: missing2 }));
                                            }
                                            else {
                                                const _errs19: number = errors;
                                                for (const key2 in data4) {
                                                    if (!(key2 === "address")) {
                                                        errors = vErrors.push(e(instancePath + "/nested/" + i0, "NestedAlternative/additionalProperties", "additionalProperties", { additionalProperty: key2 }));
                                                        break;
                                                    }
                                                }
                                                if (_errs19 === errors) {
                                                    if (data4.address !== undefined) {
                                                        if (typeof data4.address !== "string") {
                                                            errors = vErrors.push(e(instancePath + "/nested/" + i0 + "/address", "NestedAlternative/properties/address/type", "type", { type: "string" }));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else {
                                            errors = vErrors.push(e(instancePath + "/nested/" + i0, "NestedAlternative/type", "type", { type: "object" }));
                                        }
                                        var valid4 = _errs16 === errors;
                                        if (!valid4) {
                                            break;
                                        }
                                    }
                                }
                                else {
                                    errors = vErrors.push(e(instancePath + "/nested", "#/properties/nested/anyOf/1/type", "type", { type: "array" }));
                                }
                                var _valid0 = _errs14 === errors;
                                valid1 = valid1 || _valid0;
                            }
                            if (!valid1) {
                                errors = vErrors.push(e(instancePath + "/nested", "#/properties/nested/anyOf", "anyOf", {}));
                                validateTop.errors = vErrors.length ? vErrors : undefined;
                                return false;
                            }
                            else {
                                errors = _errs7;
                                if (vErrors !== null) {
                                    if (_errs7) {
                                        vErrors.length = _errs7;
                                    }
                                    else {
                                        vErrors = [];
                                    }
                                }
                            }
                            var valid0 = _errs6 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.nestedAll !== undefined) {
                                let data6 = data.nestedAll;
                                const _errs22: number = errors;
                                const _errs23: number = errors;
                                if (data6 && typeof data6 == "object" && !Array.isArray(data6)) {
                                    let missing3;
                                    if ((data6.surname === undefined) && (missing3 = "surname")) {
                                        validateTop.errors = [e(instancePath + "/nestedAll", "Nested/required", "required", { missingProperty: missing3 })];
                                        return false;
                                    }
                                    else {
                                        const _errs26: number = errors;
                                        for (const key3 in data6) {
                                            if (!(key3 === "surname")) {
                                                validateTop.errors = [e(instancePath + "/nestedAll", "Nested/additionalProperties", "additionalProperties", { additionalProperty: key3 })];
                                                return false;
                                            }
                                        }
                                        if (_errs26 === errors) {
                                            if (data6.surname !== undefined) {
                                                if (typeof data6.surname !== "string") {
                                                    validateTop.errors = [e(instancePath + "/nestedAll/surname", "Nested/properties/surname/type", "type", { type: "string" })];
                                                    return false;
                                                }
                                            }
                                        }
                                    }
                                }
                                else {
                                    validateTop.errors = [e(instancePath + "/nestedAll", "Nested/type", "type", { type: "object" })];
                                    return false;
                                }
                                var valid7 = _errs23 === errors;
                                if (valid7) {
                                    const _errs29: number = errors;
                                    if (Array.isArray(data6)) {
                                        var valid10 = true;
                                        const len1 = data6.length;
                                        for (let i1 = 0; i1 < len1; i1++) {
                                            let data8 = data6[i1];
                                            const _errs31: number = errors;
                                            if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                                                let missing4;
                                                if ((data8.address === undefined) && (missing4 = "address")) {
                                                    validateTop.errors = [e(instancePath + "/nestedAll/" + i1, "NestedAlternative/required", "required", { missingProperty: missing4 })];
                                                    return false;
                                                }
                                                else {
                                                    const _errs34: number = errors;
                                                    for (const key4 in data8) {
                                                        if (!(key4 === "address")) {
                                                            validateTop.errors = [e(instancePath + "/nestedAll/" + i1, "NestedAlternative/additionalProperties", "additionalProperties", { additionalProperty: key4 })];
                                                            return false;
                                                        }
                                                    }
                                                    if (_errs34 === errors) {
                                                        if (data8.address !== undefined) {
                                                            if (typeof data8.address !== "string") {
                                                                validateTop.errors = [e(instancePath + "/nestedAll/" + i1 + "/address", "NestedAlternative/properties/address/type", "type", { type: "string" })];
                                                                return false;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else {
                                                validateTop.errors = [e(instancePath + "/nestedAll/" + i1, "NestedAlternative/type", "type", { type: "object" })];
                                                return false;
                                            }
                                            var valid10 = _errs31 === errors;
                                            if (!valid10) {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        validateTop.errors = [e(instancePath + "/nestedAll", "#/properties/nestedAll/allOf/1/type", "type", { type: "array" })];
                                        return false;
                                    }
                                    var valid7 = _errs29 === errors;
                                }
                                var valid0 = _errs22 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.nestedOne !== undefined) {
                                    let data10 = data.nestedOne;
                                    const _errs37: number = errors;
                                    const _errs38: number = errors;
                                    let valid13 = false;
                                    let passing0 = null;
                                    const _errs39: number = errors;
                                    if (data10 && typeof data10 == "object" && !Array.isArray(data10)) {
                                        let missing5;
                                        if ((data10.surname === undefined) && (missing5 = "surname")) {
                                            errors = vErrors.push(e(instancePath + "/nestedOne", "Nested/required", "required", { missingProperty: missing5 }));
                                        }
                                        else {
                                            const _errs42: number = errors;
                                            for (const key5 in data10) {
                                                if (!(key5 === "surname")) {
                                                    errors = vErrors.push(e(instancePath + "/nestedOne", "Nested/additionalProperties", "additionalProperties", { additionalProperty: key5 }));
                                                    break;
                                                }
                                            }
                                            if (_errs42 === errors) {
                                                if (data10.surname !== undefined) {
                                                    if (typeof data10.surname !== "string") {
                                                        errors = vErrors.push(e(instancePath + "/nestedOne/surname", "Nested/properties/surname/type", "type", { type: "string" }));
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        errors = vErrors.push(e(instancePath + "/nestedOne", "Nested/type", "type", { type: "object" }));
                                    }
                                    var _valid1 = _errs39 === errors;
                                    if (_valid1) {
                                        valid13 = true;
                                        passing0 = 0;
                                    }
                                    const _errs45: number = errors;
                                    if (Array.isArray(data10)) {
                                        var valid16 = true;
                                        const len2 = data10.length;
                                        for (let i2 = 0; i2 < len2; i2++) {
                                            let data12 = data10[i2];
                                            const _errs47: number = errors;
                                            if (data12 && typeof data12 == "object" && !Array.isArray(data12)) {
                                                let missing6;
                                                if ((data12.address === undefined) && (missing6 = "address")) {
                                                    errors = vErrors.push(e(instancePath + "/nestedOne/" + i2, "NestedAlternative/required", "required", { missingProperty: missing6 }));
                                                }
                                                else {
                                                    const _errs50: number = errors;
                                                    for (const key6 in data12) {
                                                        if (!(key6 === "address")) {
                                                            errors = vErrors.push(e(instancePath + "/nestedOne/" + i2, "NestedAlternative/additionalProperties", "additionalProperties", { additionalProperty: key6 }));
                                                            break;
                                                        }
                                                    }
                                                    if (_errs50 === errors) {
                                                        if (data12.address !== undefined) {
                                                            if (typeof data12.address !== "string") {
                                                                errors = vErrors.push(e(instancePath + "/nestedOne/" + i2 + "/address", "NestedAlternative/properties/address/type", "type", { type: "string" }));
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else {
                                                errors = vErrors.push(e(instancePath + "/nestedOne/" + i2, "NestedAlternative/type", "type", { type: "object" }));
                                            }
                                            var valid16 = _errs47 === errors;
                                            if (!valid16) {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        errors = vErrors.push(e(instancePath + "/nestedOne", "#/properties/nestedOne/oneOf/1/type", "type", { type: "array" }));
                                    }
                                    var _valid1 = _errs45 === errors;
                                    if (_valid1 && valid13) {
                                        valid13 = false;
                                        passing0 = [passing0, 1];
                                    }
                                    else {
                                        if (_valid1) {
                                            valid13 = true;
                                            passing0 = 1;
                                        }
                                    }
                                    if (!valid13) {
                                        errors = vErrors.push(e(instancePath + "/nestedOne", "#/properties/nestedOne/oneOf", "oneOf", { passingSchemas: passing0 }));
                                        validateTop.errors = vErrors.length ? vErrors : undefined;
                                        return false;
                                    }
                                    else {
                                        errors = _errs38;
                                        if (vErrors !== null) {
                                            if (_errs38) {
                                                vErrors.length = _errs38;
                                            }
                                            else {
                                                vErrors = [];
                                            }
                                        }
                                    }
                                    var valid0 = _errs37 === errors;
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
        validateTop.errors = [e(instancePath, "#/type", "type", { type: "object" })];
        return false;
    }
    validateTop.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateJSONSchema: AjvValidationFn = (data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (!(validateTop(data, { instancePath, parentData, parentDataProperty, rootData }))) {
        vErrors.push(...(validateTop.errors || []));
        errors = vErrors.length;
    }
    validateJSONSchema.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateNested: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing0;
        if ((data.surname === undefined) && (missing0 = "surname")) {
            validateNested.errors = [e(instancePath, "#/required", "required", { missingProperty: missing0 })];
            return false;
        }
        else {
            const _errs1: number = errors;
            for (const key0 in data) {
                if (!(key0 === "surname")) {
                    validateNested.errors = [e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 })];
                    return false;
                }
            }
            if (_errs1 === errors) {
                if (data.surname !== undefined) {
                    if (typeof data.surname !== "string") {
                        validateNested.errors = [e(instancePath + "/surname", "#/properties/surname/type", "type", { type: "string" })];
                        return false;
                    }
                }
            }
        }
    }
    else {
        validateNested.errors = [e(instancePath, "#/type", "type", { type: "object" })];
        return false;
    }
    validateNested.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateNestedAlternative: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing0;
        if ((data.address === undefined) && (missing0 = "address")) {
            validateNestedAlternative.errors = [e(instancePath, "#/required", "required", { missingProperty: missing0 })];
            return false;
        }
        else {
            const _errs1: number = errors;
            for (const key0 in data) {
                if (!(key0 === "address")) {
                    validateNestedAlternative.errors = [e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 })];
                    return false;
                }
            }
            if (_errs1 === errors) {
                if (data.address !== undefined) {
                    if (typeof data.address !== "string") {
                        validateNestedAlternative.errors = [e(instancePath + "/address", "#/properties/address/type", "type", { type: "string" })];
                        return false;
                    }
                }
            }
        }
    }
    else {
        validateNestedAlternative.errors = [e(instancePath, "#/type", "type", { type: "object" })];
        return false;
    }
    validateNestedAlternative.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};

export const JSONSchemaValidator = validatorFactory({JSONSchema: validateJSONSchema,Nested: validateNested,NestedAlternative: validateNestedAlternative,Top: validateTop}, false);
    