export interface UserDataRepository {
  // getAllProducts(): Promise<any>;

  // getProductByPrice(min: any, max: any): Promise<any>;

  // getProductById(id: any): Promise<any>;

  registerUser(
    fullName: string,
    email: string,
    mobileNo: string,
    gender: string,
    dob: string,
    country: string,
    password: any
  ): Promise<any>;

  loginUser(email: string, password: any): Promise<any>;
}
