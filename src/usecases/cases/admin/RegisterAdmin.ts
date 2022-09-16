import { AdminDataRepository } from "../../repositories/AdminDataRepository";

export class RegisterAdminCase {
  adminDataRepository: AdminDataRepository;

  constructor(productDataRepository: AdminDataRepository) {
    this.adminDataRepository = productDataRepository;
  }

  public registerAdmin = async (args: any) =>
    await this.adminDataRepository.registerAdmin(args);
}
