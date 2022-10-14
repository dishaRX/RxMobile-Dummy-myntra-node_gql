"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const MongoDatabase_1 = __importDefault(require("../../infrastructure/config/MongoDatabase"));
const Schema = MongoDatabase_1.default.Schema;
const brandSchema = new Schema({
    brandname: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "Admin",
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "categories",
    },
    mainCategory: {
        type: Schema.Types.ObjectId,
        ref: "maincategories",
    },
    products: [{ type: Schema.Types.ObjectId, ref: "products" }],
});
module.exports = MongoDatabase_1.default.model("brands", brandSchema);
