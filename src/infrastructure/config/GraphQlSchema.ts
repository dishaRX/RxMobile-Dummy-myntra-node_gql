import path from "path";
import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typesArray = loadFilesSync(path.join(__dirname, '../../domains/graphql/**/*.graphql'))
const resolversArray = loadFilesSync(path.join(__dirname, '../../adapters/controllers/resolvers/**/*.resolvers.ts'))

const gqlSchema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
});

export = gqlSchema;