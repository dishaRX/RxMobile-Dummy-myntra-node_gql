import {Schema, model} from "mongoose";

const adminSchema = new Schema({
    fullName: String,
    email: String,
    mobileNo: String,
    dob: String,
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
  },
  {
    timestamps: true,
  }
)
export = model("Admin",adminSchema);
