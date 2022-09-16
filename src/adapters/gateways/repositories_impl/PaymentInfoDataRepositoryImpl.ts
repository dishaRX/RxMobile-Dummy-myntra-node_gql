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

    const encCardNumber = encrypt(cardNumber);

    let paymentInfo = new PaymentInfo({
      userId,
      cardNumber: JSON.stringify(encCardNumber),
      cardName,
      expiryMonth,
      expiryYear,
      paymentMethod,
      upiId,
    });

    let paymentInfoRes = await paymentInfo.save();

    paymentInfoRes.cardNumber = decrypt(JSON.parse(paymentInfoRes.cardNumber));

    return {
      message: "Card added",
      statusCode: 200,
      data: paymentInfoRes,
    };
  }
}
