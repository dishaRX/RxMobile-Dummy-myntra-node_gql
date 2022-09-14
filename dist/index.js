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
// const app: Application = express();
const expressServer_1 = __importDefault(require("../src/adapters/controllers/generated/src/expressServer"));
const config_1 = __importDefault(require("./adapters/controllers/generated/src/config"));
const logger_1 = __importDefault(require("../src/adapters/controllers/generated/src/logger"));
const GraphQlSchema_1 = __importDefault(require("./infrastructure/config/GraphQlSchema"));
const auth_1 = __importDefault(require("./infrastructure/config/auth"));
const { ApolloServer } = require("apollo-server-express");
const Email_1 = __importDefault(require("./infrastructure/config/Email"));
const gracefulShutdown = (server) => () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.close().then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Force shutdown");
    }));
});
// const getErrorCode = (errorName: string) => {
//     return errorType[errorName]
//   }
const launchServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, Email_1.default)("2324", "42234");
    }
    catch (error) {
        console.error("send mail error", error);
    }
    const server = new expressServer_1.default(config_1.default.URL_PORT, config_1.default.OPENAPI_YAML);
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
            schema: GraphQlSchema_1.default,
            context: (data) => __awaiter(void 0, void 0, void 0, function* () {
                const user = yield (0, auth_1.default)(data.req.headers.authorization);
                return user;
            }),
        });
        yield apoloServer.start();
        apoloServer.applyMiddleware({ app: server.app, path: "/react-myntra" });
        server.app.listen(config_1.default.URL_PORT, () => console.log(`UP & Running on port ${config_1.default.URL_PORT}`));
    }
    catch (err) {
        ``;
        logger_1.default.error(`Express Server failure`, err);
        gracefulShutdown(server);
    }
});
launchServer()
    .then(() => {
    console.log("Set up successful");
})
    .catch((e) => {
    logger_1.default.error(`Error launchServer :: ${e}`);
});
