import { AddressMutationHandler } from "../routes/GqlAddressHandler";

//Mongo DB
export default {
  Query: {},
  Mutation: {
    addAddress: (_: any, args: any, context: any, info: any) => {
      if (!context._id) {
        //For authrization
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return AddressMutationHandler.addAddress(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
  },
};
