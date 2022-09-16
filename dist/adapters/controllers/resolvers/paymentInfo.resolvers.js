"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GqlPaymentInfoHandler_1 = require("../routes/GqlPaymentInfoHandler");
//Mongo DB
exports.default = {
    Query: {},
    Mutation: {
        addPaymentInfo: (_, args, context, info) => {
            if (!context._id || args.userId !== context._id.toString()) {
                //For authrization
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                return GqlPaymentInfoHandler_1.PaymentInfoMutationHandler.addPaymentInfo(args);
            }
            catch (error) {
                console.log(`Error -------> ${error}`);
                return error;
            }
        },
    },
};
