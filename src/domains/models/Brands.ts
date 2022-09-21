import mongoose from "../../infrastructure/config/MongoDatabase";
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  brandname: String,
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
  },
  category: {
    type: Schema.Types.ObjectId,        
    ref: "categories",
  },
  mainCategory: {
    type: Schema.Types.ObjectId,
    ref: "maincategories",
  },
  products: [{ type: Schema.Types.ObjectId, ref: "products" }],
});

export = mongoose.model("brands", brandSchema);
