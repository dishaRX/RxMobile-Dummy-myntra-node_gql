"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const logger_1 = __importDefault(require("./logger"));
const expressServer_1 = __importDefault(require("./expressServer"));
const launchServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var expressServer;
        expressServer = new expressServer_1.default(config_1.default.URL_PORT, config_1.default.OPENAPI_YAML);
        expressServer.launch();
        logger_1.default.info('Express server running');
    }
    catch (error) {
        logger_1.default.error('Express Server failure', error.message);
    }
});
launchServer().catch((e) => logger_1.default.error(e));
//.............................................Testing Swagger.............................................
// import jsYaml from "js-yaml";
// import fs from "fs";
// import config from "./config";
// import express, { Application, Request, Response, NextFunction } from 'express';
// const swaggerUI = require('swagger-ui-express')
// const swaggerJDocs = jsYaml.load(fs.readFileSync(config.OPENAPI_YAML, 'utf8'));
// const app = express()
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJDocs))
// app.get("/test", (req: Request, res: Response) => {
//     res.status(200).send("Call Successful.......");
// });
// app.listen(4001, () => console.log("UP & Running"))
