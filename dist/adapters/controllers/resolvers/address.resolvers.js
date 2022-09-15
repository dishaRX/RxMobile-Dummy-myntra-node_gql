"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GqlAddressHandler_1 = require("../routes/GqlAddressHandler");
//Mongo DB
exports.default = {
    Query: {
        getAddressList: (_, args, context, info) => {
            console.log("getAddressList con : ", context._id);
            console.log("getAddressList args : ", args.userId);
            if (!context._id || args.userId !== context._id) {
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
    },
    Mutation: {
        addAddress: (_, args, context, info) => {
            if (!context._id || args.userId !== context._id) {
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
    },
};
