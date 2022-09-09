"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
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
config.OPENAPI_YAML = path_1.default.join(config.ROOT_DIR, "api", "openapi.yaml");
config.FULL_PATH = `${config.URL_PATH}:${config.URL_PORT}/${config.BASE_VERSION}`;
config.FILE_UPLOAD_PATH = path_1.default.join(config.PROJECT_DIR, "uploaded_files");
//module.exports = config;
exports.default = config;
