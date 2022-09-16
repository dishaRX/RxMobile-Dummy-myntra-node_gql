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
  },
};
