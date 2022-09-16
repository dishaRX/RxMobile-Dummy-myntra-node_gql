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

  async editPaymentInfo(args: any): Promise<any> {
    const { paymentInfoId, userId, paymentMethod } = args;
    const paymentInfo = await PaymentInfo.findOne({
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
    let allowedUpdates: any;
    if (paymentMethod == 1) {
      args.cardNumber = encrypt(args.cardNumber);
      allowedUpdates = ["cardNumber", "cardName", "expiryMonth", "expiryYear"];
    } else if (paymentMethod == 2) {
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

      await paymentInfo.save();
    } catch (error: any) {
      console.log(error);
    }

    return {
      message: "Payment Info updated",
      statusCode: 200,
    };
  }
}
