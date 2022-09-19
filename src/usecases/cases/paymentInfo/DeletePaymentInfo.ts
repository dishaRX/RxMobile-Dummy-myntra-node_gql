import { PaymentInfoDataRepository } from "../../repositories/PaymentInfoDataRepository";

export class DeletePaymentInfoCase {
  paymentInfoDataRepository: PaymentInfoDataRepository;

  constructor(paymentInfoDataRepository: PaymentInfoDataRepository) {
    this.paymentInfoDataRepository = paymentInfoDataRepository;
  }

  public deletePaymentInfo = async (args: any) =>
    await this.paymentInfoDataRepository.deletePaymentInfo(args);
}
