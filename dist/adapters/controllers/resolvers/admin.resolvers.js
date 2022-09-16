"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Admin from "../../../domains/models/Admin";
const GqlAdminHandler_1 = require("../routes/GqlAdminHandler");
// var bcrypt = require("bcryptjs");
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
    },
};
