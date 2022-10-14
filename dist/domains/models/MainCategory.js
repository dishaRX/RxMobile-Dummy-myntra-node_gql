"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const maincategorySchema = new Schema({
    mainCategory: String,
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: "categories",
        },
    ],
    createdBY: {
        type: Schema.Types.ObjectId,
        ref: "Admin",
    },
}, {
    timestamps: true,
});
module.exports = mongoose_1.default.model("maincategories", maincategorySchema);
