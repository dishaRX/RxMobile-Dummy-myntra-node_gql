"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const GqlProductHandler_1 = require("../routes/GqlProductHandler");
exports.default = {
    Mutation: {
        addMainCategory: (_, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let A = GqlProductHandler_1.ProductMutationHandler.addMainCategory(args.MaincategoryName, context);
                return A;
            }
            catch (error) {
                console.log(`error------->${error}`);
                console.log("catch");
            }
        }),
        updateMainCategoryById: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = yield GqlProductHandler_1.ProductMutationHandler.updateMainCategoryById(args.upatedname, args.productid, context);
                return res;
            }
            catch (error) {
                console.log(`err----------->${error}`);
            }
        }),
        addProductCategory: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = yield GqlProductHandler_1.ProductMutationHandler.addProductCategory(args.maincategoryname, args.categoryname, context);
                console.log(res);
                return res;
            }
            catch (error) {
                console.log(`err----------->${error}`);
            }
        }),
        updateProductCategoryById: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = yield GqlProductHandler_1.ProductMutationHandler.updateProductCategoryById(args.categoryid, args.updatedcategoryname, context);
                return res;
            }
            catch (error) {
                return error;
            }
        }),
        addProductBrand: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("its args---->", args);
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = yield GqlProductHandler_1.ProductMutationHandler.addProductBrand(args.mainCategory, args.category, args.brandname, context);
                return res;
            }
            catch (error) {
                return error;
            }
        }),
        updateProductBrandById: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                console.log(args);
                let res = yield GqlProductHandler_1.ProductMutationHandler.updateProductBrandById(args.brandid, args.updatedname, context);
                return res;
            }
            catch (error) {
                return error;
            }
        }),
    },
    Query: {
        getAllMainCategory: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = GqlProductHandler_1.ProductQueryHandler.getMainCategory();
                return res;
            }
            catch (error) {
                console.log(`error------->${error}`);
            }
        }),
        getMainCategoryById: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = GqlProductHandler_1.ProductQueryHandler.getMainCategoryById(args.productid);
                return res;
            }
            catch (error) {
                console.log(`err----------->${error}`);
            }
        }),
        deleteMainCategoryById: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                console.log(args.productid);
                let res = yield GqlProductHandler_1.ProductQueryHandler.deleteMainCategoryById(args.productid, context);
                return res;
            }
            catch (error) {
                console.log(`err----------->${error}`);
            }
        }),
        getMainCategoryByUserId: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = yield GqlProductHandler_1.ProductQueryHandler.getMainCategoryByUserId(context);
                return res;
            }
            catch (error) {
                return error;
            }
        }),
        getAllProductCategories: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = yield GqlProductHandler_1.ProductQueryHandler.getAllProductCategories(context);
                return res;
            }
            catch (error) {
                return error;
            }
        }),
        AllProductCategoriesCreatedByUser: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = yield GqlProductHandler_1.ProductQueryHandler.AllProductCategoriesCreatedByUser(context);
                return res;
            }
            catch (error) {
                return error;
            }
        }),
        getProductCategoryById: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = GqlProductHandler_1.ProductQueryHandler.getProductCategoryById(args.categoryid);
                return res;
            }
            catch (error) {
                console.log(`err----------->${error}`);
            }
        }),
        deleteProductCategoryById: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                console.log(args.productid);
                let res = yield GqlProductHandler_1.ProductQueryHandler.deleteProductCategoryById(args.categoryid, context);
                return res;
            }
            catch (error) {
                return error;
            }
        }),
        getAllProductBrands: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = yield GqlProductHandler_1.ProductQueryHandler.getAllProductBrands(context);
                return res;
            }
            catch (error) {
                return error;
            }
        }),
        getAllProductBrandsCreatedByUser: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = yield GqlProductHandler_1.ProductQueryHandler.getAllProductBrandCreatedByUser(context);
                return res;
            }
            catch (error) {
                return error;
            }
        }),
        deleteProductBrandById: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = yield GqlProductHandler_1.ProductQueryHandler.deleteProductBrandById(args.brandid, context);
                return res;
            }
            catch (error) {
                console.log(`err----------->${error}`);
            }
        }),
        getProductBrandById: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context._id) {
                return {
                    message: "Unauthorized",
                    statusCode: 401,
                };
            }
            try {
                let res = GqlProductHandler_1.ProductQueryHandler.getProductBrandById(args.brandid);
                return res;
            }
            catch (error) {
                console.log(`err----------->${error}`);
            }
        }),
    },
};
