"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const MongoDatabase_1 = __importDefault(require("../../infrastructure/config/MongoDatabase"));
const Schema = MongoDatabase_1.default.Schema;
const addressSchema = new Schema({
    userId: String,
    name: String,
    mobileNo: String,
    pinCode: String,
    country: String,
    state: String,
    city: String,
    billingAddress: String,
    shippingAddress: String,
    locality: String,
    isDefault: Boolean,
    type: String,
}, {
    timestamps: true,
});
module.exports = MongoDatabase_1.default.model("Address", addressSchema);
