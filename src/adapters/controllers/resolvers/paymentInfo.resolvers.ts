import {
  PaymentInfoMutationHandler,
  PaymentInfoQueryHandler,
} from "../routes/GqlPaymentInfoHandler";

//Mongo DB
export default {
  Query: {},
  Mutation: {
    addPaymentInfo: (_: any, args: any, context: any, info: any) => {
      if (!context._id || args.userId !== context._id.toString()) {
        //For authrization
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return PaymentInfoMutationHandler.addPaymentInfo(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
  },
};
