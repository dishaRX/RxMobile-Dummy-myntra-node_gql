import { UserDataRepository } from "../../repositories/UserDataRepository";

export class LogoutUserCase {
  userDataRepository: UserDataRepository;

  constructor(productDataRepository: UserDataRepository) {
    this.userDataRepository = productDataRepository;
  }

  public logoutUser = async (args: any) =>
    await this.userDataRepository.logoutUser(args);
}
