import mongoose from "mongoose";
const Schema = mongoose.Schema;

const maincategorySchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);
export = mongoose.model("maincategories", maincategorySchema);
