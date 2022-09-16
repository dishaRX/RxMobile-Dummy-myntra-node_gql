export interface AdminDataRepository {
  registerAdmin(args: any): Promise<any>;
  loginAdmin(args: any): Promise<any>;


}
