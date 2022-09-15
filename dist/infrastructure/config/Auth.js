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
const Users_1 = __importDefault(require("../../domains/models/Users"));
var jwt = require("jsonwebtoken");
const auth = (tokenData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (tokenData) {
            const token = tokenData.replace("Bearer ", "");
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            let user;
            if (decoded.role === "user") {
                user = yield Users_1.default.findOne({
                    _id: decoded.userId,
                    "tokens.token": token,
                });
            }
            else {
            }
            if (!user) {
                throw new Error();
            }
            user._id = decoded.userId;
            return user;
        }
        else {
            return undefined;
        }
    }
    catch (error) {
        return undefined;
    }
});
exports.default = auth;
