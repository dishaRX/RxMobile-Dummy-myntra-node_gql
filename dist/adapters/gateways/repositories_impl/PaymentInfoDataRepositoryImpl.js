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
const mongoose = require("mongoose");
class PaymentInfoDataRepositoryImpl {
    addPaymentInfo(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, carNumber, cardName, expiryMonth, expiryYear, paymentMethod, upiId, } = args;
            let paymentInfo = new PaymentInfo_1.default({
                userId,
                carNumber,
                cardName,
                expiryMonth,
                expiryYear,
                paymentMethod,
                upiId,
            });
            let paymentInfoRes = yield paymentInfo.save();
            return {
                message: "Card added",
                statusCode: 200,
                data: paymentInfoRes,
            };
        });
    }
}
exports.PaymentInfoDataRepositoryImpl = PaymentInfoDataRepositoryImpl;
