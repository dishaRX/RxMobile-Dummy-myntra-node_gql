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
exports.ProductQueryHandler = exports.ProductMutationHandler = void 0;
const AddMainCategory_1 = require("../../../usecases/cases/product/AddMainCategory");
const AddProductBrandCase_1 = require("../../../usecases/cases/product/AddProductBrandCase");
const AddProductCategoryCase_1 = require("../../../usecases/cases/product/AddProductCategoryCase");
const AllProductCategoriesCreatedByUserCase_1 = require("../../../usecases/cases/product/AllProductCategoriesCreatedByUserCase");
const AllProductCategoryCase_1 = require("../../../usecases/cases/product/AllProductCategoryCase");
const DeleteMainCategoryById_1 = require("../../../usecases/cases/product/DeleteMainCategoryById");
const DeleteProductBrandByIdCase_1 = require("../../../usecases/cases/product/DeleteProductBrandByIdCase");
const DeleteProductCategoryByIdCase_1 = require("../../../usecases/cases/product/DeleteProductCategoryByIdCase");
const GetAllMainCategory_1 = require("../../../usecases/cases/product/GetAllMainCategory");
const GetAllProductBrandsCase_1 = require("../../../usecases/cases/product/GetAllProductBrandsCase");
const GetAllProductBrandsCreatedByUserCase_1 = require("../../../usecases/cases/product/GetAllProductBrandsCreatedByUserCase");
const GetMainCategoryById_1 = require("../../../usecases/cases/product/GetMainCategoryById");
const GetMainCategoryByUserIdCase_1 = require("../../../usecases/cases/product/GetMainCategoryByUserIdCase");
const GetProductBrandByIdCase_1 = require("../../../usecases/cases/product/GetProductBrandByIdCase");
const GetProductCategoryByIdCase_1 = require("../../../usecases/cases/product/GetProductCategoryByIdCase");
const UpdateMainCategoryById_1 = require("../../../usecases/cases/product/UpdateMainCategoryById");
const UpdateProductBrandByIdCase_1 = require("../../../usecases/cases/product/UpdateProductBrandByIdCase");
const UpdateProductCategoryByIdCase_1 = require("../../../usecases/cases/product/UpdateProductCategoryByIdCase");
const ProductDataRepositoryImpl_1 = require("../../gateways/repositories_impl/ProductDataRepositoryImpl");
class ProductMutationHandler {
}
exports.ProductMutationHandler = ProductMutationHandler;
_a = ProductMutationHandler;
//Products
ProductMutationHandler.addMainCategory = (MainCategoryName, Createdby) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new AddMainCategory_1.AddMainCategoryCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).addMainCategory(MainCategoryName, Createdby);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductMutationHandler.updateMainCategoryById = (productid, MainCategory, createdBY) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new UpdateMainCategoryById_1.UpdateMainCategoryByIdCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).deleteMainCategoryById(productid, MainCategory, createdBY);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductMutationHandler.addProductCategory = (maincategoryname, categoryname, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new AddProductCategoryCase_1.AddProductCategoryCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).addProductCategory(maincategoryname, categoryname, user);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductMutationHandler.updateProductCategoryById = (productid, Category, createdBY) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new UpdateProductCategoryByIdCase_1.UpdateProductCategoryByIdCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).updateProductCategoryById(productid, Category, createdBY);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductMutationHandler.addProductBrand = (maincategory, category, brandname, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new AddProductBrandCase_1.AddProductBrandCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).addProductBrand(maincategory, category, brandname, user);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductMutationHandler.updateProductBrandById = (productid, Category, createdBY) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(productid);
        const res = yield new UpdateProductBrandByIdCase_1.UpdateProductBrandByIdCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).updateProductBrandById(productid, Category, createdBY);
        return res;
    }
    catch (error) {
        return error;
    }
});
class ProductQueryHandler {
}
exports.ProductQueryHandler = ProductQueryHandler;
_b = ProductQueryHandler;
ProductQueryHandler.getMainCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetAllMainCategory_1.GetAllMainCategoryCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).GetAllMainCategory();
        return res;
    }
    catch (err) {
        return err;
    }
});
ProductQueryHandler.getMainCategoryById = (productid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetMainCategoryById_1.GetMainCategoryByIdCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).getMainCategoryById(productid);
        console.log(res);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductQueryHandler.deleteMainCategoryById = (MainCategory, createdBY) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new DeleteMainCategoryById_1.DeleteMainCategoryByIdCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).deleteMainCategoryById(MainCategory, createdBY);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductQueryHandler.getMainCategoryByUserId = (createdBY) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetMainCategoryByUserIdCase_1.GetMainCategoryByUserIdCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).getMainCategoryByUserId(createdBY);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductQueryHandler.getAllProductCategories = (createdBY) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new AllProductCategoryCase_1.AllProductCategoryCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).getAllProductCategories(createdBY);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductQueryHandler.AllProductCategoriesCreatedByUser = (createdBY) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new AllProductCategoriesCreatedByUserCase_1.AllProductCategoriesCreatedByUserCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).AllProductCategoriesCreatedByUser(createdBY);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductQueryHandler.getProductCategoryById = (productid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetProductCategoryByIdCase_1.GetProductCategoryByIdCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).getProductCategoryById(productid);
        console.log(res);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductQueryHandler.deleteProductCategoryById = (Category, createdBY) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new DeleteProductCategoryByIdCase_1.DeleteProductCategoryByIdCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).deleteProductCategoryById(Category, createdBY);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductQueryHandler.getAllProductBrands = (createdBY) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetAllProductBrandsCase_1.GetAllProductBrandsCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).getAllProductBrands(createdBY);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductQueryHandler.getAllProductBrandCreatedByUser = (createdBy) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetAllProductBrandsCreatedByUserCase_1.GetAllProductBrandsCreatedByUserCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).getAllProductBrandCreatedByUser(createdBy);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductQueryHandler.deleteProductBrandById = (Category, createdBY) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new DeleteProductBrandByIdCase_1.DeleteProductBrandByIdCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).deleteProductBrandById(Category, createdBY);
        return res;
    }
    catch (error) {
        return error;
    }
});
ProductQueryHandler.getProductBrandById = (productid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetProductBrandByIdCase_1.GetProductBrandByIdCase(new ProductDataRepositoryImpl_1.ProductDataRepositoryImpl()).getProductBrandById(productid);
        console.log(res);
        return res;
    }
    catch (error) {
        return error;
    }
});
