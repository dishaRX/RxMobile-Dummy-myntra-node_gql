import mongoose from "../../infrastructure/config/MongoDatabase";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: String,
    email: String,
    mobileNo: String,
    gender: String,
    dob: String,
    country: String,
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
    role: String,
    isVerified: Boolean,
    deviceId: String,
    platform: String,
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("addresses", {
  ref: "Address",
  localField: "_id",
  foreignField: "userId",
});
export = mongoose.model("User", userSchema);
