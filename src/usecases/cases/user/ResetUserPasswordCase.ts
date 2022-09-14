import { UserDataRepository } from "../../repositories/UserDataRepository";

export class ResetUserPasswordCase {
  userDataRepository: UserDataRepository;

  constructor(productDataRepository: UserDataRepository) {
    this.userDataRepository = productDataRepository;
  }

  public resetPassword = async (args: any) =>
    await this.userDataRepository.resetPassword(args);
}
