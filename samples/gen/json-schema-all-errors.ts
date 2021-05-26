/* eslint-disable */
import { e, validatorFactory, WebAjvError, AjvValidationFn } from './web-ajv';
export type JSONSchemaSchemaId = "JSONSchema"|"Nested"|"NestedAlternative"|"Top";
            
const validateTop: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.name === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "name" }));
        }
        if (data.age === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "age" }));
        }
        if (data.nested === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "nested" }));
        }
        for (const key0 in data) {
            if (!(((((key0 === "age") || (key0 === "name")) || (key0 === "nested")) || (key0 === "nestedAll")) || (key0 === "nestedOne"))) {
                errors = vErrors.push(e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 }));
            }
        }
        if (data.age !== undefined) {
            let data0 = data.age;
            if (!((typeof data0 == "number") && (isFinite(data0)))) {
                errors = vErrors.push(e(instancePath + "/age", "#/properties/age/type", "type", { type: "number" }));
            }
        }
        if (data.name !== undefined) {
            if (typeof data.name !== "string") {
                errors = vErrors.push(e(instancePath + "/name", "#/properties/name/type", "type", { type: "string" }));
            }
        }
        if (data.nested !== undefined) {
            let data2 = data.nested;
            const _errs7: number = errors;
            let valid1 = false;
            const _errs8: number = errors;
            if (data2 && typeof data2 == "object" && !Array.isArray(data2)) {
                if (data2.surname === undefined) {
                    errors = vErrors.push(e(instancePath + "/nested", "Nested/required", "required", { missingProperty: "surname" }));
                }
                for (const key1 in data2) {
                    if (!(key1 === "surname")) {
                        errors = vErrors.push(e(instancePath + "/nested", "Nested/additionalProperties", "additionalProperties", { additionalProperty: key1 }));
                    }
                }
                if (data2.surname !== undefined) {
                    if (typeof data2.surname !== "string") {
                        errors = vErrors.push(e(instancePath + "/nested/surname", "Nested/properties/surname/type", "type", { type: "string" }));
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
                    const len0 = data2.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                        let data4 = data2[i0];
                        if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
                            if (data4.address === undefined) {
                                errors = vErrors.push(e(instancePath + "/nested/" + i0, "NestedAlternative/required", "required", { missingProperty: "address" }));
                            }
                            for (const key2 in data4) {
                                if (!(key2 === "address")) {
                                    errors = vErrors.push(e(instancePath + "/nested/" + i0, "NestedAlternative/additionalProperties", "additionalProperties", { additionalProperty: key2 }));
                                }
                            }
                            if (data4.address !== undefined) {
                                if (typeof data4.address !== "string") {
                                    errors = vErrors.push(e(instancePath + "/nested/" + i0 + "/address", "NestedAlternative/properties/address/type", "type", { type: "string" }));
                                }
                            }
                        }
                        else {
                            errors = vErrors.push(e(instancePath + "/nested/" + i0, "NestedAlternative/type", "type", { type: "object" }));
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
        }
        if (data.nestedAll !== undefined) {
            let data6 = data.nestedAll;
            if (data6 && typeof data6 == "object" && !Array.isArray(data6)) {
                if (data6.surname === undefined) {
                    errors = vErrors.push(e(instancePath + "/nestedAll", "Nested/required", "required", { missingProperty: "surname" }));
                }
                for (const key3 in data6) {
                    if (!(key3 === "surname")) {
                        errors = vErrors.push(e(instancePath + "/nestedAll", "Nested/additionalProperties", "additionalProperties", { additionalProperty: key3 }));
                    }
                }
                if (data6.surname !== undefined) {
                    if (typeof data6.surname !== "string") {
                        errors = vErrors.push(e(instancePath + "/nestedAll/surname", "Nested/properties/surname/type", "type", { type: "string" }));
                    }
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/nestedAll", "Nested/type", "type", { type: "object" }));
            }
            if (Array.isArray(data6)) {
                const len1 = data6.length;
                for (let i1 = 0; i1 < len1; i1++) {
                    let data8 = data6[i1];
                    if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                        if (data8.address === undefined) {
                            errors = vErrors.push(e(instancePath + "/nestedAll/" + i1, "NestedAlternative/required", "required", { missingProperty: "address" }));
                        }
                        for (const key4 in data8) {
                            if (!(key4 === "address")) {
                                errors = vErrors.push(e(instancePath + "/nestedAll/" + i1, "NestedAlternative/additionalProperties", "additionalProperties", { additionalProperty: key4 }));
                            }
                        }
                        if (data8.address !== undefined) {
                            if (typeof data8.address !== "string") {
                                errors = vErrors.push(e(instancePath + "/nestedAll/" + i1 + "/address", "NestedAlternative/properties/address/type", "type", { type: "string" }));
                            }
                        }
                    }
                    else {
                        errors = vErrors.push(e(instancePath + "/nestedAll/" + i1, "NestedAlternative/type", "type", { type: "object" }));
                    }
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/nestedAll", "#/properties/nestedAll/allOf/1/type", "type", { type: "array" }));
            }
        }
        if (data.nestedOne !== undefined) {
            let data10 = data.nestedOne;
            const _errs38: number = errors;
            let valid15 = false;
            let passing0 = null;
            const _errs39: number = errors;
            if (data10 && typeof data10 == "object" && !Array.isArray(data10)) {
                if (data10.surname === undefined) {
                    errors = vErrors.push(e(instancePath + "/nestedOne", "Nested/required", "required", { missingProperty: "surname" }));
                }
                for (const key5 in data10) {
                    if (!(key5 === "surname")) {
                        errors = vErrors.push(e(instancePath + "/nestedOne", "Nested/additionalProperties", "additionalProperties", { additionalProperty: key5 }));
                    }
                }
                if (data10.surname !== undefined) {
                    if (typeof data10.surname !== "string") {
                        errors = vErrors.push(e(instancePath + "/nestedOne/surname", "Nested/properties/surname/type", "type", { type: "string" }));
                    }
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/nestedOne", "Nested/type", "type", { type: "object" }));
            }
            var _valid1 = _errs39 === errors;
            if (_valid1) {
                valid15 = true;
                passing0 = 0;
            }
            const _errs45: number = errors;
            if (Array.isArray(data10)) {
                const len2 = data10.length;
                for (let i2 = 0; i2 < len2; i2++) {
                    let data12 = data10[i2];
                    if (data12 && typeof data12 == "object" && !Array.isArray(data12)) {
                        if (data12.address === undefined) {
                            errors = vErrors.push(e(instancePath + "/nestedOne/" + i2, "NestedAlternative/required", "required", { missingProperty: "address" }));
                        }
                        for (const key6 in data12) {
                            if (!(key6 === "address")) {
                                errors = vErrors.push(e(instancePath + "/nestedOne/" + i2, "NestedAlternative/additionalProperties", "additionalProperties", { additionalProperty: key6 }));
                            }
                        }
                        if (data12.address !== undefined) {
                            if (typeof data12.address !== "string") {
                                errors = vErrors.push(e(instancePath + "/nestedOne/" + i2 + "/address", "NestedAlternative/properties/address/type", "type", { type: "string" }));
                            }
                        }
                    }
                    else {
                        errors = vErrors.push(e(instancePath + "/nestedOne/" + i2, "NestedAlternative/type", "type", { type: "object" }));
                    }
                }
            }
            else {
                errors = vErrors.push(e(instancePath + "/nestedOne", "#/properties/nestedOne/oneOf/1/type", "type", { type: "array" }));
            }
            var _valid1 = _errs45 === errors;
            if (_valid1 && valid15) {
                valid15 = false;
                passing0 = [passing0, 1];
            }
            else {
                if (_valid1) {
                    valid15 = true;
                    passing0 = 1;
                }
            }
            if (!valid15) {
                errors = vErrors.push(e(instancePath + "/nestedOne", "#/properties/nestedOne/oneOf", "oneOf", { passingSchemas: passing0 }));
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
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
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
        if (data.surname === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "surname" }));
        }
        for (const key0 in data) {
            if (!(key0 === "surname")) {
                errors = vErrors.push(e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 }));
            }
        }
        if (data.surname !== undefined) {
            if (typeof data.surname !== "string") {
                errors = vErrors.push(e(instancePath + "/surname", "#/properties/surname/type", "type", { type: "string" }));
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
    }
    validateNested.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};
const validateNestedAlternative: AjvValidationFn = (data, { instancePath = "" } = {}) => {
    let vErrors: WebAjvError[] = [];
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.address === undefined) {
            errors = vErrors.push(e(instancePath, "#/required", "required", { missingProperty: "address" }));
        }
        for (const key0 in data) {
            if (!(key0 === "address")) {
                errors = vErrors.push(e(instancePath, "#/additionalProperties", "additionalProperties", { additionalProperty: key0 }));
            }
        }
        if (data.address !== undefined) {
            if (typeof data.address !== "string") {
                errors = vErrors.push(e(instancePath + "/address", "#/properties/address/type", "type", { type: "string" }));
            }
        }
    }
    else {
        errors = vErrors.push(e(instancePath, "#/type", "type", { type: "object" }));
    }
    validateNestedAlternative.errors = vErrors.length ? vErrors : undefined;
    return errors === 0;
};

export const JSONSchemaValidator = validatorFactory({JSONSchema: validateJSONSchema,Nested: validateNested,NestedAlternative: validateNestedAlternative,Top: validateTop}, false);
    