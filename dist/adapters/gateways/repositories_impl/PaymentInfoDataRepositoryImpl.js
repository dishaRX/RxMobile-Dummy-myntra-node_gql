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
exports.PaymentInfoDataRepositoryImpl = void 0;
const PaymentInfo_1 = __importDefault(require("../../../domains/models/PaymentInfo"));
const EncryptDecrypt_1 = require("../../../infrastructure/config/EncryptDecrypt");
const mongoose = require("mongoose");
class PaymentInfoDataRepositoryImpl {
    addPaymentInfo(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, cardNumber, cardName, expiryMonth, expiryYear, paymentMethod, upiId, } = args;
            const encCardNumber = (0, EncryptDecrypt_1.encrypt)(cardNumber);
            let paymentInfo = new PaymentInfo_1.default({
                userId,
                cardNumber: JSON.stringify(encCardNumber),
                cardName,
                expiryMonth,
                expiryYear,
                paymentMethod,
                upiId,
            });
            let paymentInfoRes = yield paymentInfo.save();
            paymentInfoRes.cardNumber = (0, EncryptDecrypt_1.decrypt)(JSON.parse(paymentInfoRes.cardNumber));
            return {
                message: "Card added",
                statusCode: 200,
                data: paymentInfoRes,
            };
        });
    }
    getPaymentInfoList(args) {
        return __awaiter(this, void 0, void 0, function* () {
            // let addressList = await Address.findById(args.userId);
            let paymentInfoList = yield PaymentInfo_1.default.find({
                userId: args.userId,
            });
            console.log("getPaymentInfoList : ", paymentInfoList);
            return {
                message: "Success",
                statusCode: 200,
                data: paymentInfoList,
            };
        });
    }
}
exports.PaymentInfoDataRepositoryImpl = PaymentInfoDataRepositoryImpl;
