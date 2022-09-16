import mongoose from "../../infrastructure/config/MongoDatabase";
const Schema = mongoose.Schema;

const paymentInfoSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    cardNumber: String,
    cardName: String,
    expiryMonth: String,
    expiryYear: String,
    paymentMethod: Number,
    upiId: String,
  },
  {
    timestamps: true,
  }
);
export = mongoose.model("PaymentInfo", paymentInfoSchema);
