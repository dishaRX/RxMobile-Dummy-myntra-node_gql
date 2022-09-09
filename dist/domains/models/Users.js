"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const MongoDatabase_1 = __importDefault(require("../../infrastructure/config/MongoDatabase"));
const Schema = MongoDatabase_1.default.Schema;
const userSchema = new Schema({
    fullName: String,
    email: String,
    mobileNo: String,
    gender: String,
    dob: String,
    country: String,
    password: String,
    tokens: [
        {
            token: String,
        },
    ],
    fcmTokens: [
        {
            fcmToken: String,
        },
    ],
    role: String,
    isVerified: Boolean,
    deviceId: String,
    platform: String,
}, {
    timestamps: true,
});
module.exports = MongoDatabase_1.default.model("User", userSchema);
