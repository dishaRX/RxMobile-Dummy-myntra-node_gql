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
  },
  {
    timestamps: true,
  }
);
export = mongoose.model("User", userSchema);
