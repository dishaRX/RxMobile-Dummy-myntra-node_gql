import mongoose from "../../infrastructure/config/MongoDatabase";
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    productId: String,
    size: String,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);
export = mongoose.model("Cart", cartSchema);
