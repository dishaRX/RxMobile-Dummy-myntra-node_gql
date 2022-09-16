import { PaymentInfoDataRepository } from "../../repositories/PaymentInfoDataRepository";

export class EditPaymentInfoCase {
  paymentInfoDataRepository: PaymentInfoDataRepository;

  constructor(paymentInfoDataRepository: PaymentInfoDataRepository) {
    this.paymentInfoDataRepository = paymentInfoDataRepository;
  }

  public editPaymentInfo = async (args: any) =>
    await this.paymentInfoDataRepository.editPaymentInfo(args);
}
