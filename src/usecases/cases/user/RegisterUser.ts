import { UserDataRepository } from "../../repositories/UserDataRepository";

export class RegisterUserCase {
  userDataRepository: UserDataRepository;

  constructor(productDataRepository: UserDataRepository) {
    this.userDataRepository = productDataRepository;
  }

  public registerUser = async (args: any) =>
    await this.userDataRepository.registerUser(args);
}
