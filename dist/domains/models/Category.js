"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const categorySchema = new Schema({
    Categoryname: String,
    mainCategory: {
        type: Schema.Types.ObjectId,
        ref: "maincategories",
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "Admin",
    },
    Brands: [
        {
            type: Schema.Types.ObjectId,
            ref: "Brands",
        },
    ],
}, {
    timestamps: true,
});
module.exports = mongoose_1.default.model("categories", categorySchema);
