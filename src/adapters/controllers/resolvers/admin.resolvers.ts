// import Admin from "../../../domains/models/Admin";
import { AdminMutationHandler } from "../routes/GqlAdminHandler";
export default {
  Mutation: {
    registerAdmin: (_: any, args: any) => {
      try {
        console.log("args :::::", args);
        return AdminMutationHandler.registerAdmin(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
    loginAdmin: (_: any, args: any) => {
      try {
        return AdminMutationHandler.loginAdmin(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
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
    forgotPassword: async (_: any, args: any) => {
      try {
        return AdminMutationHandler.forgotPassword(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
    resetPassword: async (_: any, args: any) => {
      try {
        return AdminMutationHandler.resetPassword(args);
      } catch (error) {
        console.log(`Error -------> ${error}`);
        return error;
      }
    },
  },
};
