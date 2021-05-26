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
        allErrors: true,
    },
    formats: true,
    outFile: "/samples/gen/json-schema-all-errors.ts",
};

module.exports = options;
