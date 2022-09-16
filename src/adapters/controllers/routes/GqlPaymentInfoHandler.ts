import { AddPaymentInfoCase } from "../../../usecases/cases/paymentInfo/AddPaymentInfo";
import { PaymentInfoDataRepositoryImpl } from "../../gateways/repositories_impl/PaymentInfoDataRepositoryImpl";

class PaymentInfoQueryHandler {}

class PaymentInfoMutationHandler {
  //Payment Info
  static addPaymentInfo = async (args: any) => {
    try {
      const res = await new AddPaymentInfoCase(
        new PaymentInfoDataRepositoryImpl()
      ).addPaymentInfo(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };
}

export { PaymentInfoQueryHandler, PaymentInfoMutationHandler };
