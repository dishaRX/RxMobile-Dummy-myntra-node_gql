import { UserDataRepository } from "../../repositories/UserDataRepository";

export class LoginUserCase {
  userDataRepository: UserDataRepository;

  constructor(productDataRepository: UserDataRepository) {
    this.userDataRepository = productDataRepository;
  }

  public loginUser = async (email: string, password: any) =>
    await this.userDataRepository.loginUser(email, password);
}
