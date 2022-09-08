import { UserDataRepository } from "../../repositories/UserDataRepository";

export class RegisterUserCase {
  userDataRepository: UserDataRepository;

  constructor(productDataRepository: UserDataRepository) {
    this.userDataRepository = productDataRepository;
  }

  public registerUser = async (
    fullName: string,
    email: string,
    mobileNo: string,
    gender: string,
    dob: string,
    country: string,
    password: any
  ) =>
    await this.userDataRepository.registerUser(
      fullName,
      email,
      mobileNo,
      gender,
      dob,
      country,
      password
    );
}
