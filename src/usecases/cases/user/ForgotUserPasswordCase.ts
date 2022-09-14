import { UserDataRepository } from "../../repositories/UserDataRepository";

export class ForgotUserPasswordCase {
  userDataRepository: UserDataRepository;

  constructor(productDataRepository: UserDataRepository) {
    this.userDataRepository = productDataRepository;
  }

  public forgotPassword = async (args: any) =>
    await this.userDataRepository.forgotPassword(args);
}
