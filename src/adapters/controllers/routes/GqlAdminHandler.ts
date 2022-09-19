import { RegisterAdminCase } from "../../../usecases/cases/admin/RegisterAdmin";
import { AdminDataRepositoryImpl } from "../../gateways/repositories_impl/AdminDataRepositoryImpl";
import { LoginAdminCase } from "../../../usecases/cases/admin/LoginAdmin";
import { ChangeAdminPasswordCase } from "../../../usecases/cases/admin/ChangeAdminPassword";

export class AdminMutationHandler {
  static registerAdmin = async (args: any) => {
    console.log("mutation ::::");
    try {
      const res = await new RegisterAdminCase(
        new AdminDataRepositoryImpl()
      ).registerAdmin(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };
  static loginAdmin = async (args: any) => {
    try {
      const res = await new LoginAdminCase(
        new AdminDataRepositoryImpl()
      ).loginAdmin(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };
  static changeadminPassword = async (
    adminId:string,
    oldPassword: string,
    newPassword: string
  ) => {
    try {
      const res = await new ChangeAdminPasswordCase(
        new AdminDataRepositoryImpl()
      ).changeadminPassword(adminId,oldPassword,newPassword);
      return res;
    } catch (error: any) {
      return error;
    }
  };
}
