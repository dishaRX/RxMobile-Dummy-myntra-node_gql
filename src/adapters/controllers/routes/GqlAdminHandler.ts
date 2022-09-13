import { RegisterAdminCase } from "../../../usecases/cases/admin/RegisterAdmin";
import { AdminDataRepositoryImpl } from "../../gateways/repositories_impl/AdminDataRepositoryImpl";

export class AdminMutationHandler{
    static registerAdmin = async (args: any) => {
        console.log("mutation ::::")
        try {
          const res = await new RegisterAdminCase(
            new AdminDataRepositoryImpl()
            
          ).registerAdmin(args);
          return res;
        } catch (error: any) {
          return error;
        }
      };
}