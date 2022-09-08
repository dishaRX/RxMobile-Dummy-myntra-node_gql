"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const MongoDatabase_1 = __importDefault(require("../../infrastructure/config/MongoDatabase"));
const Schema = MongoDatabase_1.default.Schema;
const productSchema = new Schema({
    id: String,
    description: String,
    price: String,
    reviews: [
        {
            rating: Number,
            comment: String,
        }
    ],
});
module.exports = MongoDatabase_1.default.model('Product', productSchema);
