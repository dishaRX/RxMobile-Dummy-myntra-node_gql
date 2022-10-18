import mongoose from "../../infrastructure/config/MongoDatabase";
const Schema = mongoose.Schema;
const adminSchema = new Schema(
  {
    fullName: String,
    email: String,
    mobileNo: String,
    dob: String,
    country: String,
    gender: String,
    password: String,
    tokens: [
      {
        token: String,
      },
    ],
    fcmTokens: [
      {
        fcmToken: String,
      },
    ],
    isVerified: Boolean,
    deviceid: String,
    Platform: String,
    role: String,
  },
  {
    timestamps: true,
  }
);
export = mongoose.model("Admin", adminSchema);
