import { AdminDataRepository } from "../../repositories/AdminDataRepository";

export class ForgotAdminPasswordCase {
  userDataRepository: AdminDataRepository;

  constructor(productDataRepository: AdminDataRepository) {
    this.userDataRepository = productDataRepository;
  }

  public forgotadminPassword = async (args: any) =>
    await this.userDataRepository.forgotadminPassword(args);
}
