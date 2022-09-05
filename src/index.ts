import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
import ExpressServer from "../src/adapters/controllers/generated/src/expressServer";
import config from './adapters/controllers/generated/src/config';
import logger from '../src/adapters/controllers/generated/src/logger';
import { graphqlHTTP } from 'express-graphql';
import gqlSchema from './infrastructure/config/GraphQlSchema';


const gracefulShutdown = (server: any) => async () => {
    await server.close().then(async () => {
        console.log("Force shutdown")
    });
};

const launchServer = async () => {
    const server = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML)
    try {
        server.app.use('/graphql', graphqlHTTP({
            schema: gqlSchema,
            graphiql: true, //for grapghql docs
            // formatError: (err) => {
            //     console.log(`Error :: ${err}`)
            //     return err
            // }
        }));

        server.app.listen(config.URL_PORT, () => console.log(`UP & Running on port ${config.URL_PORT}`))

    } catch (err: any) {
        logger.error(`Express Server failure`, err);
        gracefulShutdown(server);

    }
}

launchServer()
    .then(() => {
        console.log("Set up successful")
    })
    .catch((e) => {
        logger.error(`Error launchServer :: ${e}`);
    });


