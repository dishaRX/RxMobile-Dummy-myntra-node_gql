import { UserDataRepository } from "../../repositories/UserDataRepository";

export class LoginUserCase {
  userDataRepository: UserDataRepository;

  constructor(productDataRepository: UserDataRepository) {
    this.userDataRepository = productDataRepository;
  }

  public loginUser = async (args: any) =>
    await this.userDataRepository.loginUser(args);
}
