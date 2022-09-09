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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMutationHandler = exports.ProductHandler = void 0;
const GetAllProducts_1 = require("../../../usecases/cases/product/GetAllProducts");
const AddNewProduct_1 = require("../../../usecases/cases/product/AddNewProduct");
const GetProductById_1 = require("../../../usecases/cases/product/GetProductById");
const GetProductByPrice_1 = require("../../../usecases/cases/product/GetProductByPrice");
const AddNewProductReview_1 = require("../../../usecases/cases/product/AddNewProductReview");
const ProductDataRepositoryImpl_1 = require("../../gateways/repositories_impl/ProductDataRepositoryImpl");
class ProductHandler {
}
exports.ProductHandler = ProductHandler;
_a = ProductHandler;
//Products
ProductHandler.getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetAllProducts_1.GetAllProductsCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).getAllProducts();
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductHandler.getProductByPrice = (min, max) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetProductByPrice_1.GetProductByPriceCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).getProductByPrice(min, max);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductHandler.getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetProductById_1.GetProductByIdCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).getProductById(id);
        return res;
    }
    catch (error) {
        return error;
    }
});
class ProductMutationHandler {
}
exports.ProductMutationHandler = ProductMutationHandler;
_b = ProductMutationHandler;
//Products
ProductMutationHandler.addNewProduct = (id, description, price) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new AddNewProduct_1.AddNewProductCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).addNewProduct(id, description, price);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductMutationHandler.addNewProductReview = (id, rating, comment) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new AddNewProductReview_1.AddNewProductReviewCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).addNewProductReview(id, rating, comment);
        return res;
    }
    catch (error) {
        return error;
    }
});
