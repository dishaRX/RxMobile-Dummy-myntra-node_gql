import {
  UserQueryHandler,
  UserMutationHandler,
} from "../routes/GqlUserHandler";

//Mongo DB
export default {
  Query: {
    // products: () => {
    //   return ProductHandler.getAllProducts();
    // },
    // productsByPrice: (_: any, args: any) => {
    //   return ProductHandler.getProductByPrice(args.min, args.max);
    // },
  },
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
        // throw new Error(`User registration failed`);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },

    // changePassword: (parent: any, args: any, context: any, info: any) => {
    //   console.log(`Change Password context : ${context._id}`);
    //   console.log(`Change Password args: ${JSON.stringify(context)}`);

    //   try {
    //     throw new Error("Error ------");
    //   } catch (error) {
    //     return error;
    //   }
    // },
  },
};
