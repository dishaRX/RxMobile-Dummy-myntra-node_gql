import path from "path";

const config = {
  ROOT_DIR: __dirname,
  URL_PORT: 4001,
  URL_PATH: "http://localhost",
  BASE_VERSION: "",
  PROJECT_DIR: __dirname,
  OPENAPI_YAML: "",
  FULL_PATH: "",
  FILE_UPLOAD_PATH: "",
};
config.OPENAPI_YAML = path.join(config.ROOT_DIR, "api", "openapi.yaml");
config.FULL_PATH = `${config.URL_PATH}:${config.URL_PORT}/${config.BASE_VERSION}`;
config.FILE_UPLOAD_PATH = path.join(config.PROJECT_DIR, "uploaded_files");

//module.exports = config;
export default config;
