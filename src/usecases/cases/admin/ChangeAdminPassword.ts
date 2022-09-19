import { AdminDataRepository } from "../../repositories/AdminDataRepository";

export class ChangeAdminPasswordCase {
  adminDataRepository: AdminDataRepository;

  constructor(productDataRepository: AdminDataRepository) {
    this.adminDataRepository = productDataRepository;
  }

  public changeadminPassword = async (
    adminId: string,
    oldPassword:string,
    newPassword:string
  ) =>
    await this.adminDataRepository.changeadminPassword(
      adminId,
      oldPassword,
      newPassword
    );
}
