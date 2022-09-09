"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GqlUserHandler_1 = require("../routes/GqlUserHandler");
var bcrypt = require("bcryptjs");
//Mongo DB
exports.default = {
    Query: {},
    Mutation: {
        registerUser: (_, args) => {
            try {
                return GqlUserHandler_1.UserMutationHandler.registerUser(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
        loginUser: (_, args) => {
            try {
                return GqlUserHandler_1.UserMutationHandler.loginUser(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
    },
};
