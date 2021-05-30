/* eslint-disable */
"use strict";
exports.validateDummy = validate10;
const schema11 = {
    type: "object",
    properties: {
        name: { type: ["string", "null"] },
        items: { type: ["array", "null"], items: { $ref: "Item" } },
    },
    additionalProperties: false,
    $id: "Dummy",
};
const schema12 = {
    required: ["deliveredOn", "emailAddress", "id"],
    type: "object",
    properties: {
        id: { type: "string", format: "uuid" },
        deliveredOn: { type: "string", format: "date-time" },
        emailAddress: { type: "string", format: "email" },
    },
    additionalProperties: false,
    $id: "Item",
};
const formats0 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
const formats2 = require("ajv-formats/dist/formats").fullFormats["date-time"];
const formats4 =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
function validate10(
    data,
    { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
    /*# sourceURL="Dummy" */ let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!(key0 === "name" || key0 === "items")) {
                const err0 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: { additionalProperty: key0 },
                };
                if (vErrors === null) {
                    vErrors = [err0];
                } else {
                    vErrors.push(err0);
                }
                errors++;
            }
        }
        if (data.name !== undefined) {
            let data0 = data.name;
            if (typeof data0 !== "string" && data0 !== null) {
                const err1 = {
                    instancePath: instancePath + "/name",
                    schemaPath: "#/properties/name/type",
                    keyword: "type",
                    params: { type: schema11.properties.name.type },
                };
                if (vErrors === null) {
                    vErrors = [err1];
                } else {
                    vErrors.push(err1);
                }
                errors++;
            }
        }
        if (data.items !== undefined) {
            let data1 = data.items;
            if (!Array.isArray(data1) && data1 !== null) {
                const err2 = {
                    instancePath: instancePath + "/items",
                    schemaPath: "#/properties/items/type",
                    keyword: "type",
                    params: { type: schema11.properties.items.type },
                };
                if (vErrors === null) {
                    vErrors = [err2];
                } else {
                    vErrors.push(err2);
                }
                errors++;
            }
            if (Array.isArray(data1)) {
                const len0 = data1.length;
                for (let i0 = 0; i0 < len0; i0++) {
                    let data2 = data1[i0];
                    if (
                        data2 &&
                        typeof data2 == "object" &&
                        !Array.isArray(data2)
                    ) {
                        if (data2.deliveredOn === undefined) {
                            const err3 = {
                                instancePath: instancePath + "/items/" + i0,
                                schemaPath: "Item/required",
                                keyword: "required",
                                params: { missingProperty: "deliveredOn" },
                            };
                            if (vErrors === null) {
                                vErrors = [err3];
                            } else {
                                vErrors.push(err3);
                            }
                            errors++;
                        }
                        if (data2.emailAddress === undefined) {
                            const err4 = {
                                instancePath: instancePath + "/items/" + i0,
                                schemaPath: "Item/required",
                                keyword: "required",
                                params: { missingProperty: "emailAddress" },
                            };
                            if (vErrors === null) {
                                vErrors = [err4];
                            } else {
                                vErrors.push(err4);
                            }
                            errors++;
                        }
                        if (data2.id === undefined) {
                            const err5 = {
                                instancePath: instancePath + "/items/" + i0,
                                schemaPath: "Item/required",
                                keyword: "required",
                                params: { missingProperty: "id" },
                            };
                            if (vErrors === null) {
                                vErrors = [err5];
                            } else {
                                vErrors.push(err5);
                            }
                            errors++;
                        }
                        for (const key1 in data2) {
                            if (
                                !(
                                    key1 === "id" ||
                                    key1 === "deliveredOn" ||
                                    key1 === "emailAddress"
                                )
                            ) {
                                const err6 = {
                                    instancePath: instancePath + "/items/" + i0,
                                    schemaPath: "Item/additionalProperties",
                                    keyword: "additionalProperties",
                                    params: { additionalProperty: key1 },
                                };
                                if (vErrors === null) {
                                    vErrors = [err6];
                                } else {
                                    vErrors.push(err6);
                                }
                                errors++;
                            }
                        }
                        if (data2.id !== undefined) {
                            let data3 = data2.id;
                            if (typeof data3 === "string") {
                                if (!formats0.test(data3)) {
                                    const err7 = {
                                        instancePath:
                                            instancePath +
                                            "/items/" +
                                            i0 +
                                            "/id",
                                        schemaPath: "Item/properties/id/format",
                                        keyword: "format",
                                        params: { format: "uuid" },
                                    };
                                    if (vErrors === null) {
                                        vErrors = [err7];
                                    } else {
                                        vErrors.push(err7);
                                    }
                                    errors++;
                                }
                            } else {
                                const err8 = {
                                    instancePath:
                                        instancePath + "/items/" + i0 + "/id",
                                    schemaPath: "Item/properties/id/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                };
                                if (vErrors === null) {
                                    vErrors = [err8];
                                } else {
                                    vErrors.push(err8);
                                }
                                errors++;
                            }
                        }
                        if (data2.deliveredOn !== undefined) {
                            let data4 = data2.deliveredOn;
                            if (typeof data4 === "string") {
                                if (!formats2.validate(data4)) {
                                    const err9 = {
                                        instancePath:
                                            instancePath +
                                            "/items/" +
                                            i0 +
                                            "/deliveredOn",
                                        schemaPath:
                                            "Item/properties/deliveredOn/format",
                                        keyword: "format",
                                        params: { format: "date-time" },
                                    };
                                    if (vErrors === null) {
                                        vErrors = [err9];
                                    } else {
                                        vErrors.push(err9);
                                    }
                                    errors++;
                                }
                            } else {
                                const err10 = {
                                    instancePath:
                                        instancePath +
                                        "/items/" +
                                        i0 +
                                        "/deliveredOn",
                                    schemaPath:
                                        "Item/properties/deliveredOn/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                };
                                if (vErrors === null) {
                                    vErrors = [err10];
                                } else {
                                    vErrors.push(err10);
                                }
                                errors++;
                            }
                        }
                        if (data2.emailAddress !== undefined) {
                            let data5 = data2.emailAddress;
                            if (typeof data5 === "string") {
                                if (!formats4.test(data5)) {
                                    const err11 = {
                                        instancePath:
                                            instancePath +
                                            "/items/" +
                                            i0 +
                                            "/emailAddress",
                                        schemaPath:
                                            "Item/properties/emailAddress/format",
                                        keyword: "format",
                                        params: { format: "email" },
                                    };
                                    if (vErrors === null) {
                                        vErrors = [err11];
                                    } else {
                                        vErrors.push(err11);
                                    }
                                    errors++;
                                }
                            } else {
                                const err12 = {
                                    instancePath:
                                        instancePath +
                                        "/items/" +
                                        i0 +
                                        "/emailAddress",
                                    schemaPath:
                                        "Item/properties/emailAddress/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                };
                                if (vErrors === null) {
                                    vErrors = [err12];
                                } else {
                                    vErrors.push(err12);
                                }
                                errors++;
                            }
                        }
                    } else {
                        const err13 = {
                            instancePath: instancePath + "/items/" + i0,
                            schemaPath: "Item/type",
                            keyword: "type",
                            params: { type: "object" },
                        };
                        if (vErrors === null) {
                            vErrors = [err13];
                        } else {
                            vErrors.push(err13);
                        }
                        errors++;
                    }
                }
            }
        }
    } else {
        const err14 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: { type: "object" },
        };
        if (vErrors === null) {
            vErrors = [err14];
        } else {
            vErrors.push(err14);
        }
        errors++;
    }
    validate10.errors = vErrors;
    return errors === 0;
}
exports.validateItem = validate11;
function validate11(
    data,
    { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
    /*# sourceURL="Item" */ let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.deliveredOn === undefined) {
            const err0 = {
                instancePath,
                schemaPath: "#/required",
                keyword: "required",
                params: { missingProperty: "deliveredOn" },
            };
            if (vErrors === null) {
                vErrors = [err0];
            } else {
                vErrors.push(err0);
            }
            errors++;
        }
        if (data.emailAddress === undefined) {
            const err1 = {
                instancePath,
                schemaPath: "#/required",
                keyword: "required",
                params: { missingProperty: "emailAddress" },
            };
            if (vErrors === null) {
                vErrors = [err1];
            } else {
                vErrors.push(err1);
            }
            errors++;
        }
        if (data.id === undefined) {
            const err2 = {
                instancePath,
                schemaPath: "#/required",
                keyword: "required",
                params: { missingProperty: "id" },
            };
            if (vErrors === null) {
                vErrors = [err2];
            } else {
                vErrors.push(err2);
            }
            errors++;
        }
        for (const key0 in data) {
            if (
                !(
                    key0 === "id" ||
                    key0 === "deliveredOn" ||
                    key0 === "emailAddress"
                )
            ) {
                const err3 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: { additionalProperty: key0 },
                };
                if (vErrors === null) {
                    vErrors = [err3];
                } else {
                    vErrors.push(err3);
                }
                errors++;
            }
        }
        if (data.id !== undefined) {
            let data0 = data.id;
            if (typeof data0 === "string") {
                if (!formats0.test(data0)) {
                    const err4 = {
                        instancePath: instancePath + "/id",
                        schemaPath: "#/properties/id/format",
                        keyword: "format",
                        params: { format: "uuid" },
                    };
                    if (vErrors === null) {
                        vErrors = [err4];
                    } else {
                        vErrors.push(err4);
                    }
                    errors++;
                }
            } else {
                const err5 = {
                    instancePath: instancePath + "/id",
                    schemaPath: "#/properties/id/type",
                    keyword: "type",
                    params: { type: "string" },
                };
                if (vErrors === null) {
                    vErrors = [err5];
                } else {
                    vErrors.push(err5);
                }
                errors++;
            }
        }
        if (data.deliveredOn !== undefined) {
            let data1 = data.deliveredOn;
            if (typeof data1 === "string") {
                if (!formats2.validate(data1)) {
                    const err6 = {
                        instancePath: instancePath + "/deliveredOn",
                        schemaPath: "#/properties/deliveredOn/format",
                        keyword: "format",
                        params: { format: "date-time" },
                    };
                    if (vErrors === null) {
                        vErrors = [err6];
                    } else {
                        vErrors.push(err6);
                    }
                    errors++;
                }
            } else {
                const err7 = {
                    instancePath: instancePath + "/deliveredOn",
                    schemaPath: "#/properties/deliveredOn/type",
                    keyword: "type",
                    params: { type: "string" },
                };
                if (vErrors === null) {
                    vErrors = [err7];
                } else {
                    vErrors.push(err7);
                }
                errors++;
            }
        }
        if (data.emailAddress !== undefined) {
            let data2 = data.emailAddress;
            if (typeof data2 === "string") {
                if (!formats4.test(data2)) {
                    const err8 = {
                        instancePath: instancePath + "/emailAddress",
                        schemaPath: "#/properties/emailAddress/format",
                        keyword: "format",
                        params: { format: "email" },
                    };
                    if (vErrors === null) {
                        vErrors = [err8];
                    } else {
                        vErrors.push(err8);
                    }
                    errors++;
                }
            } else {
                const err9 = {
                    instancePath: instancePath + "/emailAddress",
                    schemaPath: "#/properties/emailAddress/type",
                    keyword: "type",
                    params: { type: "string" },
                };
                if (vErrors === null) {
                    vErrors = [err9];
                } else {
                    vErrors.push(err9);
                }
                errors++;
            }
        }
    } else {
        const err10 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: { type: "object" },
        };
        if (vErrors === null) {
            vErrors = [err10];
        } else {
            vErrors.push(err10);
        }
        errors++;
    }
    validate11.errors = vErrors;
    return errors === 0;
}
exports.validateNested = validate12;
const Error0 = require("ajv/dist/runtime/validation_error").default;
const schema14 = {
    type: "object",
    properties: { age: { type: ["string", "null"], timeout: { time: 123 } } },
    additionalProperties: false,
    $id: "Nested",
    $async: true,
};
async function validate12(
    data,
    { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
    /*# sourceURL="Nested" */ let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!(key0 === "age")) {
                const err0 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: { additionalProperty: key0 },
                };
                if (vErrors === null) {
                    vErrors = [err0];
                } else {
                    vErrors.push(err0);
                }
                errors++;
            }
        }
        if (data.age !== undefined) {
            let data0 = data.age;
            if (typeof data0 !== "string" && data0 !== null) {
                const err1 = {
                    instancePath: instancePath + "/age",
                    schemaPath: "#/properties/age/type",
                    keyword: "type",
                    params: { type: schema14.properties.age.type },
                };
                if (vErrors === null) {
                    vErrors = [err1];
                } else {
                    vErrors.push(err1);
                }
                errors++;
            }
            const res0 = await new Promise(() => false);
            if (res0) {
                const err2 = {
                    instancePath: instancePath + "/age",
                    schemaPath: "#/properties/age/timeout",
                    keyword: "timeout",
                    params: {},
                };
                if (vErrors === null) {
                    vErrors = [err2];
                } else {
                    vErrors.push(err2);
                }
                errors++;
            }
        }
    } else {
        const err3 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: { type: "object" },
        };
        if (vErrors === null) {
            vErrors = [err3];
        } else {
            vErrors.push(err3);
        }
        errors++;
    }
    if (errors === 0) {
        return data;
    } else {
        throw new Error0(vErrors);
    }
}
exports.validateSample = validate13;
const schema15 = {
    required: ["lastName", "name"],
    type: "object",
    properties: {
        name: { maxLength: 50, minLength: 1, type: "string" },
        lastName: { maxLength: 50, type: "string" },
        anInt: {
            exclusiveMaximum: 50,
            type: "integer",
            format: "int32",
            minimum: -2147483648,
        },
        aLong: {
            exclusiveMinimum: 50,
            type: "integer",
            format: "int64",
            maximum: 9223372036854776000,
        },
        aDecimal: {
            type: "number",
            format: "double",
            minimum: -1.7976931348623157e308,
            maximum: 1.7976931348623157e308,
        },
        nested: { $ref: "Nested" },
        dummy: { $ref: "Dummy" },
    },
    additionalProperties: false,
    $id: "Sample",
    $async: true,
};
const func4 = require("ajv/dist/runtime/ucs2length").default;
const formats12 = require("ajv-formats/dist/formats").fullFormats.int32;
const formats14 = require("ajv-formats/dist/formats").fullFormats.int64;
const formats16 = require("ajv-formats/dist/formats").fullFormats.double;
async function validate13(
    data,
    { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
    /*# sourceURL="Sample" */ let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.lastName === undefined) {
            const err0 = {
                instancePath,
                schemaPath: "#/required",
                keyword: "required",
                params: { missingProperty: "lastName" },
            };
            if (vErrors === null) {
                vErrors = [err0];
            } else {
                vErrors.push(err0);
            }
            errors++;
        }
        if (data.name === undefined) {
            const err1 = {
                instancePath,
                schemaPath: "#/required",
                keyword: "required",
                params: { missingProperty: "name" },
            };
            if (vErrors === null) {
                vErrors = [err1];
            } else {
                vErrors.push(err1);
            }
            errors++;
        }
        for (const key0 in data) {
            if (
                !(
                    key0 === "name" ||
                    key0 === "lastName" ||
                    key0 === "anInt" ||
                    key0 === "aLong" ||
                    key0 === "aDecimal" ||
                    key0 === "nested" ||
                    key0 === "dummy"
                )
            ) {
                const err2 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: { additionalProperty: key0 },
                };
                if (vErrors === null) {
                    vErrors = [err2];
                } else {
                    vErrors.push(err2);
                }
                errors++;
            }
        }
        if (data.name !== undefined) {
            let data0 = data.name;
            if (typeof data0 === "string") {
                if (func4(data0) > 50) {
                    const err3 = {
                        instancePath: instancePath + "/name",
                        schemaPath: "#/properties/name/maxLength",
                        keyword: "maxLength",
                        params: { limit: 50 },
                    };
                    if (vErrors === null) {
                        vErrors = [err3];
                    } else {
                        vErrors.push(err3);
                    }
                    errors++;
                }
                if (func4(data0) < 1) {
                    const err4 = {
                        instancePath: instancePath + "/name",
                        schemaPath: "#/properties/name/minLength",
                        keyword: "minLength",
                        params: { limit: 1 },
                    };
                    if (vErrors === null) {
                        vErrors = [err4];
                    } else {
                        vErrors.push(err4);
                    }
                    errors++;
                }
            } else {
                const err5 = {
                    instancePath: instancePath + "/name",
                    schemaPath: "#/properties/name/type",
                    keyword: "type",
                    params: { type: "string" },
                };
                if (vErrors === null) {
                    vErrors = [err5];
                } else {
                    vErrors.push(err5);
                }
                errors++;
            }
        }
        if (data.lastName !== undefined) {
            let data1 = data.lastName;
            if (typeof data1 === "string") {
                if (func4(data1) > 50) {
                    const err6 = {
                        instancePath: instancePath + "/lastName",
                        schemaPath: "#/properties/lastName/maxLength",
                        keyword: "maxLength",
                        params: { limit: 50 },
                    };
                    if (vErrors === null) {
                        vErrors = [err6];
                    } else {
                        vErrors.push(err6);
                    }
                    errors++;
                }
            } else {
                const err7 = {
                    instancePath: instancePath + "/lastName",
                    schemaPath: "#/properties/lastName/type",
                    keyword: "type",
                    params: { type: "string" },
                };
                if (vErrors === null) {
                    vErrors = [err7];
                } else {
                    vErrors.push(err7);
                }
                errors++;
            }
        }
        if (data.anInt !== undefined) {
            let data2 = data.anInt;
            if (
                !(
                    typeof data2 == "number" &&
                    !(data2 % 1) &&
                    !isNaN(data2) &&
                    isFinite(data2)
                )
            ) {
                const err8 = {
                    instancePath: instancePath + "/anInt",
                    schemaPath: "#/properties/anInt/type",
                    keyword: "type",
                    params: { type: "integer" },
                };
                if (vErrors === null) {
                    vErrors = [err8];
                } else {
                    vErrors.push(err8);
                }
                errors++;
            }
            if (typeof data2 == "number" && isFinite(data2)) {
                if (data2 < -2147483648 || isNaN(data2)) {
                    const err9 = {
                        instancePath: instancePath + "/anInt",
                        schemaPath: "#/properties/anInt/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: -2147483648 },
                    };
                    if (vErrors === null) {
                        vErrors = [err9];
                    } else {
                        vErrors.push(err9);
                    }
                    errors++;
                }
                if (data2 >= 50 || isNaN(data2)) {
                    const err10 = {
                        instancePath: instancePath + "/anInt",
                        schemaPath: "#/properties/anInt/exclusiveMaximum",
                        keyword: "exclusiveMaximum",
                        params: { comparison: "<", limit: 50 },
                    };
                    if (vErrors === null) {
                        vErrors = [err10];
                    } else {
                        vErrors.push(err10);
                    }
                    errors++;
                }
                if (!formats12.validate(data2)) {
                    const err11 = {
                        instancePath: instancePath + "/anInt",
                        schemaPath: "#/properties/anInt/format",
                        keyword: "format",
                        params: { format: "int32" },
                    };
                    if (vErrors === null) {
                        vErrors = [err11];
                    } else {
                        vErrors.push(err11);
                    }
                    errors++;
                }
            }
        }
        if (data.aLong !== undefined) {
            let data3 = data.aLong;
            if (
                !(
                    typeof data3 == "number" &&
                    !(data3 % 1) &&
                    !isNaN(data3) &&
                    isFinite(data3)
                )
            ) {
                const err12 = {
                    instancePath: instancePath + "/aLong",
                    schemaPath: "#/properties/aLong/type",
                    keyword: "type",
                    params: { type: "integer" },
                };
                if (vErrors === null) {
                    vErrors = [err12];
                } else {
                    vErrors.push(err12);
                }
                errors++;
            }
            if (typeof data3 == "number" && isFinite(data3)) {
                if (data3 > 9223372036854776000 || isNaN(data3)) {
                    const err13 = {
                        instancePath: instancePath + "/aLong",
                        schemaPath: "#/properties/aLong/maximum",
                        keyword: "maximum",
                        params: {
                            comparison: "<=",
                            limit: 9223372036854776000,
                        },
                    };
                    if (vErrors === null) {
                        vErrors = [err13];
                    } else {
                        vErrors.push(err13);
                    }
                    errors++;
                }
                if (data3 <= 50 || isNaN(data3)) {
                    const err14 = {
                        instancePath: instancePath + "/aLong",
                        schemaPath: "#/properties/aLong/exclusiveMinimum",
                        keyword: "exclusiveMinimum",
                        params: { comparison: ">", limit: 50 },
                    };
                    if (vErrors === null) {
                        vErrors = [err14];
                    } else {
                        vErrors.push(err14);
                    }
                    errors++;
                }
                if (!formats14.validate(data3)) {
                    const err15 = {
                        instancePath: instancePath + "/aLong",
                        schemaPath: "#/properties/aLong/format",
                        keyword: "format",
                        params: { format: "int64" },
                    };
                    if (vErrors === null) {
                        vErrors = [err15];
                    } else {
                        vErrors.push(err15);
                    }
                    errors++;
                }
            }
        }
        if (data.aDecimal !== undefined) {
            let data4 = data.aDecimal;
            if (typeof data4 == "number" && isFinite(data4)) {
                if (data4 > 1.7976931348623157e308 || isNaN(data4)) {
                    const err16 = {
                        instancePath: instancePath + "/aDecimal",
                        schemaPath: "#/properties/aDecimal/maximum",
                        keyword: "maximum",
                        params: {
                            comparison: "<=",
                            limit: 1.7976931348623157e308,
                        },
                    };
                    if (vErrors === null) {
                        vErrors = [err16];
                    } else {
                        vErrors.push(err16);
                    }
                    errors++;
                }
                if (data4 < -1.7976931348623157e308 || isNaN(data4)) {
                    const err17 = {
                        instancePath: instancePath + "/aDecimal",
                        schemaPath: "#/properties/aDecimal/minimum",
                        keyword: "minimum",
                        params: {
                            comparison: ">=",
                            limit: -1.7976931348623157e308,
                        },
                    };
                    if (vErrors === null) {
                        vErrors = [err17];
                    } else {
                        vErrors.push(err17);
                    }
                    errors++;
                }
                if (!formats16.validate(data4)) {
                    const err18 = {
                        instancePath: instancePath + "/aDecimal",
                        schemaPath: "#/properties/aDecimal/format",
                        keyword: "format",
                        params: { format: "double" },
                    };
                    if (vErrors === null) {
                        vErrors = [err18];
                    } else {
                        vErrors.push(err18);
                    }
                    errors++;
                }
            } else {
                const err19 = {
                    instancePath: instancePath + "/aDecimal",
                    schemaPath: "#/properties/aDecimal/type",
                    keyword: "type",
                    params: { type: "number" },
                };
                if (vErrors === null) {
                    vErrors = [err19];
                } else {
                    vErrors.push(err19);
                }
                errors++;
            }
        }
        if (data.nested !== undefined) {
            let data5 = data.nested;
            if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
                for (const key1 in data5) {
                    if (!(key1 === "age")) {
                        const err20 = {
                            instancePath: instancePath + "/nested",
                            schemaPath: "Nested/additionalProperties",
                            keyword: "additionalProperties",
                            params: { additionalProperty: key1 },
                        };
                        if (vErrors === null) {
                            vErrors = [err20];
                        } else {
                            vErrors.push(err20);
                        }
                        errors++;
                    }
                }
                if (data5.age !== undefined) {
                    let data6 = data5.age;
                    if (typeof data6 !== "string" && data6 !== null) {
                        const err21 = {
                            instancePath: instancePath + "/nested/age",
                            schemaPath: "Nested/properties/age/type",
                            keyword: "type",
                            params: { type: schema14.properties.age.type },
                        };
                        if (vErrors === null) {
                            vErrors = [err21];
                        } else {
                            vErrors.push(err21);
                        }
                        errors++;
                    }
                    const res0 = await new Promise(() => false);
                    if (res0) {
                        const err22 = {
                            instancePath: instancePath + "/nested/age",
                            schemaPath: "Nested/properties/age/timeout",
                            keyword: "timeout",
                            params: {},
                        };
                        if (vErrors === null) {
                            vErrors = [err22];
                        } else {
                            vErrors.push(err22);
                        }
                        errors++;
                    }
                }
            } else {
                const err23 = {
                    instancePath: instancePath + "/nested",
                    schemaPath: "Nested/type",
                    keyword: "type",
                    params: { type: "object" },
                };
                if (vErrors === null) {
                    vErrors = [err23];
                } else {
                    vErrors.push(err23);
                }
                errors++;
            }
        }
        if (data.dummy !== undefined) {
            if (
                !validate10(data.dummy, {
                    instancePath: instancePath + "/dummy",
                    parentData: data,
                    parentDataProperty: "dummy",
                    rootData,
                })
            ) {
                vErrors =
                    vErrors === null
                        ? validate10.errors
                        : vErrors.concat(validate10.errors);
                errors = vErrors.length;
            }
        }
    } else {
        const err24 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: { type: "object" },
        };
        if (vErrors === null) {
            vErrors = [err24];
        } else {
            vErrors.push(err24);
        }
        errors++;
    }
    if (errors === 0) {
        return data;
    } else {
        throw new Error0(vErrors);
    }
}
