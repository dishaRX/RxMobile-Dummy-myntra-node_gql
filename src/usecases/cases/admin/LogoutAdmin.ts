import { AdminDataRepository } from "../../repositories/AdminDataRepository";

export class LogoutAdminCase {
  adminDataRepository: AdminDataRepository;

  constructor(productDataRepository: AdminDataRepository) {
    this.adminDataRepository = productDataRepository;
  }

  public logoutAdmin = async (args: any) =>
    await this.adminDataRepository.logoutAdmin(args);
}
