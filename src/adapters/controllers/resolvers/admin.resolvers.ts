// import Admin from "../../../domains/models/Admin";
import { AdminMutationHandler } from "../routes/GqlAdminHandler";
export default {
  Mutation: {
    registerAdmin: (_: any, args: any) => {
      try {
        console.log("args :::::", args);
        return AdminMutationHandler.registerAdmin(args);
      } catch (error) {
        console.log(`Error : -------> ${error}`);
        return error;
      }
    },
    loginAdmin: (_: any, args: any) => {
      try {
        return AdminMutationHandler.loginAdmin(args);
      } catch (error) {
        console.log(`Error : -------> ${error}`);
        return error;
      }
    },
    changeadminPassword: async (_: any, args: any, context: any, info: any) => {
      if (!context._id) {
        return {
          message: "Unauthorized",
          statusCode: 401,
          success: false,
        };
      }
      try {
        console.log("its resolver");
        return AdminMutationHandler.changeadminPassword(
          args.adminId,
          args.oldPassword,
          args.newPassword
        );
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
    forgotadminPassword: async (_: any, args: any) => {
      try {
        return AdminMutationHandler.forgotadminPassword(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
    resetadminPassword: async (_: any, args: any) => {
      try {
        return AdminMutationHandler.resetadminPassword(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
    logoutAdmin : async (_: any, args: any, context: any, info: any) => {
      console.log(context._id)
      if (!context._id || args.adminId !== context._id.toString()) {
        return {
          message: "Unauthorized",
          statusCode: 401,
        };
      }

      try {
        return AdminMutationHandler.logoutAdmin(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
  },
};
