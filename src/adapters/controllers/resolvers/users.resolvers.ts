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
  },
};
