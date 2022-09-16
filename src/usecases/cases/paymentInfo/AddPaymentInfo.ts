import { PaymentInfoDataRepository } from "../../repositories/PaymentInfoDataRepository";

export class AddPaymentInfoCase {
  paymentInfoDataRepository: PaymentInfoDataRepository;

  constructor(paymentInfoDataRepository: PaymentInfoDataRepository) {
    this.paymentInfoDataRepository = paymentInfoDataRepository;
  }

  public addPaymentInfo = async (args: any) =>
    await this.paymentInfoDataRepository.addPaymentInfo(args);
}
