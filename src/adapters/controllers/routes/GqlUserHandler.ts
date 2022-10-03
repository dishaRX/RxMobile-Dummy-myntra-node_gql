import { RegisterUserCase } from "../../../usecases/cases/user/RegisterUser";
import { LoginUserCase } from "../../../usecases/cases/user/LoginUser";
import { UserDataRepositoryImpl } from "../../gateways/repositories_impl/UserDataRepositoryImpl";
import { ChangeUserPasswordCase } from "../../../usecases/cases/user/ChangeUserPasswordCase";
import { ResetUserPasswordCase } from "../../../usecases/cases/user/ResetUserPasswordCase";
import { ForgotUserPasswordCase } from "../../../usecases/cases/user/ForgotUserPasswordCase";
import { LogoutUserCase } from "../../../usecases/cases/user/LogoutUserCase";
import { UpdateUserCase } from "../../../usecases/cases/user/UpdateUserCase";

class UserQueryHandler {}

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

  static logoutUser = async (args: any) => {
    try {
      const res = await new LogoutUserCase(
        new UserDataRepositoryImpl()
      ).logoutUser(args);
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
  static forgotPassword = async (args: any) => {
    try {
      const res = await new ForgotUserPasswordCase(
        new UserDataRepositoryImpl()
      ).forgotPassword(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };
  static resetPassword = async (args: any) => {
    try {
      const res = await new ResetUserPasswordCase(
        new UserDataRepositoryImpl()
      ).resetPassword(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };
  static updateUser = async (args: any) => {
    try {
      const res = await new UpdateUserCase(
        new UserDataRepositoryImpl()
      ).updateUser(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };
}

export { UserQueryHandler, UserMutationHandler };
