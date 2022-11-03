import { AdminDataRepository } from "../../../usecases/repositories/AdminDataRepository";
import Admin from "../../../domains/models/Admin";
import Otp from "../../../domains/models/Otp";
import sendEmail from "../../../infrastructure/config/Email";
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
      role: "admin",
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
    const adminres = {
      ...adminRes._doc,
      token: adminRes.tokens[0].token,
    };
    return {
      message: "Registered successfully",
      statusCode: 200,
      data: adminres,
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
  async changeadminPassword(
    userId: string,
    oldPassword: string,
    newPassword: string
  ): Promise<any> {
    try {
      const admin = await Admin.findById(userId);
      if (!admin) {
        return {
          message: "User not found",
          statusCode: 404,
        };
      }
      const isMatch = await bcrypt.compare(oldPassword, admin.password);
      if (!isMatch) {
        return {
          message: "Old Password is incorrect",
          statusCode: 400,
        };
      }
      admin.password = await bcrypt.hash(newPassword, 8);
      let updatedUser = await admin.save();
      return {
        message: "Password changed",
        statusCode: 200,
        data: updatedUser,
      };
    } catch (error) {
      return error;
    }
  }
  async forgotadminPassword(args: any): Promise<any> {
    const { email, role } = args;
    const user = await Admin.findOne({ email: email });
    const otp = Math.floor(100000 + Math.random() * 900000);
    if (!user) {
      return {
        message: "User not registered",
        statusCode: 404,
      };
    }
    const otpSchema = new Otp({
      otp: otp,
      email: email,
      role: role,
    });
    let otpRes = await otpSchema.save();
    try {
      sendEmail(otpRes.otp, otpRes.email);
    } catch (error) {
      console.error("send mail error", error);
    }
    return {
      message: "OTP sent on your email address",
      statusCode: 200,
    };
  }
  async resetadminPassword(args: any): Promise<any> {
    const { email, otp, newPassword, role } = args;
    const admin = await Admin.findOne({ email: email, role: role });
    if (!admin) {
      return {
        message: "User not found",
        statusCode: 404,
      };
    }
    const otpSchema = await Otp.findOne({ email: email, otp: otp, role: role });
    // console.log("otpSchema  ::::", otpSchema);
    if (!otpSchema) {
      return {
        message: "OTP is incorrect",
        statusCode: 400,
      };
    }
    otpSchema.remove();
    admin.password = await bcrypt.hash(newPassword, 8);
    let updatedUser = await admin.save();

    return {
      message: "Password changed, Login to continue",
      statusCode: 200,
    };
  }

  async logoutAdmin(args: any): Promise<any> {
    try {
      const { adminId, authToken } = args;
      const admin = await Admin.findOne({ _id: adminId });
      console.log("admin mil gya----->", admin);
      if (!admin) {
        return {
          message: "Admin not found",
          statusCode: 404,
        };
      }
      admin.tokens = admin.tokens.filter((token: any) => {
        return token.token !== authToken;
      });
      await admin.save();
      return {
        message: "Success",
        statusCode: 200,
      };
    } catch (error) {
      return error;
    }
  }
}
