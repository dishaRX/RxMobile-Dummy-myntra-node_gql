import { UserDataRepository } from "../../repositories/UserDataRepository";

export class UpdateUserCase {
  userDataRepository: UserDataRepository;

  constructor(productDataRepository: UserDataRepository) {
    this.userDataRepository = productDataRepository;
  }

  public updateUser = async (args: any) =>
    await this.userDataRepository.updateUser(args);
}
