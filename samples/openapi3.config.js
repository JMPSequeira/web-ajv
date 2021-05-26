// eslint-disable-next-line @typescript-eslint/no-var-requires
const { _ } = require("ajv");
/**
 * @typedef { import("../src/types").Options } Options
 */

/**
 * @type {Options}
 */
const options = {
    schemas: {
        source: "http://localhost:5000/swagger/v1/swagger.json",
        type: "openapi",
    },
    validatorPrefix: "OpenApi3",
    ajvOptions: {
        messages: false,
        allErrors: false,
        keywords: [
            {
                async: true,
                code: (ctx) => {
                    const res = ctx.gen.const(
                        "res",
                        _`await new Promise(()=> false)`
                    );
                    ctx.fail(_`${res}`);
                },
                keyword: "timeout",
            },
        ],
    },
    outFile: "/samples/gen/openapi3.ts",
};

module.exports = options;
