"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GqlUserHandler_1 = require("../routes/GqlUserHandler");
var bcrypt = require("bcryptjs");
//Mongo DB
exports.default = {
    Query: {},
    Mutation: {
        addAddress: (_, args, context) => {
            if (!context._id) {
                //For authrization
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                return GqlUserHandler_1.UserMutationHandler.registerUser(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
    },
};
