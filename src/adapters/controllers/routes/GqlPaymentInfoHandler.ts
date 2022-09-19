import { AddPaymentInfoCase } from "../../../usecases/cases/paymentInfo/AddPaymentInfo";
<<<<<<< HEAD
import { EditPaymentInfoCase } from "../../../usecases/cases/paymentInfo/EditPaymentInfo";
=======
>>>>>>> 04bf28353fb2f2908b86955f0990e57191bec689
import { GetPaymentInfoListCase } from "../../../usecases/cases/paymentInfo/GetPaymentInfoList";
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
  static getPaymentInfoList = async (args: any) => {
    try {
      const res = await new GetPaymentInfoListCase(
        new PaymentInfoDataRepositoryImpl()
      ).getPaymentInfoList(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };
<<<<<<< HEAD

  static editPaymentInfo = async (args: any) => {
    try {
      const res = await new EditPaymentInfoCase(
        new PaymentInfoDataRepositoryImpl()
      ).editPaymentInfo(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };
=======
>>>>>>> 04bf28353fb2f2908b86955f0990e57191bec689
}

export { PaymentInfoQueryHandler, PaymentInfoMutationHandler };
