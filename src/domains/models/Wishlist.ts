import mongoose from "../../infrastructure/config/MongoDatabase";
const Schema = mongoose.Schema;

const wishlistSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    productId: String,
  },
  {
    timestamps: true,
  }
);
export = mongoose.model("Wishlist", wishlistSchema);
