import { AddPaymentInfoCase } from "../../../usecases/cases/paymentInfo/AddPaymentInfo";
import { DeletePaymentInfoCase } from "../../../usecases/cases/paymentInfo/DeletePaymentInfo";
import { EditPaymentInfoCase } from "../../../usecases/cases/paymentInfo/EditPaymentInfo";
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
  static deletePaymentInfo = async (args: any) => {
    try {
      const res = await new DeletePaymentInfoCase(
        new PaymentInfoDataRepositoryImpl()
      ).deletePaymentInfo(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };
}

export { PaymentInfoQueryHandler, PaymentInfoMutationHandler };
