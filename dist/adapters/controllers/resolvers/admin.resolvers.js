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
// import Admin from "../../../domains/models/Admin";
const GqlAdminHandler_1 = require("../routes/GqlAdminHandler");
exports.default = {
    Mutation: {
        registerAdmin: (_, args) => {
            try {
                console.log("args :::::", args);
                return GqlAdminHandler_1.AdminMutationHandler.registerAdmin(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
        loginAdmin: (_, args) => {
            try {
                return GqlAdminHandler_1.AdminMutationHandler.loginAdmin(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
        changeadminPassword: (_, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                    success: false,
                };
            }
            try {
                console.log("its resolver");
                return GqlAdminHandler_1.AdminMutationHandler.changeadminPassword(args.adminId, args.oldPassword, args.newPassword);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        }),
        forgotPassword: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return GqlAdminHandler_1.AdminMutationHandler.forgotPassword(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        }),
        resetPassword: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return GqlAdminHandler_1.AdminMutationHandler.resetPassword(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        }),
    },
};
