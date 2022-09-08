"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GqlUserHandler_1 = require("../routes/GqlUserHandler");
//Mongo DB
exports.default = {
    Query: {
    // products: () => {
    //   return ProductHandler.getAllProducts();
    // },
    // productsByPrice: (_: any, args: any) => {
    //   return ProductHandler.getProductByPrice(args.min, args.max);
    // },
    },
    Mutation: {
        registerUser: (_, args) => {
            try {
                return GqlUserHandler_1.UserMutationHandler.registerUser(args.fullName, args.email, args.mobileNo, args.gender, args.dob, args.country, args.password);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
        loginUser: (_, args) => {
            try {
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
        changePassword: (parent, args, context, info) => {
            console.log(`Change Password context : ${context.id}`);
            console.log(`Change Password args: ${JSON.stringify(args)}`);
            try {
                throw new Error("Error ------");
            }
            catch (error) {
                return error;
            }
        },
    },
};
