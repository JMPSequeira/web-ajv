/* eslint-disable */
import { validatorFactory, AjvValidationFn } from 'web-ajv';
export type JSONSchemaSchemaId = "Nested"|"NestedAlternative"|"Top";

const schemaNested = { "additionalProperties": false, "properties": { "surname": { "type": "string" }, "age": { "type": "number" }, "alternatives": { "type": "array", "items": { "$ref": "NestedAlternative" } } }, "required": ["surname"], "type": "object", "$id": "Nested" } as const;
const schemaNestedAlternative = { "additionalProperties": false, "properties": { "address": { "type": "string" } }, "required": ["address"], "type": "object", "$id": "NestedAlternative" } as const;
const validateNested: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors: any = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            let missing0;
            if ((data.surname === undefined) && (missing0 = "surname")) {
                validateNested.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 } }];
                return false;
            }
            else {
                const _errs1: number = errors;
                for (const key0 in data) {
                    if (!(((key0 === "surname") || (key0 === "age")) || (key0 === "alternatives"))) {
                        validateNested.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 } }];
                        return false;
                        break;
                    }
                }
                if (_errs1 === errors) {
                    if (data.surname !== undefined) {
                        const _errs2: number = errors;
                        if (typeof data.surname !== "string") {
                            validateNested.errors = [{ instancePath: instancePath + "/surname", schemaPath: "#/properties/surname/type", keyword: "type", params: { type: "string" } }];
                            return false;
                        }
                        var valid0 = _errs2 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.age !== undefined) {
                            let data1 = data.age;
                            const _errs4: number = errors;
                            if (!((typeof data1 == "number") && (isFinite(data1)))) {
                                validateNested.errors = [{ instancePath: instancePath + "/age", schemaPath: "#/properties/age/type", keyword: "type", params: { type: "number" } }];
                                return false;
                            }
                            var valid0 = _errs4 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.alternatives !== undefined) {
                                let data2 = data.alternatives;
                                const _errs6: number = errors;
                                if (errors === _errs6) {
                                    if (Array.isArray(data2)) {
                                        var valid1 = true;
                                        const len0 = data2.length;
                                        for (let i0 = 0; i0 < len0; i0++) {
                                            let data3 = data2[i0];
                                            const _errs8: number = errors;
                                            const _errs9: number = errors;
                                            if (errors === _errs9) {
                                                if (data3 && typeof data3 == "object" && !Array.isArray(data3)) {
                                                    let missing1;
                                                    if ((data3.address === undefined) && (missing1 = "address")) {
                                                        validateNested.errors = [{ instancePath: instancePath + "/alternatives/" + i0, schemaPath: "NestedAlternative/required", keyword: "required", params: { missingProperty: missing1 } }];
                                                        return false;
                                                    }
                                                    else {
                                                        const _errs11: number = errors;
                                                        for (const key1 in data3) {
                                                            if (!(key1 === "address")) {
                                                                validateNested.errors = [{ instancePath: instancePath + "/alternatives/" + i0, schemaPath: "NestedAlternative/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 } }];
                                                                return false;
                                                                break;
                                                            }
                                                        }
                                                        if (_errs11 === errors) {
                                                            if (data3.address !== undefined) {
                                                                if (typeof data3.address !== "string") {
                                                                    validateNested.errors = [{ instancePath: instancePath + "/alternatives/" + i0 + "/address", schemaPath: "NestedAlternative/properties/address/type", keyword: "type", params: { type: "string" } }];
                                                                    return false;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    validateNested.errors = [{ instancePath: instancePath + "/alternatives/" + i0, schemaPath: "NestedAlternative/type", keyword: "type", params: { type: "object" } }];
                                                    return false;
                                                }
                                            }
                                            var valid1 = _errs8 === errors;
                                            if (!valid1) {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        validateNested.errors = [{ instancePath: instancePath + "/alternatives", schemaPath: "#/properties/alternatives/type", keyword: "type", params: { type: "array" } }];
                                        return false;
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
            validateNested.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }];
            return false;
        }
    }
    validateNested.errors = vErrors;
    return errors === 0;
};
const validateNestedAlternative: AjvValidationFn = (data: any, { instancePath = "" } = {}) => {
    ;
    let vErrors: any = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            let missing0;
            if ((data.address === undefined) && (missing0 = "address")) {
                validateNestedAlternative.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 } }];
                return false;
            }
            else {
                const _errs1: number = errors;
                for (const key0 in data) {
                    if (!(key0 === "address")) {
                        validateNestedAlternative.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 } }];
                        return false;
                        break;
                    }
                }
                if (_errs1 === errors) {
                    if (data.address !== undefined) {
                        if (typeof data.address !== "string") {
                            validateNestedAlternative.errors = [{ instancePath: instancePath + "/address", schemaPath: "#/properties/address/type", keyword: "type", params: { type: "string" } }];
                            return false;
                        }
                    }
                }
            }
        }
        else {
            validateNestedAlternative.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }];
            return false;
        }
    }
    validateNestedAlternative.errors = vErrors;
    return errors === 0;
};
const schemaTop = { "additionalProperties": false, "properties": { "age": { "type": "number", "minimum": { "$data": "1/nested1/age" } }, "name": { "type": "string" }, "self": { "$ref": "Top" }, "nested1": { "$ref": "Nested" }, "nested": { "anyOf": [{ "$ref": "Nested" }, { "type": "array", "items": { "$ref": "NestedAlternative" } }] }, "nestedAll": { "allOf": [{ "$ref": "Nested" }, { "type": "array", "items": { "$ref": "NestedAlternative" } }] }, "nestedOne": { "oneOf": [{ "$ref": "Nested" }, { "type": "array", "items": { "$ref": "NestedAlternative" } }] } }, "required": ["name", "age", "nested"], "type": "object", "$id": "Top" } as const;
const validateTop: AjvValidationFn = (data: any, { instancePath = "", rootData = data } = {}) => {
    ;
    let vErrors: any = null;
    let errors = 0;
    if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            let missing0;
            if ((((data.name === undefined) && (missing0 = "name")) || ((data.age === undefined) && (missing0 = "age"))) || ((data.nested === undefined) && (missing0 = "nested"))) {
                validateTop.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 } }];
                return false;
            }
            else {
                const _errs1: number = errors;
                for (const key0 in data) {
                    if (!(((((((key0 === "age") || (key0 === "name")) || (key0 === "self")) || (key0 === "nested1")) || (key0 === "nested")) || (key0 === "nestedAll")) || (key0 === "nestedOne"))) {
                        validateTop.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 } }];
                        return false;
                        break;
                    }
                }
                if (_errs1 === errors) {
                    if (data.age !== undefined) {
                        let data0 = data.age;
                        const _errs2: number = errors;
                        if (errors === _errs2) {
                            if ((typeof data0 == "number") && (isFinite(data0))) {
                                const vSchema0 = data && data.nested1 && data.nested1.age;
                                if (vSchema0 !== undefined && ((!((typeof vSchema0 == "number") && (isFinite(vSchema0)))) || (data0 < vSchema0 || isNaN(data0)))) {
                                    validateTop.errors = [{ instancePath: instancePath + "/age", schemaPath: "#/properties/age/minimum", keyword: "minimum", params: { comparison: ">=", limit: vSchema0 } }];
                                    return false;
                                }
                            }
                            else {
                                validateTop.errors = [{ instancePath: instancePath + "/age", schemaPath: "#/properties/age/type", keyword: "type", params: { type: "number" } }];
                                return false;
                            }
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
                                validateTop.errors = [{ instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" } }];
                                return false;
                            }
                            var valid0 = _errs4 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.self !== undefined) {
                                const _errs6: number = errors;
                                if (!(wrapper0.validate(data.self, { instancePath: instancePath + "/self", parentData: data, parentDataProperty: "self", rootData }))) {
                                    vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors);
                                    errors = vErrors.length;
                                }
                                var valid0 = _errs6 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.nested1 !== undefined) {
                                    const _errs7: number = errors;
                                    if (!(validateNested(data.nested1, { instancePath: instancePath + "/nested1", parentData: data, parentDataProperty: "nested1", rootData }))) {
                                        vErrors = vErrors === null ? validateNested.errors : vErrors.concat(validateNested.errors);
                                        errors = vErrors.length;
                                    }
                                    var valid0 = _errs7 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.nested !== undefined) {
                                        let data4 = data.nested;
                                        const _errs8: number = errors;
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
                                            if (errors === _errs11) {
                                                if (Array.isArray(data4)) {
                                                    var valid2 = true;
                                                    const len0 = data4.length;
                                                    for (let i0 = 0; i0 < len0; i0++) {
                                                        let data5 = data4[i0];
                                                        const _errs13: number = errors;
                                                        const _errs14: number = errors;
                                                        if (errors === _errs14) {
                                                            if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
                                                                let missing1;
                                                                if ((data5.address === undefined) && (missing1 = "address")) {
                                                                    const err0 = { instancePath: instancePath + "/nested/" + i0, schemaPath: "NestedAlternative/required", keyword: "required", params: { missingProperty: missing1 } };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err0];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err0);
                                                                    }
                                                                    errors++;
                                                                }
                                                                else {
                                                                    const _errs16: number = errors;
                                                                    for (const key1 in data5) {
                                                                        if (!(key1 === "address")) {
                                                                            const err1 = { instancePath: instancePath + "/nested/" + i0, schemaPath: "NestedAlternative/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 } };
                                                                            if (vErrors === null) {
                                                                                vErrors = [err1];
                                                                            }
                                                                            else {
                                                                                vErrors.push(err1);
                                                                            }
                                                                            errors++;
                                                                            break;
                                                                        }
                                                                    }
                                                                    if (_errs16 === errors) {
                                                                        if (data5.address !== undefined) {
                                                                            if (typeof data5.address !== "string") {
                                                                                const err2 = { instancePath: instancePath + "/nested/" + i0 + "/address", schemaPath: "NestedAlternative/properties/address/type", keyword: "type", params: { type: "string" } };
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
                                                                }
                                                            }
                                                            else {
                                                                const err3 = { instancePath: instancePath + "/nested/" + i0, schemaPath: "NestedAlternative/type", keyword: "type", params: { type: "object" } };
                                                                if (vErrors === null) {
                                                                    vErrors = [err3];
                                                                }
                                                                else {
                                                                    vErrors.push(err3);
                                                                }
                                                                errors++;
                                                            }
                                                        }
                                                        var valid2 = _errs13 === errors;
                                                        if (!valid2) {
                                                            break;
                                                        }
                                                    }
                                                }
                                                else {
                                                    const err4 = { instancePath: instancePath + "/nested", schemaPath: "#/properties/nested/anyOf/1/type", keyword: "type", params: { type: "array" } };
                                                    if (vErrors === null) {
                                                        vErrors = [err4];
                                                    }
                                                    else {
                                                        vErrors.push(err4);
                                                    }
                                                    errors++;
                                                }
                                            }
                                            var _valid0 = _errs11 === errors;
                                            valid1 = valid1 || _valid0;
                                        }
                                        if (!valid1) {
                                            const err5 = { instancePath: instancePath + "/nested", schemaPath: "#/properties/nested/anyOf", keyword: "anyOf", params: {} };
                                            if (vErrors === null) {
                                                vErrors = [err5];
                                            }
                                            else {
                                                vErrors.push(err5);
                                            }
                                            errors++;
                                            validateTop.errors = vErrors;
                                            return false;
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
                                        var valid0 = _errs8 === errors;
                                    }
                                    else {
                                        var valid0 = true;
                                    }
                                    if (valid0) {
                                        if (data.nestedAll !== undefined) {
                                            let data7 = data.nestedAll;
                                            const _errs19: number = errors;
                                            const _errs20: number = errors;
                                            if (!(validateNested(data7, { instancePath: instancePath + "/nestedAll", parentData: data, parentDataProperty: "nestedAll", rootData }))) {
                                                vErrors = vErrors === null ? validateNested.errors : vErrors.concat(validateNested.errors);
                                                errors = vErrors.length;
                                            }
                                            var valid5 = _errs20 === errors;
                                            if (valid5) {
                                                const _errs21: number = errors;
                                                if (errors === _errs21) {
                                                    if (Array.isArray(data7)) {
                                                        var valid6 = true;
                                                        const len1 = data7.length;
                                                        for (let i1 = 0; i1 < len1; i1++) {
                                                            let data8 = data7[i1];
                                                            const _errs23: number = errors;
                                                            const _errs24: number = errors;
                                                            if (errors === _errs24) {
                                                                if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                                                                    let missing2;
                                                                    if ((data8.address === undefined) && (missing2 = "address")) {
                                                                        validateTop.errors = [{ instancePath: instancePath + "/nestedAll/" + i1, schemaPath: "NestedAlternative/required", keyword: "required", params: { missingProperty: missing2 } }];
                                                                        return false;
                                                                    }
                                                                    else {
                                                                        const _errs26: number = errors;
                                                                        for (const key2 in data8) {
                                                                            if (!(key2 === "address")) {
                                                                                validateTop.errors = [{ instancePath: instancePath + "/nestedAll/" + i1, schemaPath: "NestedAlternative/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 } }];
                                                                                return false;
                                                                                break;
                                                                            }
                                                                        }
                                                                        if (_errs26 === errors) {
                                                                            if (data8.address !== undefined) {
                                                                                if (typeof data8.address !== "string") {
                                                                                    validateTop.errors = [{ instancePath: instancePath + "/nestedAll/" + i1 + "/address", schemaPath: "NestedAlternative/properties/address/type", keyword: "type", params: { type: "string" } }];
                                                                                    return false;
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                else {
                                                                    validateTop.errors = [{ instancePath: instancePath + "/nestedAll/" + i1, schemaPath: "NestedAlternative/type", keyword: "type", params: { type: "object" } }];
                                                                    return false;
                                                                }
                                                            }
                                                            var valid6 = _errs23 === errors;
                                                            if (!valid6) {
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        validateTop.errors = [{ instancePath: instancePath + "/nestedAll", schemaPath: "#/properties/nestedAll/allOf/1/type", keyword: "type", params: { type: "array" } }];
                                                        return false;
                                                    }
                                                }
                                                var valid5 = _errs21 === errors;
                                            }
                                            var valid0 = _errs19 === errors;
                                        }
                                        else {
                                            var valid0 = true;
                                        }
                                        if (valid0) {
                                            if (data.nestedOne !== undefined) {
                                                let data10 = data.nestedOne;
                                                const _errs29: number = errors;
                                                const _errs30: number = errors;
                                                let valid9 = false;
                                                let passing0 = null;
                                                const _errs31: number = errors;
                                                if (!(validateNested(data10, { instancePath: instancePath + "/nestedOne", parentData: data, parentDataProperty: "nestedOne", rootData }))) {
                                                    vErrors = vErrors === null ? validateNested.errors : vErrors.concat(validateNested.errors);
                                                    errors = vErrors.length;
                                                }
                                                var _valid1 = _errs31 === errors;
                                                if (_valid1) {
                                                    valid9 = true;
                                                    passing0 = 0;
                                                }
                                                const _errs32: number = errors;
                                                if (errors === _errs32) {
                                                    if (Array.isArray(data10)) {
                                                        var valid10 = true;
                                                        const len2 = data10.length;
                                                        for (let i2 = 0; i2 < len2; i2++) {
                                                            let data11 = data10[i2];
                                                            const _errs34: number = errors;
                                                            const _errs35: number = errors;
                                                            if (errors === _errs35) {
                                                                if (data11 && typeof data11 == "object" && !Array.isArray(data11)) {
                                                                    let missing3;
                                                                    if ((data11.address === undefined) && (missing3 = "address")) {
                                                                        const err6 = { instancePath: instancePath + "/nestedOne/" + i2, schemaPath: "NestedAlternative/required", keyword: "required", params: { missingProperty: missing3 } };
                                                                        if (vErrors === null) {
                                                                            vErrors = [err6];
                                                                        }
                                                                        else {
                                                                            vErrors.push(err6);
                                                                        }
                                                                        errors++;
                                                                    }
                                                                    else {
                                                                        const _errs37: number = errors;
                                                                        for (const key3 in data11) {
                                                                            if (!(key3 === "address")) {
                                                                                const err7 = { instancePath: instancePath + "/nestedOne/" + i2, schemaPath: "NestedAlternative/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key3 } };
                                                                                if (vErrors === null) {
                                                                                    vErrors = [err7];
                                                                                }
                                                                                else {
                                                                                    vErrors.push(err7);
                                                                                }
                                                                                errors++;
                                                                                break;
                                                                            }
                                                                        }
                                                                        if (_errs37 === errors) {
                                                                            if (data11.address !== undefined) {
                                                                                if (typeof data11.address !== "string") {
                                                                                    const err8 = { instancePath: instancePath + "/nestedOne/" + i2 + "/address", schemaPath: "NestedAlternative/properties/address/type", keyword: "type", params: { type: "string" } };
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
                                                                    }
                                                                }
                                                                else {
                                                                    const err9 = { instancePath: instancePath + "/nestedOne/" + i2, schemaPath: "NestedAlternative/type", keyword: "type", params: { type: "object" } };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err9];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err9);
                                                                    }
                                                                    errors++;
                                                                }
                                                            }
                                                            var valid10 = _errs34 === errors;
                                                            if (!valid10) {
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        const err10 = { instancePath: instancePath + "/nestedOne", schemaPath: "#/properties/nestedOne/oneOf/1/type", keyword: "type", params: { type: "array" } };
                                                        if (vErrors === null) {
                                                            vErrors = [err10];
                                                        }
                                                        else {
                                                            vErrors.push(err10);
                                                        }
                                                        errors++;
                                                    }
                                                }
                                                var _valid1 = _errs32 === errors;
                                                if (_valid1 && valid9) {
                                                    valid9 = false;
                                                    passing0 = [passing0, 1];
                                                }
                                                else {
                                                    if (_valid1) {
                                                        valid9 = true;
                                                        passing0 = 1;
                                                    }
                                                }
                                                if (!valid9) {
                                                    const err11 = { instancePath: instancePath + "/nestedOne", schemaPath: "#/properties/nestedOne/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 } };
                                                    if (vErrors === null) {
                                                        vErrors = [err11];
                                                    }
                                                    else {
                                                        vErrors.push(err11);
                                                    }
                                                    errors++;
                                                    validateTop.errors = vErrors;
                                                    return false;
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
                                                var valid0 = _errs29 === errors;
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
            validateTop.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" } }];
            return false;
        }
    }
    validateTop.errors = vErrors;
    return errors === 0;
};
const wrapper0 = { validate: validateTop };

export const JSONSchemaValidator = validatorFactory<JSONSchemaSchemaId,false>({Nested: {validator:validateNested, schema: schemaNested},
NestedAlternative: {validator:validateNestedAlternative, schema: schemaNestedAlternative},
Top: {validator:validateTop, schema: schemaTop}}, false);
