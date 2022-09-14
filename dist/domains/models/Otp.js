"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const MongoDatabase_1 = __importDefault(require("../../infrastructure/config/MongoDatabase"));
const Schema = MongoDatabase_1.default.Schema;
const otpSchema = new Schema({
    otp: String,
    email: String,
    role: String,
}, {
    timestamps: true,
});
module.exports = MongoDatabase_1.default.model("Otp", otpSchema);
