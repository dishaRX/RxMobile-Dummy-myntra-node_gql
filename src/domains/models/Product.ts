import mongoose from "../../infrastructure/config/MongoDatabase";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  Maincategory: {
    type: Schema.Types.ObjectId,
    ref: "maincategories",
  },
  Category: {
    type: Schema.Types.ObjectId,
    ref: "categories",
  },
  Brand: {
    type: Schema.Types.ObjectId,
    ref: "brands",
  },
  Productname: String,
  Productdetails: String,
  ProductImage: [String],
  Deliverable: String,
  Returnable: Boolean,
});
export = mongoose.model("products", productSchema);