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
const Products_1 = __importDefault(require("../../../domains/models/Products"));
class ProductDataRepositoryImpl {
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            var products = yield Products_1.default.find({});
            return products;
        });
    }
    getProductByPrice(min, max) {
        return __awaiter(this, void 0, void 0, function* () {
            var products = yield this.getAllProducts();
            return products.filter((product) => {
                return product.price >= min && product.price <= max;
            });
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var products = yield this.getAllProducts();
            return products.find((product) => {
                return product.id === id;
            });
        });
    }
    addNewProduct(id, description, price) {
        return __awaiter(this, void 0, void 0, function* () {
            let product = new Products_1.default({
                id: id,
                description: description,
                price: price,
                reviews: []
            });
            return product.save();
        });
    }
    addNewProductReview(id, rating, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            var reviews = {
                rating: rating,
                comment: comment,
            };
            const filter = { id: id };
            let res = yield Products_1.default.findOneAndUpdate(filter, { reviews: reviews });
            if (res !== null) {
                return reviews;
            }
            else {
                throw new Error("Id doesn't exists");
            }
        });
    }
}
exports.ProductDataRepositoryImpl = ProductDataRepositoryImpl;
