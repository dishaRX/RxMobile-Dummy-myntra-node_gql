export interface AddressDataRepository {
  addAddress(args: any): Promise<any>;
  getAddressList(args: any): Promise<any>;
  editAddress(args: any): Promise<any>;
}
