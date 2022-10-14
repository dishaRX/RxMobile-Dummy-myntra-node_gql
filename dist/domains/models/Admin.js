"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const MongoDatabase_1 = __importDefault(require("../../infrastructure/config/MongoDatabase"));
const Schema = MongoDatabase_1.default.Schema;
const adminSchema = new Schema({
    fullName: String,
    email: String,
    mobileNo: String,
    dob: String,
    gender: String,
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
    isVerified: Boolean,
    deviceid: String,
    Platform: String,
    role: String
}, {
    timestamps: true,
});
module.exports = MongoDatabase_1.default.model("Admin", adminSchema);
