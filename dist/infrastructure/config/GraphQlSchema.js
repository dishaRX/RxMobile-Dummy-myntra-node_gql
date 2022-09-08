"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
const load_files_1 = require("@graphql-tools/load-files");
const schema_1 = require("@graphql-tools/schema");
const typesArray = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, '../../domains/graphql/**/*.graphql'));
const resolversArray = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, '../../adapters/controllers/resolvers/**/*.resolvers.ts'));
const gqlSchema = (0, schema_1.makeExecutableSchema)({
    typeDefs: typesArray,
    resolvers: resolversArray
});
module.exports = gqlSchema;
