import { UserDataRepository } from "../../../usecases/repositories/UserDataRepository";
import Users from "../../../domains/models/Users";
import { errorName } from "../errors/Constants";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

export class UserDataRepositoryImpl implements UserDataRepository {
  // async getAllProducts() {
  //   var products = await Product.find({});
  //   return products;
  // }

  // async getProductById(id: any): Promise<typeof Product> {
  //   var products = await this.getAllProducts();
  //   return products.find((product: any) => {
  //     return product.id === id;
  //   });
  // }

  async registerUser(
    fullName: string,
    email: string,
    mobileNo: string,
    gender: string,
    dob: string,
    country: string,
    password: any
  ): Promise<any> {
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
    });

    user.password = await bcrypt.hash(user.password, 8);

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET
    );
    user.tokens = [{ token }];

    let userRes = await user.save();
    console.log("userRes ::" + userRes);

    // return userRes;
    return {
      message: "Registered successfully",
      statusCode: 200,
      data: userRes,
    };
  }

  async loginUser(email: string, password: any): Promise<any> {
    const user = await Users.findOne({ email: email });
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
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET
    );
    user.tokens = user.tokens.concat({ token });

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
}
