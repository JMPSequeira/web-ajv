const isDev = process.env["NODE_ENV"] === "development";
const paths = {
    webajv: isDev ? "./web-ajv" : "web-ajv",
};

export default paths;
