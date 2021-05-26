/**
 * @typedef { import("../src/types").Options } Options
 */

/**
 * @type {Options}
 */
const options = {
    schemas: {
        source: "./samples/schemas/top.json",
        type: "jsonschema",
    },
    validatorPrefix: "JSONSchema",
    ajvOptions: {
        messages: false,
        allErrors: false,
    },
    formats: true,
    outFile: "/samples/gen/json-schema.ts",
};

module.exports = options;
