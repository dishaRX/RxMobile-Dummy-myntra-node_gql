import { PaymentInfoDataRepository } from "../../../usecases/repositories/PaymentInfoDataRepository";
import PaymentInfo from "../../../domains/models/PaymentInfo";
import {
  decrypt,
  encrypt,
} from "../../../infrastructure/config/EncryptDecrypt";
const mongoose = require("mongoose");

export class PaymentInfoDataRepositoryImpl
  implements PaymentInfoDataRepository
{
  async addPaymentInfo(args: any): Promise<any> {
    const {
      userId,
      cardNumber,
      cardName,
      expiryMonth,
      expiryYear,
      paymentMethod,
      upiId,
    } = args;

    const encCardNumber = cardNumber ? encrypt(cardNumber) : undefined;

    let paymentInfo = new PaymentInfo({
      userId,
      cardNumber: cardNumber ? encCardNumber : cardNumber,
      cardName,
      expiryMonth,
      expiryYear,
      paymentMethod,
      upiId,
    });

    let paymentInfoRes = await paymentInfo.save();

    paymentInfoRes.cardNumber = paymentInfoRes.cardNumber
      ? decrypt(paymentInfoRes.cardNumber)
      : undefined;

    return {
      message: "Payment info added",
      statusCode: 200,
      data: paymentInfoRes,
    };
  }

  async getPaymentInfoList(args: any): Promise<any> {
    const { userId, paymentMethod } = args;
    let paymentInfoList: any;
    if (paymentMethod) {
      paymentInfoList = await PaymentInfo.find({
        userId: args.userId,
        paymentMethod: paymentMethod,
      });
    } else {
      paymentInfoList = await PaymentInfo.find({
        userId: args.userId,
      });
    }

    paymentInfoList = paymentInfoList.map((data: any, index: any) => {
      if (data.cardNumber) {
        paymentInfoList[index].cardNumber = decrypt(data.cardNumber);
      }
      return data;
    });

    return {
      message: "Success",
      statusCode: 200,
      data: paymentInfoList,
    };
  }
}
