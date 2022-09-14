import mongoose from "../../infrastructure/config/MongoDatabase";
const Schema = mongoose.Schema;

const addressSchema = new Schema(
  {
    userId: String,
    name: String,
    mobileNo: String,
    pinCode: String,
    country: String,
    state: String,
    city: String,
    billingAddress: String,
    shippingAddress: String,
    locality: String,
    isDefault: Boolean,
    type: String,
  },
  {
    timestamps: true,
  }
);
export = mongoose.model("Address", addressSchema);
