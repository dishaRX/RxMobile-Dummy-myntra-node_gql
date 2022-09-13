"use strict";
const mongoose_1 = require("mongoose");
const adminSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
module.exports = (0, mongoose_1.model)("Admin", adminSchema);
