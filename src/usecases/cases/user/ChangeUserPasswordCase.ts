import { UserDataRepository } from "../../repositories/UserDataRepository";

export class ChangeUserPasswordCase {
  userDataRepository: UserDataRepository;

  constructor(productDataRepository: UserDataRepository) {
    this.userDataRepository = productDataRepository;
  }

  public changePassword = async (
    userId: string,
    oldPassword: string,
    newPassword: any
  ) =>
    await this.userDataRepository.changePassword(
      userId,
      oldPassword,
      newPassword
    );
}
