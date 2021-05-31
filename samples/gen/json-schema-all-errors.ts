/* eslint-disable */
import { validatorFactory, AjvValidationFn } from 'web-ajv';
export type JSONSchemaSchemaId = "Nested"|"NestedAlternative"|"Top";

const schemaNested = { "additionalProperties": false, "properties": { "surname": { "type": "string" }, "age": { "type": "number" }, "alternatives": { "type": "array", "items": { "$ref": "NestedAlternative" } } }, "required": ["surname"], "type": "object", "$id": "Nested" } as const;
const schemaNestedAlternative = { "additionalProperties": false, "properties": { "address": { "type": "string" } }, "required": ["address"], "type": "object", "$id": "NestedAlternative" } as const;
const validateNested: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors: any = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.surname === undefined) {
            const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "surname" } };
            if (vErrors === null) {
                vErrors = [err0];
            }
            else {
                vErrors.push(err0);
            }
            errors++;
        }
        for (const key0 in data) {
            if (!(((key0 === "surname") || (key0 === "age")) || (key0 === "alternatives"))) {
                const err1 = { instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 } };
                if (vErrors === null) {
                    vErrors = [err1];
                }
                else {
                    vErrors.push(err1);
                }
                errors++;
            }
        }
        if (data.surname !== undefined) {
            if (typeof data.surname !== "string") {
                const err2 = { instancePath: instancePath + "/surname", schemaPath: "#/properties/surname/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err2];
                }
                else {
                    vErrors.push(err2);
                }
                errors++;
            }
        }
        if (data.age !== undefined) {
            let data1 = data.age;
            if (!((typeof data1 == "number") && (isFinite(data1)))) {
                const err3 = { instancePath: instancePath + "/age", schemaPath: "#/properties/age/type", keyword: "type", params: { type: "number" } };
                if (vErrors === null) {
                    vErrors = [err3];
                }
                else {
                    vErrors.push(err3);
                }
                errors++;
            }
        }
        if (data.alternatives !== undefined) {
            let data2 = data.alternatives;
            if (Array.isArray(data2)) {
                const len0 = data2.length;
                for (let i0 = 0; i0 < len0; i0++) {
                    let data3 = data2[i0];
                    if (data3 && typeof data3 == "object" && !Array.isArray(data3)) {
                        if (data3.address === undefined) {
                            const err4 = { instancePath: instancePath + "/alternatives/" + i0, schemaPath: "NestedAlternative/required", keyword: "required", params: { missingProperty: "address" } };
                            if (vErrors === null) {
                                vErrors = [err4];
                            }
                            else {
                                vErrors.push(err4);
                            }
                            errors++;
                        }
                        for (const key1 in data3) {
                            if (!(key1 === "address")) {
                                const err5 = { instancePath: instancePath + "/alternatives/" + i0, schemaPath: "NestedAlternative/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 } };
                                if (vErrors === null) {
                                    vErrors = [err5];
                                }
                                else {
                                    vErrors.push(err5);
                                }
                                errors++;
                            }
                        }
                        if (data3.address !== undefined) {
                            if (typeof data3.address !== "string") {
                                const err6 = { instancePath: instancePath + "/alternatives/" + i0 + "/address", schemaPath: "NestedAlternative/properties/address/type", keyword: "type", params: { type: "string" } };
                                if (vErrors === null) {
                                    vErrors = [err6];
                                }
                                else {
                                    vErrors.push(err6);
                                }
                                errors++;
                            }
                        }
                    }
                    else {
                        const err7 = { instancePath: instancePath + "/alternatives/" + i0, schemaPath: "NestedAlternative/type", keyword: "type", params: { type: "object" } };
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
            else {
                const err8 = { instancePath: instancePath + "/alternatives", schemaPath: "#/properties/alternatives/type", keyword: "type", params: { type: "array" } };
                if (vErrors === null) {
                    vErrors = [err8];
                }
                else {
                    vErrors.push(err8);
                }
                errors++;
            }
        }
    }
    else {
        const err9 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } };
        if (vErrors === null) {
            vErrors = [err9];
        }
        else {
            vErrors.push(err9);
        }
        errors++;
    }
    validateNested.errors = vErrors;
    return errors === 0;
};
const validateNestedAlternative: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors: any = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.address === undefined) {
            const err0 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "address" } };
            if (vErrors === null) {
                vErrors = [err0];
            }
            else {
                vErrors.push(err0);
            }
            errors++;
        }
        for (const key0 in data) {
            if (!(key0 === "address")) {
                const err1 = { instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 } };
                if (vErrors === null) {
                    vErrors = [err1];
                }
                else {
                    vErrors.push(err1);
                }
                errors++;
            }
        }
        if (data.address !== undefined) {
            if (typeof data.address !== "string") {
                const err2 = { instancePath: instancePath + "/address", schemaPath: "#/properties/address/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err2];
                }
                else {
                    vErrors.push(err2);
                }
                errors++;
            }
        }
    }
    else {
        const err3 = { instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } };
        if (vErrors === null) {
            vErrors = [err3];
        }
        else {
            vErrors.push(err3);
        }
        errors++;
    }
    validateNestedAlternative.errors = vErrors;
    return errors === 0;
};
const schemaTop = { "additionalProperties": false, "properties": { "age": { "type": "number", "minimum": { "$data": "1/nested1/age" } }, "name": { "type": "string" }, "self": { "$ref": "Top" }, "nested1": { "$ref": "Nested" }, "nested": { "anyOf": [{ "$ref": "Nested" }, { "type": "array", "items": { "$ref": "NestedAlternative" } }] }, "nestedAll": { "allOf": [{ "$ref": "Nested" }, { "type": "array", "items": { "$ref": "NestedAlternative" } }] }, "nestedOne": { "oneOf": [{ "$ref": "Nested" }, { "type": "array", "items": { "$ref": "NestedAlternative" } }] } }, "required": ["name", "age", "nested"], "type": "object", "$id": "Top" } as const;
const validateTop: AjvValidationFn = (data: any, { instancePath = "", rootData = data } = {}) => {
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
        if (data.age === undefined) {
            const err1 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "age" } };
            if (vErrors === null) {
                vErrors = [err1];
            }
            else {
                vErrors.push(err1);
            }
            errors++;
        }
        if (data.nested === undefined) {
            const err2 = { instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: "nested" } };
            if (vErrors === null) {
                vErrors = [err2];
            }
            else {
                vErrors.push(err2);
            }
            errors++;
        }
        for (const key0 in data) {
            if (!(((((((key0 === "age") || (key0 === "name")) || (key0 === "self")) || (key0 === "nested1")) || (key0 === "nested")) || (key0 === "nestedAll")) || (key0 === "nestedOne"))) {
                const err3 = { instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 } };
                if (vErrors === null) {
                    vErrors = [err3];
                }
                else {
                    vErrors.push(err3);
                }
                errors++;
            }
        }
        if (data.age !== undefined) {
            let data0 = data.age;
            if ((typeof data0 == "number") && (isFinite(data0))) {
                const vSchema0 = data && data.nested1 && data.nested1.age;
                if (vSchema0 !== undefined && ((!((typeof vSchema0 == "number") && (isFinite(vSchema0)))) || (data0 < vSchema0 || isNaN(data0)))) {
                    const err4 = { instancePath: instancePath + "/age", schemaPath: "#/properties/age/minimum", keyword: "minimum", params: { comparison: ">=", limit: vSchema0 } };
                    if (vErrors === null) {
                        vErrors = [err4];
                    }
                    else {
                        vErrors.push(err4);
                    }
                    errors++;
                }
            }
            else {
                const err5 = { instancePath: instancePath + "/age", schemaPath: "#/properties/age/type", keyword: "type", params: { type: "number" } };
                if (vErrors === null) {
                    vErrors = [err5];
                }
                else {
                    vErrors.push(err5);
                }
                errors++;
            }
        }
        if (data.name !== undefined) {
            if (typeof data.name !== "string") {
                const err6 = { instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" } };
                if (vErrors === null) {
                    vErrors = [err6];
                }
                else {
                    vErrors.push(err6);
                }
                errors++;
            }
        }
        if (data.self !== undefined) {
            if (!(wrapper0.validate(data.self, { instancePath: instancePath + "/self", parentData: data, parentDataProperty: "self", rootData }))) {
                vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors);
                errors = vErrors.length;
            }
        }
        if (data.nested1 !== undefined) {
            if (!(validateNested(data.nested1, { instancePath: instancePath + "/nested1", parentData: data, parentDataProperty: "nested1", rootData }))) {
                vErrors = vErrors === null ? validateNested.errors : vErrors.concat(validateNested.errors);
                errors = vErrors.length;
            }
        }
        if (data.nested !== undefined) {
            let data4 = data.nested;
            const _errs9: number = errors;
            let valid1 = false;
            const _errs10: number = errors;
            if (!(validateNested(data4, { instancePath: instancePath + "/nested", parentData: data, parentDataProperty: "nested", rootData }))) {
                vErrors = vErrors === null ? validateNested.errors : vErrors.concat(validateNested.errors);
                errors = vErrors.length;
            }
            var _valid0 = _errs10 === errors;
            valid1 = valid1 || _valid0;
            if (!valid1) {
                const _errs11: number = errors;
                if (Array.isArray(data4)) {
                    const len0 = data4.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                        let data5 = data4[i0];
                        if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
                            if (data5.address === undefined) {
                                const err7 = { instancePath: instancePath + "/nested/" + i0, schemaPath: "NestedAlternative/required", keyword: "required", params: { missingProperty: "address" } };
                                if (vErrors === null) {
                                    vErrors = [err7];
                                }
                                else {
                                    vErrors.push(err7);
                                }
                                errors++;
                            }
                            for (const key1 in data5) {
                                if (!(key1 === "address")) {
                                    const err8 = { instancePath: instancePath + "/nested/" + i0, schemaPath: "NestedAlternative/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 } };
                                    if (vErrors === null) {
                                        vErrors = [err8];
                                    }
                                    else {
                                        vErrors.push(err8);
                                    }
                                    errors++;
                                }
                            }
                            if (data5.address !== undefined) {
                                if (typeof data5.address !== "string") {
                                    const err9 = { instancePath: instancePath + "/nested/" + i0 + "/address", schemaPath: "NestedAlternative/properties/address/type", keyword: "type", params: { type: "string" } };
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
                        else {
                            const err10 = { instancePath: instancePath + "/nested/" + i0, schemaPath: "NestedAlternative/type", keyword: "type", params: { type: "object" } };
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
                    const err11 = { instancePath: instancePath + "/nested", schemaPath: "#/properties/nested/anyOf/1/type", keyword: "type", params: { type: "array" } };
                    if (vErrors === null) {
                        vErrors = [err11];
                    }
                    else {
                        vErrors.push(err11);
                    }
                    errors++;
                }
                var _valid0 = _errs11 === errors;
                valid1 = valid1 || _valid0;
            }
            if (!valid1) {
                const err12 = { instancePath: instancePath + "/nested", schemaPath: "#/properties/nested/anyOf", keyword: "anyOf", params: {} };
                if (vErrors === null) {
                    vErrors = [err12];
                }
                else {
                    vErrors.push(err12);
                }
                errors++;
            }
            else {
                errors = _errs9;
                if (vErrors !== null) {
                    if (_errs9) {
                        vErrors.length = _errs9;
                    }
                    else {
                        vErrors = null;
                    }
                }
            }
        }
        if (data.nestedAll !== undefined) {
            let data7 = data.nestedAll;
            if (!(validateNested(data7, { instancePath: instancePath + "/nestedAll", parentData: data, parentDataProperty: "nestedAll", rootData }))) {
                vErrors = vErrors === null ? validateNested.errors : vErrors.concat(validateNested.errors);
                errors = vErrors.length;
            }
            if (Array.isArray(data7)) {
                const len1 = data7.length;
                for (let i1 = 0; i1 < len1; i1++) {
                    let data8 = data7[i1];
                    if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                        if (data8.address === undefined) {
                            const err13 = { instancePath: instancePath + "/nestedAll/" + i1, schemaPath: "NestedAlternative/required", keyword: "required", params: { missingProperty: "address" } };
                            if (vErrors === null) {
                                vErrors = [err13];
                            }
                            else {
                                vErrors.push(err13);
                            }
                            errors++;
                        }
                        for (const key2 in data8) {
                            if (!(key2 === "address")) {
                                const err14 = { instancePath: instancePath + "/nestedAll/" + i1, schemaPath: "NestedAlternative/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 } };
                                if (vErrors === null) {
                                    vErrors = [err14];
                                }
                                else {
                                    vErrors.push(err14);
                                }
                                errors++;
                            }
                        }
                        if (data8.address !== undefined) {
                            if (typeof data8.address !== "string") {
                                const err15 = { instancePath: instancePath + "/nestedAll/" + i1 + "/address", schemaPath: "NestedAlternative/properties/address/type", keyword: "type", params: { type: "string" } };
                                if (vErrors === null) {
                                    vErrors = [err15];
                                }
                                else {
                                    vErrors.push(err15);
                                }
                                errors++;
                            }
                        }
                    }
                    else {
                        const err16 = { instancePath: instancePath + "/nestedAll/" + i1, schemaPath: "NestedAlternative/type", keyword: "type", params: { type: "object" } };
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
                const err17 = { instancePath: instancePath + "/nestedAll", schemaPath: "#/properties/nestedAll/allOf/1/type", keyword: "type", params: { type: "array" } };
                if (vErrors === null) {
                    vErrors = [err17];
                }
                else {
                    vErrors.push(err17);
                }
                errors++;
            }
        }
        if (data.nestedOne !== undefined) {
            let data10 = data.nestedOne;
            const _errs30: number = errors;
            let valid11 = false;
            let passing0 = null;
            const _errs31: number = errors;
            if (!(validateNested(data10, { instancePath: instancePath + "/nestedOne", parentData: data, parentDataProperty: "nestedOne", rootData }))) {
                vErrors = vErrors === null ? validateNested.errors : vErrors.concat(validateNested.errors);
                errors = vErrors.length;
            }
            var _valid1 = _errs31 === errors;
            if (_valid1) {
                valid11 = true;
                passing0 = 0;
            }
            const _errs32: number = errors;
            if (Array.isArray(data10)) {
                const len2 = data10.length;
                for (let i2 = 0; i2 < len2; i2++) {
                    let data11 = data10[i2];
                    if (data11 && typeof data11 == "object" && !Array.isArray(data11)) {
                        if (data11.address === undefined) {
                            const err18 = { instancePath: instancePath + "/nestedOne/" + i2, schemaPath: "NestedAlternative/required", keyword: "required", params: { missingProperty: "address" } };
                            if (vErrors === null) {
                                vErrors = [err18];
                            }
                            else {
                                vErrors.push(err18);
                            }
                            errors++;
                        }
                        for (const key3 in data11) {
                            if (!(key3 === "address")) {
                                const err19 = { instancePath: instancePath + "/nestedOne/" + i2, schemaPath: "NestedAlternative/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key3 } };
                                if (vErrors === null) {
                                    vErrors = [err19];
                                }
                                else {
                                    vErrors.push(err19);
                                }
                                errors++;
                            }
                        }
                        if (data11.address !== undefined) {
                            if (typeof data11.address !== "string") {
                                const err20 = { instancePath: instancePath + "/nestedOne/" + i2 + "/address", schemaPath: "NestedAlternative/properties/address/type", keyword: "type", params: { type: "string" } };
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
                        const err21 = { instancePath: instancePath + "/nestedOne/" + i2, schemaPath: "NestedAlternative/type", keyword: "type", params: { type: "object" } };
                        if (vErrors === null) {
                            vErrors = [err21];
                        }
                        else {
                            vErrors.push(err21);
                        }
                        errors++;
                    }
                }
            }
            else {
                const err22 = { instancePath: instancePath + "/nestedOne", schemaPath: "#/properties/nestedOne/oneOf/1/type", keyword: "type", params: { type: "array" } };
                if (vErrors === null) {
                    vErrors = [err22];
                }
                else {
                    vErrors.push(err22);
                }
                errors++;
            }
            var _valid1 = _errs32 === errors;
            if (_valid1 && valid11) {
                valid11 = false;
                passing0 = [passing0, 1];
            }
            else {
                if (_valid1) {
                    valid11 = true;
                    passing0 = 1;
                }
            }
            if (!valid11) {
                const err23 = { instancePath: instancePath + "/nestedOne", schemaPath: "#/properties/nestedOne/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 } };
                if (vErrors === null) {
                    vErrors = [err23];
                }
                else {
                    vErrors.push(err23);
                }
                errors++;
            }
            else {
                errors = _errs30;
                if (vErrors !== null) {
                    if (_errs30) {
                        vErrors.length = _errs30;
                    }
                    else {
                        vErrors = null;
                    }
                }
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
    validateTop.errors = vErrors;
    return errors === 0;
};
const wrapper0 = { validate: validateTop };

export const JSONSchemaValidator = validatorFactory<JSONSchemaSchemaId,false>({Nested: {validator:validateNested, schema: schemaNested},
NestedAlternative: {validator:validateNestedAlternative, schema: schemaNestedAlternative},
Top: {validator:validateTop, schema: schemaTop}}, false);
