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
        console.log(`error : ------->${error}`);
        console.log("catch");
      }
    },
    updateMainCategoryById: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = await ProductMutationHandler.updateMainCategoryById(
          args.upatedname,
          args.productid,
          context
        );
        return res;
      } catch (error) {
        console.log(`err : ----------->${error}`);
      }
    },
    addProductCategory: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = await ProductMutationHandler.addProductCategory(
          args.maincategoryname,
          args.categoryname,
          context
        );
        console.log(res);
        return res;
      } catch (error) {
        console.log(`err : ----------->${error}`);
      }
    },
    updateProductCategoryById: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = await ProductMutationHandler.updateProductCategoryById(
          args.categoryid,
          args.updatedcategoryname,
          context
        );
        return res;
      } catch (error) {
        return error;
      }
    },
    addProductBrand: async (_: any, args: any, context: any) => {
      console.log("its args---->", args);
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = await ProductMutationHandler.addProductBrand(
          args.mainCategory,
          args.category,
          args.brandname,
          context
        );
        return res;
      } catch (error) {
        return error;
      }
    },
    updateProductBrandById: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        console.log(args);
        let res = await ProductMutationHandler.updateProductBrandById(
          args.brandid,
          args.updatedname,
          context
        );
        return res;
      } catch (error) {
        return error;
      }
    },

    addToWishlist: async (_: any, args: any, context: any, info: any) => {
      if (!context._id || args.userId !== context._id.toString()) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        return ProductMutationHandler.addToWishlist(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
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
    deleteMainCategoryById: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        console.log(args.productid);
        let res = await ProductQueryHandler.deleteMainCategoryById(
          args.productid,
          context
        );
        return res;
      } catch (error) {
        console.log(`err----------->${error}`);
      }
    },
    getMainCategoryByUserId: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = await ProductQueryHandler.getMainCategoryByUserId(context);
        return res;
      } catch (error) {
        return error;
      }
    },
    getAllProductCategories: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = await ProductQueryHandler.getAllProductCategories(context);
        return res;
      } catch (error) {
        return error;
      }
    },
    AllProductCategoriesCreatedByUser: async (
      _: any,
      args: any,
      context: any
    ) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = await ProductQueryHandler.AllProductCategoriesCreatedByUser(
          context
        );
        return res;
      } catch (error) {
        return error;
      }
    },
    getProductCategoryById: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = ProductQueryHandler.getProductCategoryById(args.categoryid);
        return res;
      } catch (error) {
        console.log(`err----------->${error}`);
      }
    },
    deleteProductCategoryById: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        console.log(args.productid);
        let res = await ProductQueryHandler.deleteProductCategoryById(
          args.categoryid,
          context
        );
        return res;
      } catch (error) {
        return error;
      }
    },
    getAllProductBrands: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = await ProductQueryHandler.getAllProductBrands(context);
        return res;
      } catch (error) {
        return error;
      }
    },
    getAllProductBrandsCreatedByUser: async (
      _: any,
      args: any,
      context: any
    ) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = await ProductQueryHandler.getAllProductBrandCreatedByUser(
          context
        );
        return res;
      } catch (error) {
        return error;
      }
    },
    deleteProductBrandById: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = await ProductQueryHandler.deleteProductBrandById(
          args.brandid,
          context
        );
        return res;
      } catch (error) {
        console.log(`err----------->${error}`);
      }
    },
    getProductBrandById: async (_: any, args: any, context: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }
      try {
        let res = ProductQueryHandler.getProductBrandById(args.brandid);
        return res;
      } catch (error) {
        console.log(`err----------->${error}`);
      }
    },

    getCategoryMenuList: async (_: any, args: any, context: any) => {
      try {
        let res = ProductQueryHandler.getCategoryMenuList();
        return res;
      } catch (error) {
        console.log(`error------->${error}`);
      }
    },
  },
};
