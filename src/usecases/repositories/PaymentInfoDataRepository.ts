export interface PaymentInfoDataRepository {
  addPaymentInfo(args: any): Promise<any>;
  getPaymentInfoList(args: any): Promise<any>;
  editPaymentInfo(args: any): Promise<any>;
}
