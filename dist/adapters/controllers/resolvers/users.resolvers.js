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
        changePassword: (_, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
            // console.log(`Change Password args: ${JSON.stringify(context)}`);
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                return GqlUserHandler_1.UserMutationHandler.changePassword(args.userId, args.oldPassword, args.newPassword);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        }),
        forgotPassword: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return GqlUserHandler_1.UserMutationHandler.forgotPassword(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        }),
        resetPassword: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return GqlUserHandler_1.UserMutationHandler.resetPassword(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        }),
    },
};
