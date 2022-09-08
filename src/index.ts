import express, { Application, Request, Response, NextFunction } from "express";
// const app: Application = express();
import ExpressServer from "../src/adapters/controllers/generated/src/expressServer";
import config from "./adapters/controllers/generated/src/config";
import logger from "../src/adapters/controllers/generated/src/logger";
import { graphqlHTTP } from "express-graphql";
import gqlSchema from "./infrastructure/config/GraphQlSchema";
import { errorName, errorType } from "./adapters/gateways/errors/Constants";
import { error } from "console";

import Auth from "./infrastructure/config/auth";

const { ApolloServer } = require("apollo-server-express");

const gracefulShutdown = (server: any) => async () => {
  await server.close().then(async () => {
    console.log("Force shutdown");
  });
};

// const getErrorCode = (errorName: string) => {
//     return errorType[errorName]
//   }

const launchServer = async () => {
  const server = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
  try {
    // server.app.use(
    //   "/graphql",
    //   graphqlHTTP({
    //     schema: gqlSchema,
    //     graphiql: true, //for grapghql docs
    //     formatError: (err) => {
    //       console.log(`Error :: ${err}`);
    //       return err;
    //     },
    //   })
    // );

    const apoloServer = new ApolloServer({
      schema: gqlSchema,
      context: async (data: any) => {
        // console.log(`request keys ${Object.keys(data.req)}`);
        // console.log(`request keys ${data.req.headers.authorization}`);
        const user = await Auth(data.req.headers.authorization);
        return user;
      },
    });

    await apoloServer.start();

    apoloServer.applyMiddleware({ app: server.app, path: "/graphql" });

    server.app.listen(config.URL_PORT, () =>
      console.log(`UP & Running on port ${config.URL_PORT}`)
    );
  } catch (err: any) {
    ``;
    logger.error(`Express Server failure`, err);
    gracefulShutdown(server);
  }
};

launchServer()
  .then(() => {
    console.log("Set up successful");
  })
  .catch((e) => {
    logger.error(`Error launchServer :: ${e}`);
  });
