"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const MongoDatabase_1 = __importDefault(require("../../infrastructure/config/MongoDatabase"));
const Schema = MongoDatabase_1.default.Schema;
const paymentInfoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    carNumber: String,
    cardName: String,
    expiryMonth: String,
    expiryYear: String,
    paymentMethod: Number,
    upiId: String,
}, {
    timestamps: true,
});
module.exports = MongoDatabase_1.default.model("PaymentInfo", paymentInfoSchema);
