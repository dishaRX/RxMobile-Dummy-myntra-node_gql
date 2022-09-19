import {
  ProductMutationHandler,
  ProductQueryHandler,
} from "../routes/GqlProductHandler";

export default {
  Mutation: {
    addMainCategory: async (_: any, args: any, context: any, info: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let A = ProductMutationHandler.addMainCategory(
          args.MaincategoryName,
          context
        );

        return A;
      } catch (error) {
        console.log(`error------->${error}`);
        console.log("catch");
      }
    },
  },
  Query: {
    getAllMainCategory: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = ProductQueryHandler.getMainCategory();
        return res;
      } catch (error) {
        console.log(`error------->${error}`);
      }
    },
    getMainCategoryById: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = ProductQueryHandler.getMainCategoryById(args.productid);
        return res;
      } catch (error) {
        console.log(`err----------->${error}`);
      }
    },
  },
};
