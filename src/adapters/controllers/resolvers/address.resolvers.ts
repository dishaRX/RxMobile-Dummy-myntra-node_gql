import {
  AddressMutationHandler,
  AddressQueryHandler,
} from "../routes/GqlAddressHandler";

//Mongo DB
export default {
  Query: {
    getAddressList: (_: any, args: any, context: any, info: any) => {
      if (!context._id || args.userId !== context._id.toString()) {
        //For authrization
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return AddressQueryHandler.getAddressList(args);
      } catch (error) {
        console.log(`Error : -------> ${error}`);
        return error;
      }
    },

    deleteAddress: (_: any, args: any, context: any, info: any) => {
      if (!context._id || args.userId !== context._id.toString()) {
        //For authrization
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return AddressQueryHandler.deleteAddress(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
  },
  Mutation: {
    addAddress: (_: any, args: any, context: any, info: any) => {
      if (!context._id || args.userId !== context._id.toString()) {
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

    editAddress: (_: any, args: any, context: any, info: any) => {
      if (!context._id || args.userId !== context._id.toString()) {
        //For authrization
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return AddressMutationHandler.editAddress(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
  },
};
