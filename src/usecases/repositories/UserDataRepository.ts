export interface UserDataRepository {
  // getAllProducts(): Promise<any>;

  // getProductByPrice(min: any, max: any): Promise<any>;

  // getProductById(id: any): Promise<any>;

  registerUser(args: any): Promise<any>;

  loginUser(args: any): Promise<any>;
  logoutUser(args: any): Promise<any>;

  changePassword(
    userId: string,
    oldPassword: any,
    newPassword: any
  ): Promise<any>;

  forgotPassword(args: any): Promise<any>;

  resetPassword(args: any): Promise<any>;

  updateUser(args: any): Promise<any>;
}
