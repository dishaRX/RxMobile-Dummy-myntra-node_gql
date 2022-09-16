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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentInfoMutationHandler = exports.PaymentInfoQueryHandler = void 0;
const AddPaymentInfo_1 = require("../../../usecases/cases/paymentInfo/AddPaymentInfo");
const GetPaymentInfoList_1 = require("../../../usecases/cases/paymentInfo/GetPaymentInfoList");
const PaymentInfoDataRepositoryImpl_1 = require("../../gateways/repositories_impl/PaymentInfoDataRepositoryImpl");
class PaymentInfoQueryHandler {
}
exports.PaymentInfoQueryHandler = PaymentInfoQueryHandler;
class PaymentInfoMutationHandler {
}
exports.PaymentInfoMutationHandler = PaymentInfoMutationHandler;
_a = PaymentInfoMutationHandler;
//Payment Info
PaymentInfoMutationHandler.addPaymentInfo = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new AddPaymentInfo_1.AddPaymentInfoCase(new PaymentInfoDataRepositoryImpl_1.PaymentInfoDataRepositoryImpl()).addPaymentInfo(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
PaymentInfoMutationHandler.getPaymentInfoList = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetPaymentInfoList_1.GetPaymentInfoListCase(new PaymentInfoDataRepositoryImpl_1.PaymentInfoDataRepositoryImpl()).getPaymentInfoList(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
