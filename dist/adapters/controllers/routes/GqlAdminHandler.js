"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminMutationHandler = void 0;
const RegisterAdmin_1 = require("../../../usecases/cases/admin/RegisterAdmin");
const AdminDataRepositoryImpl_1 = require("../../gateways/repositories_impl/AdminDataRepositoryImpl");
class AdminMutationHandler {
}
exports.AdminMutationHandler = AdminMutationHandler;
_a = AdminMutationHandler;
AdminMutationHandler.registerAdmin = (args) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("mutation ::::");
    try {
        const res = yield new RegisterAdmin_1.RegisterAdminCase(new AdminDataRepositoryImpl_1.AdminDataRepositoryImpl()).registerAdmin(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
