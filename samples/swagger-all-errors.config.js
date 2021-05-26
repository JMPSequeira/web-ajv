/**
 * @typedef { import("../src/types").Options } Options
 */

/**
 * @type {Options}
 */
const options = {
    schemas: {
        source: "https://petstore.swagger.io/v2/swagger.json",
        type: "openapi",
    },
    validatorPrefix: "OpenApi2",
    ajvOptions: {
        messages: false,
        allErrors: true,
    },
    outFile: "/samples/gen/swagger-all-errors.ts",
};

module.exports = options;
