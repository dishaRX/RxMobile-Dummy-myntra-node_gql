"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataRepositoryImpl = void 0;
const Users_1 = __importDefault(require("../../../domains/models/Users"));
const Constants_1 = require("../errors/Constants");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
class UserDataRepositoryImpl {
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
    registerUser(fullName, email, mobileNo, gender, dob, country, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUser = yield Users_1.default.findOne({ email: email });
            if (isUser) {
                return new Error("User is already registered");
            }
            let user = new Users_1.default({
                fullName: fullName,
                email: email,
                mobileNo: mobileNo,
                password: password,
                gender: gender,
                dob: dob,
                country: country,
            });
            user.password = yield bcrypt.hash(user.password, 8);
            const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET);
            user.tokens = [{ token }];
            let userRes = yield user.save();
            console.log("userRes ::" + userRes);
            return userRes;
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Users_1.default.findOne({ email: email });
            console.log("user : ", user);
            if (!user) {
                return new Error("User not registered");
            }
            const isMatch = yield bcrypt.compare(password, user.password);
            if (!isMatch) {
                // return new Error("Incorrect password");
                return new Error(Constants_1.errorName.UNAUTHORIZED);
            }
            const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET);
            user.tokens = user.tokens.concat({ token });
            let userRes = yield user.save();
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
            return response;
        });
    }
}
exports.UserDataRepositoryImpl = UserDataRepositoryImpl;
