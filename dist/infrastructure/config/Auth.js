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
const Admin_1 = __importDefault(require("../../domains/models/Admin"));
const Users_1 = __importDefault(require("../../domains/models/Users"));
var jwt = require("jsonwebtoken");
const auth = (tokenData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = tokenData.replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role == "user") {
            const user = yield Users_1.default.findOne({
                _id: decoded.userId,
                "tokens.token": token,
            });
            if (!user) {
                throw new Error();
            }
            return user;
        }
        else {
            const admin = yield Admin_1.default.findOne({
                _id: decoded.adminId,
                "tokens.token": token,
            });
            if (!admin) {
                throw new Error();
            }
            return admin;
        }
    }
    catch (error) {
        return undefined;
    }
});
exports.default = auth;
