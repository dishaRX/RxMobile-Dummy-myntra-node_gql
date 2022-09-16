import { PaymentInfoDataRepository } from "../../repositories/PaymentInfoDataRepository";

export class GetPaymentInfoListCase {
  paymentInfoDataRepository: PaymentInfoDataRepository;

  constructor(paymentInfoDataRepository: PaymentInfoDataRepository) {
    this.paymentInfoDataRepository = paymentInfoDataRepository;
  }

  public getPaymentInfoList = async (args: any) =>
    await this.paymentInfoDataRepository.getPaymentInfoList(args);
}
