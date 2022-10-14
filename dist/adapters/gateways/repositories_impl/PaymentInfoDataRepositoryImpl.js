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
            const encCardNumber = cardNumber ? (0, EncryptDecrypt_1.encrypt)(cardNumber) : undefined;
            let paymentInfo = new PaymentInfo_1.default({
                userId,
                cardNumber: cardNumber ? encCardNumber : cardNumber,
                cardName,
                expiryMonth,
                expiryYear,
                paymentMethod,
                upiId,
            });
            let paymentInfoRes = yield paymentInfo.save();
            paymentInfoRes.cardNumber = paymentInfoRes.cardNumber
                ? (0, EncryptDecrypt_1.decrypt)(paymentInfoRes.cardNumber)
                : undefined;
            return {
                message: "Payment info added",
                statusCode: 200,
                data: paymentInfoRes,
            };
        });
    }
    getPaymentInfoList(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, paymentMethod } = args;
            let paymentInfoList;
            if (paymentMethod) {
                paymentInfoList = yield PaymentInfo_1.default.find({
                    userId: args.userId,
                    paymentMethod: paymentMethod,
                });
            }
            else {
                paymentInfoList = yield PaymentInfo_1.default.find({
                    userId: args.userId,
                });
            }
            paymentInfoList = paymentInfoList.map((data, index) => {
                if (data.cardNumber) {
                    paymentInfoList[index].cardNumber = (0, EncryptDecrypt_1.decrypt)(data.cardNumber);
                }
                return data;
            });
            return {
                message: "Success",
                statusCode: 200,
                data: paymentInfoList,
            };
        });
    }
    editPaymentInfo(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { paymentInfoId, userId, paymentMethod } = args;
            const paymentInfo = yield PaymentInfo_1.default.findOne({
                _id: paymentInfoId,
                userId: userId,
                paymentMethod: paymentMethod,
            });
            if (!paymentInfo) {
                return {
                    message: "Payment Info not found",
                    statusCode: 404,
                };
            }
            delete args.userId;
            delete args.paymentInfoId;
            delete args.paymentMethod;
            const updates = Object.keys(args);
            let allowedUpdates;
            if (paymentMethod == 1) {
                args.cardNumber = (0, EncryptDecrypt_1.encrypt)(args.cardNumber);
                allowedUpdates = ["cardNumber", "cardName", "expiryMonth", "expiryYear"];
            }
            else if (paymentMethod == 2) {
                allowedUpdates = ["upiId"];
            }
            const isValidOperation = updates.every((update) => {
                return allowedUpdates.includes(update);
            });
            if (!isValidOperation) {
                return {
                    message: "Operation invalid",
                    statusCode: 400,
                };
            }
            try {
                updates.forEach((update) => (paymentInfo[update] = args[update]));
                yield paymentInfo.save();
            }
            catch (error) {
                console.log(error);
            }
            return {
                message: "Payment Info updated",
                statusCode: 200,
            };
        });
    }
    deletePaymentInfo(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { paymentInfoId, userId, paymentMethod } = args;
            const paymentInfo = yield PaymentInfo_1.default.findOne({
                _id: paymentInfoId,
                userId: userId,
                paymentMethod: paymentMethod,
            });
            if (!paymentInfo) {
                return {
                    message: "Payment Info not found",
                    statusCode: 404,
                };
            }
            yield paymentInfo.remove();
            return {
                message: "Payment Info removed.",
                statusCode: 200,
            };
        });
    }
}
exports.PaymentInfoDataRepositoryImpl = PaymentInfoDataRepositoryImpl;
