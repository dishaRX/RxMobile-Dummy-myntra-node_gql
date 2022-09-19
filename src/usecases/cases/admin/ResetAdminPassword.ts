import { AdminDataRepository } from "../../repositories/AdminDataRepository";

export class ResetAdminPasswordCase {
  adminDataRepository: AdminDataRepository;

  constructor(productDataRepository: AdminDataRepository) {
    this.adminDataRepository = productDataRepository;
  }

  public resetPassword = async (args: any) =>
    await this.adminDataRepository.resetadminPassword(args);
}
