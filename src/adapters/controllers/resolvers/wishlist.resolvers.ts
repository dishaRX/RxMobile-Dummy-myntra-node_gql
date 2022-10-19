import {
  WishlistMutationHandler,
  WishlistQueryHandler,
} from "../routes/GqlWishlistHandler";

export default {
  Mutation: {
    addToWishlist: async (_: any, args: any, context: any, info: any) => {
      if (!context._id || args.userId !== context._id.toString()) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return WishlistMutationHandler.addToWishlist(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },

    removeItemFromWishlist: async (
      _: any,
      args: any,
      context: any,
      info: any
    ) => {
      if (!context._id || args.userId !== context._id.toString()) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return WishlistMutationHandler.removeItemFromWishlist(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
  },
  Query: {
    getWishlistItemList: async (_: any, args: any, context: any, info: any) => {
      if (!context._id || args.userId !== context._id.toString()) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return WishlistQueryHandler.getWishlistItemList(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
  },
};
