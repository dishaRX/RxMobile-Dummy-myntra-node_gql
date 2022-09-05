import config from "./config";
import logger from "./logger";
import ExpressServer from "./expressServer";

const launchServer = async () => {

    try {
        var expressServer: any;
        expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
        expressServer.launch();
        logger.info('Express server running');
    } catch (error: any) {
        logger.error('Express Server failure', error.message);
    }
};

launchServer().catch((e) => logger.error(e));


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
