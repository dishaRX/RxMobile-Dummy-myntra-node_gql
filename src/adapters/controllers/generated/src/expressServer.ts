import fs from "fs";
import path from "path";
import swaggerUI from "swagger-ui-express";
import jsYaml from "js-yaml";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import * as OpenApiValidator from 'express-openapi-validator';
import logger from "./logger";
import config from "./config";
import express, { Application, Request, Response, NextFunction } from 'express';
import bearerToken from 'express-bearer-token';

class ExpressServer {
    schema: any;
    openApiPath: any;
    port: any;
    app: Application;
    server: any;
    constructor(port: any, openApiYaml: any) {
        this.port = port;
        this.openApiPath = openApiYaml;
        this.app = express();
        try {
            this.schema = jsYaml.load(fs.readFileSync(openApiYaml, 'utf8'));
        } catch (e) {
            logger.error('failed to start Express Server', e);
        }
        this.setupMiddleware();
    }


    setupMiddleware() {

        this.app.use(cors());
        this.app.use(bodyParser.json({ limit: '14MB' }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use((req, res, next) => {
            bearerToken()(req, res, next);
            req.headers.authorization = req.token;
        });
        this.app.use((req, res, next) => {
            const start = Date.now();
            try {
                console.log(`--> ${req.method} ${req.path}`);
                next();
            } catch (e) {
                console.log(e);
            } finally {
                const delta = Date.now() - start;
                console.log(`<-- ${req.method} ${req.path} ${res.statusCode} ${delta}ms`);
            }
        });
        this.launch();
        //this.app.get('/hello', (req, res) => res.send(`Hello World. path: ${this.openApiPath}`));
        //Send the openapi document *AS GENERATED BY THE GENERATOR*
        this.app.get('/openapi', (req, res) => res.sendFile(path.join(__dirname, 'api', 'openapi.yaml')));
        //View the openapi document in a visual interface. Should be able to test from this page
        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(this.schema));
        

    }


    launch() {
        console.log("LAUNCHED in EXPRESS SERVER")
        OpenApiValidator.middleware({
            apiSpec: this.openApiPath,
            validateRequests: true,
            validateResponses: true,
            operationHandlers: path.join(__dirname),
            fileUploader: { dest: config.FILE_UPLOAD_PATH },
        });


        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            // format error
            res.status(err.status || 500).json({
                message: err.message,
                errors: err.errors,
            });
        });

    }

    async close() {
        if (this.server !== undefined) {
            await this.server.close();
            console.log(`Server on port ${this.port} shut down`);
        }
    }

}

export = ExpressServer;
