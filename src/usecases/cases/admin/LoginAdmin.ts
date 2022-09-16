import { AdminDataRepository } from "../../repositories/AdminDataRepository";

export class LoginAdminCase {
  userDataRepository: AdminDataRepository;

  constructor(productDataRepository: AdminDataRepository) {
    this.userDataRepository = productDataRepository;
  }

  public loginAdmin = async (args: any) =>
    await this.userDataRepository.loginAdmin(args);
}
