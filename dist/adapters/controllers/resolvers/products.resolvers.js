"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GqlProductHandler_1 = require("../routes/GqlProductHandler");
//Mongo DB
exports.default = {
    Query: {
        products: () => {
            return GqlProductHandler_1.ProductHandler.getAllProducts();
        },
        productsByPrice: (_, args) => {
            return GqlProductHandler_1.ProductHandler.getProductByPrice(args.min, args.max);
        },
        product: (_, args) => {
            return GqlProductHandler_1.ProductHandler.getProductById(args.id);
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return GqlProductHandler_1.ProductMutationHandler.addNewProduct(args.id, args.description, args.price);
        },
        addNewProductReview: (_, args) => {
            return GqlProductHandler_1.ProductMutationHandler.addNewProductReview(args.id, args.rating, args.comment);
        }
    }
};
