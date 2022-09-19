export interface AdminDataRepository {
  registerAdmin(args: any): Promise<any>;
  loginAdmin(args: any): Promise<any>;
  changeadminPassword(
    adminId: string,
    oldPassword: any,
    newPassword: any
  ): Promise<any>;
  forgotadminPassword(args: any): Promise<any>;
  resetadminPassword(args: any): Promise<any>;
}
