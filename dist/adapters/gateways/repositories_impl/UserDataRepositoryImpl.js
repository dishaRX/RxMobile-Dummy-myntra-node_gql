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
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
class UserDataRepositoryImpl {
    registerUser(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullName, email, mobileNo, gender, dob, country, password, role, fcmToken, deviceId, platform, } = args;
            const isUser = yield Users_1.default.findOne({ email: email });
            if (isUser) {
                // return new Error("User is already registered");
                return {
                    message: "User already registered",
                    statusCode: 400,
                };
            }
            let user = new Users_1.default({
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
            user.password = yield bcrypt.hash(user.password, 8);
            const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET);
            user.tokens = [{ token }];
            user.fcmTokens = [{ fcmToken }];
            let userRes = yield user.save();
            console.log("userRes ::" + userRes);
            // return userRes;
            return {
                message: "Registered successfully",
                statusCode: 200,
                data: userRes,
            };
        });
    }
    loginUser(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, role, fcmToken, deviceId } = args;
            const user = yield Users_1.default.findOne({ email: email, role: role });
            console.log("user : ", user);
            if (!user) {
                // return new Error("User not registered");
                return {
                    message: "User not registered",
                    statusCode: 404,
                };
            }
            const isMatch = yield bcrypt.compare(password, user.password);
            if (!isMatch) {
                // return new Error("Incorrect password");
                return {
                    message: "Incorrect password",
                    statusCode: 400,
                };
            }
            const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET);
            user.tokens = user.tokens.concat({ token });
            user.fcmTokens = user.fcmTokens.concat({ token });
            user.deviceId = deviceId;
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
            return {
                message: "Login successfully",
                statusCode: 200,
                data: response,
            };
            // return response;
        });
    }
    changePassword(userId, oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield Users_1.default.findById(userId);
                if (!user) {
                    return {
                        message: "User not found",
                        statusCode: 404,
                    };
                }
                const isMatch = yield bcrypt.compare(oldPassword, user.password);
                if (!isMatch) {
                    return {
                        message: "Old Password is incorrect",
                        statusCode: 400,
                    };
                }
                user.password = yield bcrypt.hash(newPassword, 8);
                let updatedUser = yield user.save();
                return {
                    message: "Password changed",
                    statusCode: 200,
                };
            }
            catch (error) {
                return error;
            }
        });
    }
    forgotPassword(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, role } = args;
            const user = yield Users_1.default.findOne({ email: email });
            const otp = Math.floor(100000 + Math.random() * 900000);
            console.log("otp : " + otp);
            if (!user) {
                return {
                    message: "User not registered",
                    statusCode: 404,
                };
            }
            return {
                message: "OTP sent on your email address",
                statusCode: 200,
            };
        });
    }
    resetPassword(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, otp, newPassword } = args;
            const user = yield Users_1.default.findOne({ email: email });
            if (!user) {
                return {
                    message: "User not found",
                    statusCode: 404,
                };
            }
            if (otp !== "1234") {
                return {
                    message: "OTP is incorrect",
                    statusCode: 400,
                };
            }
            user.password = yield bcrypt.hash(newPassword, 8);
            let updatedUser = yield user.save();
            return {
                message: "Password changed, Login to continue",
                statusCode: 200,
            };
        });
    }
}
exports.UserDataRepositoryImpl = UserDataRepositoryImpl;
