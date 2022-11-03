import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    Categoryname: String,
    mainCategory: {
      type: Schema.Types.ObjectId,
      ref: "maincategories",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
    },
    Brand: [
      {
        type: Schema.Types.ObjectId,
        ref: "brands",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export = mongoose.model("categories", categorySchema);
