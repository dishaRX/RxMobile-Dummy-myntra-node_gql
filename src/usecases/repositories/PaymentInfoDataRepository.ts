export interface PaymentInfoDataRepository {
  addPaymentInfo(args: any): Promise<any>;
  getPaymentInfoList(args: any): Promise<any>;
}
