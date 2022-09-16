import { AdminDataRepository } from "../../../usecases/repositories/AdminDataRepository";
import Admin from "../../../domains/models/Admin";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

export class AdminDataRepositoryImpl implements AdminDataRepository {
  async registerAdmin(args: any): Promise<any> {
    const {
      fullName,
      email,
      mobileNo,
      gender,
      dob,
      country,
      password,
      role,
      fcmToken,
      deviceId,
      platform,
    } = args;

    const isAdmin = await Admin.findOne({ email: email });
    console.log("isAdmin:::::", isAdmin);
    if (isAdmin) {
      return {
        message: "User already registered",
        statusCode: 400,
      };
    }
    let admin = new Admin({
      fullName: fullName,
      email: email,
      mobileNo: mobileNo,
      password: password,
      gender: gender,
      dob: dob,
      country: country,
      role: role,
      isVerified: false,
      deviceId: deviceId,
      platform: platform,
    });

    admin.password = await bcrypt.hash(admin.password, 8);

    const token = jwt.sign(
      { adminId: admin._id, email: admin.email },
      process.env.JWT_SECRET
    );
    admin.tokens = [{ token }];
    admin.fcmTokens = [{ fcmToken }];

    let adminRes = await admin.save();
    console.log("adminRes ::" + adminRes);

    return {
      message: "Registered successfully",
      statusCode: 200,
      data: adminRes,
    };
  }
  async loginAdmin(args: any): Promise<any> {
    const { email, password, fcmToken, deviceId } = args;
    const admin = await Admin.findOne({ email: email });
    console.log("user : ", admin);
    if (!admin) {
      // return new Error("User not registered");
      return {
        message: "User not registered",
        statusCode: 404,
      };
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      // return new Error("Incorrect password");
      return {
        message: "Incorrect password",
        statusCode: 400,
      };
    }

    const token = jwt.sign(
      { adminId: admin._id, email: admin.email, role: admin.role },
      process.env.JWT_SECRET
    );
    admin.tokens = admin.tokens.concat({ token });
    admin.fcmTokens = admin.fcmTokens.concat({ fcmToken });

    let userRes = await admin.save();
    // console.log(userRes);
    // const response = { ...userRes, token: token };
    const response = {
      _id: userRes._id,
      fullName: userRes.fullName,
      email: userRes.email,
      mobileNo: userRes.mobileNo,
      gender: userRes.gender,
      dob: userRes.dob,
      password: userRes.password,
      tokens: userRes.tokens,
      token: token,
      role: "admin",
    };
    console.log("userRes ::" + response);

    return {
      message: "Login successfully",
      statusCode: 200,
      data: response,
    };

    // return response;
  }
}
