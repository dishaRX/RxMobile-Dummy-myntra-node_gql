import { ProductMutationHandler } from "../routes/GqlProductHandler";

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
};
