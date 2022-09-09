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
        return UserMutationHandler.registerUser(
          args.fullName,
          args.email,
          args.mobileNo,
          args.gender,
          args.dob,
          args.country,
          args.password
        );
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },

    loginUser: (_: any, args: any) => {
      try {
        return UserMutationHandler.loginUser(args.email, args.password);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },

    changePassword: async (_: any, args: any, context: any, info: any) => {
      // console.log(`Change Password args: ${JSON.stringify(context)}`);
      if (!context) {
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
  },
};
