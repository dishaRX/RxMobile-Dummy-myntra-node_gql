import { UserDataRepository } from "../../../usecases/repositories/UserDataRepository";
import Users from "../../../domains/models/Users";
import { errorName } from "../errors/Constants";
import sendEmail from "../../../infrastructure/config/Email";
import OTP from "../../../domains/models/Otp";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

export class UserDataRepositoryImpl implements UserDataRepository {
  async registerUser(args: any): Promise<any> {
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
    console.log("register");
    const isUser = await Users.findOne({ email: email });
    if (isUser) {
      // return new Error("User is already registered");
      return {
        message: "User already registered",
        statusCode: 400,
      };
    }
    let user = new Users({
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

    user.password = await bcrypt.hash(user.password, 8);

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET
    );
    user.tokens = [{ token }];
    user.fcmTokens = [{ fcmToken }];

    let userRes = await user.save();
    console.log("userRes ::" + userRes);

    const finalRes = {
      ...userRes._doc,
      token: userRes.tokens[0].token,
    };
    console.log("userRes aaaaaaaaaaaaa ::" + JSON.stringify(finalRes));
    // return userRes;
    return {
      message: "Registered successfully",
      statusCode: 200,
      data: finalRes,
    };
  }

  async loginUser(args: any): Promise<any> {
    const { email, password, role, fcmToken, deviceId } = args;
    const user = await Users.findOne({ email: email, role: role });
    console.log("user : ", user);
    if (!user) {
      // return new Error("User not registered");
      return {
        message: "User not registered",
        statusCode: 404,
      };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // return new Error("Incorrect password");
      return {
        message: "Incorrect password",
        statusCode: 400,
      };
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET
    );
    user.tokens = user.tokens.concat({ token });
    user.fcmTokens = user.fcmTokens.concat({ token });
    user.deviceId = deviceId;

    let userRes = await user.save();

    // const response = { ...userRes, token: token };
    const response = {
      _id: userRes._id,
      fullName: userRes.fullName,
      email: userRes.email,
      mobileNo: userRes.mobileNo,
      gender: userRes.gender,
      dob: userRes.dob,
      country: userRes.country,
      password: userRes.password,
      tokens: userRes.tokens,
      isVerified: userRes.isVerified,
      token: token,
    };
    console.log("userRes ::" + response);

    return {
      message: "Login successfully",
      statusCode: 200,
      data: response,
    };

    // return response;
  }

  async logoutUser(args: any): Promise<any> {
    try {
      const { userId, authToken } = args;
      const user = await Users.findById(userId);
      if (!user) {
        return {
          message: "User not found",
          statusCode: 404,
        };
      }
      user.tokens = user.tokens.filter((token: any) => {
        return token.token !== authToken;
      });
      await user.save();
      return {
        message: "Success",
        statusCode: 200,
      };
    } catch (error) {
      return error;
    }
  }

  async changePassword(
    userId: string,
    oldPassword: any,
    newPassword: any
  ): Promise<any> {
    try {
      const user = await Users.findById(userId);
      if (!user) {
        return {
          message: "User not found",
          statusCode: 404,
        };
      }
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return {
          message: "Old Password is incorrect",
          statusCode: 400,
        };
      }
      user.password = await bcrypt.hash(newPassword, 8);
      let updatedUser = await user.save();

      return {
        message: "Password changed",
        statusCode: 200,
      };
    } catch (error) {
      return error;
    }
  }

  async forgotPassword(args: any): Promise<any> {
    // console.log("args :", args);
    const { email, role } = args;
    const user = await Users.findOne({ email: email, role: role });

    const otp = Math.floor(100000 + Math.random() * 900000);
    // console.log("otp : " + otp);
    if (!user) {
      return {
        message: "User not registered",
        statusCode: 404,
      };
    }
    const otpSchema = new OTP({
      otp: otp,
      email: email,
      role: role,
    });

    let otpRes = await otpSchema.save();
    // console.log("otpres : " + otpRes);
    try {
      sendEmail(otp, email);
    } catch (error) {
      console.error("send mail error", error);
    }
    return {
      message: "OTP sent on your email address",
      statusCode: 200,
    };
  }

  async resetPassword(args: any): Promise<any> {
    const { email, otp, newPassword, role } = args;
    const user = await Users.findOne({ email: email, role: role });
    if (!user) {
      return {
        message: "User not found",
        statusCode: 404,
      };
    }
    const otpSchema = await OTP.findOne({ email: email, otp: otp, role: role });
    // console.log("otpSchema  ::::", otpSchema);
    if (!otpSchema) {
      return {
        message: "OTP is incorrect",
        statusCode: 400,
      };
    }
    await otpSchema.remove();
    user.password = await bcrypt.hash(newPassword, 8);
    let updatedUser = await user.save();

    return {
      message: "Password changed, Login to continue",
      statusCode: 200,
    };
  }

  async updateUser(args: any): Promise<any> {
    const { userId, fullName, gender, dob, country } = args;
    try {
      const user = await Users.findById(userId);
      if (!user) {
        return {
          message: "User not found",
          statusCode: 404,
        };
      }

      delete args.userId;
      console.log("args after: ", args);

      const updates = Object.keys(args);
      const allowedUpdates = ["fullName", "gender", "dob", "country"];

      const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
      });

      if (!isValidOperation) {
        return {
          message: " Operation invalid",
          statusCode: 400,
        };
      }
      user.fullName = fullName;
      user.gender = gender;
      user.dob = dob;
      user.country = country;
      let updatedUser = await user.save();

      return {
        message: "Profile updated successfully",
        statusCode: 200,
        data: updatedUser,
      };
    } catch (error) {
      return error;
    }
  }
}
