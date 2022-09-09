import { RegisterUserCase } from "../../../usecases/cases/user/RegisterUser";
import { LoginUserCase } from "../../../usecases/cases/user/LoginUser";
import { UserDataRepositoryImpl } from "../../gateways/repositories_impl/UserDataRepositoryImpl";
import { ChangeUserPasswordCase } from "../../../usecases/cases/user/ChangeUserPasswordCase";

class UserQueryHandler {
  //Products
  // static getProductById = async (id: any) => {
  //     try {
  //         const res = await new GetProductByIdCase(new ProductDataRepositoryImpl()).getProductById(id);
  //         return res;
  //     } catch (error: any) {
  //         return error;
  //     }
  // }
}

class UserMutationHandler {
  //Users
  static registerUser = async (args: any) => {
    try {
      const res = await new RegisterUserCase(
        new UserDataRepositoryImpl()
      ).registerUser(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };

  static loginUser = async (args: any) => {
    try {
      const res = await new LoginUserCase(
        new UserDataRepositoryImpl()
      ).loginUser(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };

  static changePassword = async (
    userId: string,
    oldPassword: string,
    newPassword: string
  ) => {
    try {
      const res = await new ChangeUserPasswordCase(
        new UserDataRepositoryImpl()
      ).changePassword(userId, oldPassword, newPassword);
      return res;
    } catch (error: any) {
      return error;
    }
  };
}

export { UserQueryHandler, UserMutationHandler };
