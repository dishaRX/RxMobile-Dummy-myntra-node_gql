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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDataRepositoryImpl = void 0;
const MainCategory_1 = __importDefault(require("../../../domains/models/MainCategory"));
const Category_1 = __importDefault(require("../../../domains/models/Category"));
const Brands_1 = __importDefault(require("../../../domains/models/Brands"));
const Admin_1 = __importDefault(require("../../../domains/models/Admin"));
class ProductDataRepositoryImpl {
    addMainCategory(MainCategoryName, Createdby) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!MainCategoryName) {
                return {
                    message: "main category can not be null",
                    statusCode: 201,
                };
            }
            try {
                const data = yield MainCategory_1.default.create({
                    mainCategory: MainCategoryName,
                    createdBY: Createdby,
                });
                return {
                    message: "Success",
                    statusCode: 201,
                    data: data,
                };
            }
            catch (error) {
                return {
                    message: "not found",
                    statusCode: 404,
                    data: error,
                };
            }
        });
    }
    getAllMainCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield MainCategory_1.default.find();
                return {
                    message: "success true",
                    statusCode: 201,
                    data: data,
                };
            }
            catch (error) {
                return {
                    message: "not found",
                    statusCode: 404,
                    data: error,
                };
            }
        });
    }
    getMainCategoryById(args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args) {
                return {
                    message: "main category id can not be null",
                    statusCode: 201,
                };
            }
            try {
                const data = yield MainCategory_1.default.findOne({ _id: args });
                console.log(data);
                return {
                    message: "success true",
                    statusCode: 201,
                    data: data,
                };
            }
            catch (error) {
                return {
                    message: "Not found",
                    statusCode: 404,
                    data: error,
                };
            }
        });
    }
    deleteMainCategoryById(args, createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args) {
                return {
                    message: "main category id can not be null",
                    statusCode: 201,
                };
            }
            try {
                const deletedItem = yield MainCategory_1.default.findOneAndDelete({
                    _id: args,
                    createdBY: createdBy._id,
                });
                return {
                    message: "success true",
                    statusCode: 201,
                    data: deletedItem,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 501,
                    data: error,
                };
            }
        });
    }
    updateMainCategoryById(updatedata, productid, createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!productid) {
                return {
                    message: "main category id can not be null",
                    statusCode: 201,
                };
            }
            try {
                const forupdate = {
                    mainCategory: updatedata,
                };
                const data = yield MainCategory_1.default.findOneAndUpdate({ _id: productid, createdBY: createdBy._id }, forupdate);
                return {
                    message: "success true",
                    statusCode: 201,
                    data: data,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 501,
                    data: error,
                };
            }
        });
    }
    getMainCategoryByUserId(args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield MainCategory_1.default.find({ createdBY: args._id });
                if (data.length > 0) {
                    return {
                        message: "success true",
                        statusCode: 201,
                        data: data,
                    };
                }
                else {
                    return {
                        message: "NO main categories found",
                        statusCode: 201,
                    };
                }
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 501,
                    data: error,
                };
            }
        });
    }
    addProductCategory(MainCategoryName, Categoryname, Createdby) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!MainCategoryName || !Categoryname) {
                return {
                    message: "please fill all the details",
                    statusCode: 501,
                };
            }
            try {
                const main = yield MainCategory_1.default.findOne({
                    mainCategory: MainCategoryName,
                });
                const data = yield Category_1.default.create({
                    Categoryname: Categoryname,
                    mainCategory: main,
                    createdBy: Createdby._id,
                });
                return {
                    message: "success true",
                    statusCode: 201,
                    data: data,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 404,
                };
            }
        });
    }
    getAllProductCategories(createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield Category_1.default.find().populate([
                    "createdBy",
                    "mainCategory",
                ]);
                return {
                    message: "success true",
                    statusCode: 201,
                    data: data,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 404,
                };
            }
        });
    }
    AllProductCategoriesCreatedByUser(createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield Category_1.default.find({ createdBy: createdBy._id });
                console.log(data);
                if (data.length > 0) {
                    return {
                        message: "success true",
                        statusCode: 201,
                        data: data,
                    };
                }
                else {
                    return {
                        message: "no product categories found",
                        statusCode: 201,
                    };
                }
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 404,
                };
            }
        });
    }
    getProductCategoryById(args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield Category_1.default.findOne({ _id: args }).populate([
                    "mainCategory",
                    "createdBy",
                ]);
                return {
                    message: "success true",
                    statusCode: 201,
                    data: data,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 404,
                };
            }
        });
    }
    deleteProductCategoryById(args, createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args) {
                return {
                    message: "main category id can not be null",
                    statusCode: 201,
                };
            }
            try {
                const deletedItem = yield Category_1.default.findOneAndDelete({
                    _id: args,
                    createdBy: createdBy._id,
                });
                return {
                    message: "success true",
                    statusCode: 201,
                    data: deletedItem,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 404,
                };
            }
        });
    }
    updateProductCategoryById(productid, updatedata, createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!productid) {
                return {
                    message: "main category id can not be null",
                    statusCode: 201,
                };
            }
            try {
                const forupdate = {
                    Categoryname: updatedata,
                };
                console.log(forupdate);
                const data = yield Category_1.default.findOneAndUpdate({ _id: productid, createdBy: createdBy._id }, forupdate);
                return {
                    message: "success true",
                    statusCode: 201,
                    data: data,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 501,
                    data: error,
                };
            }
        });
    }
    addProductBrand(mainCategory, category, brandname, createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mainCategory || !category || !brandname) {
                return {
                    message: "please fill all the details",
                    statusCode: 501,
                };
            }
            try {
                const main = yield MainCategory_1.default.findOne({ mainCategory: mainCategory });
                const categorydetails = yield Category_1.default.findOne({
                    Categoryname: category,
                });
                const user = yield Admin_1.default.findOne({ _id: createdBy._id });
                const brand = yield Brands_1.default.create({
                    brandname: brandname,
                    createdBy: user,
                    category: categorydetails,
                    mainCategory: main,
                });
                console.log(brand);
                return {
                    message: "success true",
                    statusCode: 201,
                    data: brand,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 404,
                    data: error,
                };
            }
        });
    }
    getAllProductBrands(createdBY) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield Brands_1.default.find().populate([
                    "createdBy",
                    "mainCategory",
                    "category",
                ]);
                return {
                    message: "success true",
                    statusCode: 201,
                    data: data,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 404,
                };
            }
        });
    }
    getAllProductBrandCreatedByUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield Brands_1.default.find({ createdBy: user._id }).populate([
                    "createdBy",
                    "mainCategory",
                    "category",
                ]);
                console.log(data);
                if (data.length > 0) {
                    return {
                        message: "success true",
                        statusCode: 201,
                        data: data,
                    };
                }
                else {
                    return {
                        message: "no product categories found",
                        statusCode: 201,
                    };
                }
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 404,
                    data: error,
                };
            }
        });
    }
    deleteProductBrandById(args, createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args) {
                return {
                    message: "main category id can not be null",
                    statusCode: 201,
                };
            }
            try {
                const deletedItem = yield Brands_1.default.findOneAndDelete({
                    _id: args,
                    createdBy: createdBy._id,
                });
                return {
                    message: "success true",
                    statusCode: 201,
                    data: deletedItem,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 404,
                };
            }
        });
    }
    getProductBrandById(args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield Brands_1.default.findOne({ _id: args }).populate([
                    "mainCategory",
                    "createdBy",
                    "category",
                ]);
                return {
                    message: "success true",
                    statusCode: 201,
                    data: data,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 404,
                };
            }
        });
    }
    updateProductBrandById(productid, updatedata, createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(productid);
            if (!productid) {
                return {
                    message: "main category id can not be null",
                    statusCode: 201,
                };
            }
            try {
                const forupdate = {
                    brandname: updatedata,
                };
                const data = yield Brands_1.default.findOneAndUpdate({ _id: productid, createdBy: createdBy._id }, forupdate);
                console.log(data);
                return {
                    message: "success true",
                    statusCode: 201,
                    data: data,
                };
            }
            catch (error) {
                return {
                    message: "success false",
                    statusCode: 501,
                    data: error,
                };
            }
        });
    }
}
exports.ProductDataRepositoryImpl = ProductDataRepositoryImpl;
