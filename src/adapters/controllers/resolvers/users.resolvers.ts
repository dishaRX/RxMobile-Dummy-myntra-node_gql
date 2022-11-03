import Users from "../../../domains/models/Users";
import {
  UserQueryHandler,
  UserMutationHandler,
} from "../routes/GqlUserHandler";
var bcrypt = require("bcryptjs");

//Mongo DB
export default {
  Query: {},
  Mutation: {
    registerUser: (_: any, args: any) => {
      try {
        return UserMutationHandler.registerUser(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },

    loginUser: (_: any, args: any) => {
      try {
        return UserMutationHandler.loginUser(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },

    logoutUser: async (_: any, args: any, context: any, info: any) => {
  
      if (!context._id || args.userId !== context._id.toString()) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }

      try {
        return UserMutationHandler.logoutUser(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },

    changePassword: async (_: any, args: any, context: any, info: any) => {
      // console.log(`Change Password args: ${JSON.stringify(context)}`);
      if (!context._id || args.userId !== context._id.toString()) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return UserMutationHandler.changePassword(
          args.userId,
          args.oldPassword,
          args.newPassword
        );
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },

    forgotPassword: async (_: any, args: any) => {
      try {
        return UserMutationHandler.forgotPassword(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },

    resetPassword: async (_: any, args: any) => {
      try {
        return UserMutationHandler.resetPassword(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },

    updateUser: async (_: any, args: any, context: any, info: any) => {
      if (!context._id || args.userId !== context._id.toString()) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return UserMutationHandler.updateUser(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
  },
};
