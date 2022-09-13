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
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
class AdminDataRepositoryImpl {
    registerAdmin(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullName, email, mobileNo, gender, dob, country, password, role, fcmToken, deviceId, platform, } = args;
            const isAdmin = yield Admin_1.default.findOne({ email: email });
            console.log('isAdmin:::::', isAdmin);
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
                role: role,
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
            return {
                message: "Registered successfully",
                statusCode: 200,
                data: adminRes,
            };
        });
    }
}
exports.AdminDataRepositoryImpl = AdminDataRepositoryImpl;
