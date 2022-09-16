"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GqlAddressHandler_1 = require("../routes/GqlAddressHandler");
//Mongo DB
exports.default = {
    Query: {
        getAddressList: (_, args, context, info) => {
            if (!context._id || args.userId !== context._id.toString()) {
                //For authrization
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                return GqlAddressHandler_1.AddressQueryHandler.getAddressList(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
        deleteAddress: (_, args, context, info) => {
            if (!context._id || args.userId !== context._id.toString()) {
                //For authrization
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                return GqlAddressHandler_1.AddressQueryHandler.deleteAddress(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
    },
    Mutation: {
        addAddress: (_, args, context, info) => {
            if (!context._id || args.userId !== context._id.toString()) {
                //For authrization
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                return GqlAddressHandler_1.AddressMutationHandler.addAddress(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
        editAddress: (_, args, context, info) => {
            if (!context._id || args.userId !== context._id.toString()) {
                //For authrization
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                return GqlAddressHandler_1.AddressMutationHandler.editAddress(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
    },
};
