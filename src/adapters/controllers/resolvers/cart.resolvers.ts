import {
  CartMutationHandler,
  CartQueryHandler,
} from "../routes/GqlCartHandler";

export default {
  Mutation: {
    addItemToCart: async (_: any, args: any, context: any, info: any) => {
      if (!context._id || args.userId !== context._id.toString()) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return CartMutationHandler.addItemToCart(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
  },

  Query: {
    getCartItemList: async (_: any, args: any, context: any, info: any) => {
      if (!context._id || args.userId !== context._id.toString()) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return CartQueryHandler.getCartItemList(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
  },
};
