const paths = {
    webajv: process.env["NODE_ENV"] === "development" ? "./web-ajv" : "web-ajv",
};

export default paths;
