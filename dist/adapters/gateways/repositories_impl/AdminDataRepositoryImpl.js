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
exports.AdminDataRepositoryImpl = void 0;
const Admin_1 = __importDefault(require("../../../domains/models/Admin"));
const Otp_1 = __importDefault(require("../../../domains/models/Otp"));
const Email_1 = __importDefault(require("../../../infrastructure/config/Email"));
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
class AdminDataRepositoryImpl {
    registerAdmin(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullName, email, mobileNo, gender, dob, country, password, fcmToken, deviceId, platform, } = args;
            const isAdmin = yield Admin_1.default.findOne({ email: email });
            console.log("isAdmin:::::", isAdmin);
            if (isAdmin) {
                return {
                    message: "User already registered",
                    statusCode: 400,
                };
            }
            let admin = new Admin_1.default({
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
            admin.password = yield bcrypt.hash(admin.password, 8);
            const token = jwt.sign({ adminId: admin._id, email: admin.email }, process.env.JWT_SECRET);
            admin.tokens = [{ token }];
            admin.fcmTokens = [{ fcmToken }];
            let adminRes = yield admin.save();
            console.log("adminRes ::" + adminRes);
            const adminres = Object.assign(Object.assign({}, adminRes._doc), { token: adminRes.tokens[0].token });
            return {
                message: "Registered successfully",
                statusCode: 200,
                data: adminres,
            };
        });
    }
    loginAdmin(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, fcmToken, deviceId } = args;
            const admin = yield Admin_1.default.findOne({ email: email });
            console.log("user : ", admin);
            if (!admin) {
                // return new Error("User not registered");
                return {
                    message: "User not registered",
                    statusCode: 404,
                };
            }
            const isMatch = yield bcrypt.compare(password, admin.password);
            if (!isMatch) {
                // return new Error("Incorrect password");
                return {
                    message: "Incorrect password",
                    statusCode: 400,
                };
            }
            const token = jwt.sign({ adminId: admin._id, email: admin.email, role: admin.role }, process.env.JWT_SECRET);
            admin.tokens = admin.tokens.concat({ token });
            admin.fcmTokens = admin.fcmTokens.concat({ fcmToken });
            let userRes = yield admin.save();
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
        });
    }
    changeadminPassword(userId, oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield Admin_1.default.findById(userId);
                if (!admin) {
                    return {
                        message: "User not found",
                        statusCode: 404,
                    };
                }
                const isMatch = yield bcrypt.compare(oldPassword, admin.password);
                if (!isMatch) {
                    return {
                        message: "Old Password is incorrect",
                        statusCode: 400,
                    };
                }
                admin.password = yield bcrypt.hash(newPassword, 8);
                let updatedUser = yield admin.save();
                return {
                    message: "Password changed",
                    statusCode: 200,
                    data: updatedUser,
                };
            }
            catch (error) {
                return error;
            }
        });
    }
    forgotadminPassword(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, role } = args;
            const user = yield Admin_1.default.findOne({ email: email });
            const otp = Math.floor(100000 + Math.random() * 900000);
            if (!user) {
                return {
                    message: "User not registered",
                    statusCode: 404,
                };
            }
            const otpSchema = new Otp_1.default({
                otp: otp,
                email: email,
                role: role,
            });
            let otpRes = yield otpSchema.save();
            try {
                (0, Email_1.default)(otpRes.otp, otpRes.email);
            }
            catch (error) {
                console.error("send mail error", error);
            }
            return {
                message: "OTP sent on your email address",
                statusCode: 200,
            };
        });
    }
    resetadminPassword(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, otp, newPassword, role } = args;
            const admin = yield Admin_1.default.findOne({ email: email, role: role });
            if (!admin) {
                return {
                    message: "User not found",
                    statusCode: 404,
                };
            }
            const otpSchema = yield Otp_1.default.findOne({ email: email, otp: otp, role: role });
            // console.log("otpSchema  ::::", otpSchema);
            if (!otpSchema) {
                return {
                    message: "OTP is incorrect",
                    statusCode: 400,
                };
            }
            otpSchema.remove();
            admin.password = yield bcrypt.hash(newPassword, 8);
            let updatedUser = yield admin.save();
            return {
                message: "Password changed, Login to continue",
                statusCode: 200,
            };
        });
    }
}
exports.AdminDataRepositoryImpl = AdminDataRepositoryImpl;
