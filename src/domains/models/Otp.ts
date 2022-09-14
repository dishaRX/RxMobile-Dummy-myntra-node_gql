import mongoose from "../../infrastructure/config/MongoDatabase";
const Schema = mongoose.Schema;

const otpSchema = new Schema(
  {
    otp: String,
    email: String,
    role: String,
  },
  {
    timestamps: true,
  }
);
export = mongoose.model("Otp", otpSchema);
