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
const LoginAdmin_1 = require("../../../usecases/cases/admin/LoginAdmin");
const ChangeAdminPassword_1 = require("../../../usecases/cases/admin/ChangeAdminPassword");
const ForgotAdminPassword_1 = require("../../../usecases/cases/admin/ForgotAdminPassword");
const ResetAdminPassword_1 = require("../../../usecases/cases/admin/ResetAdminPassword");
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
AdminMutationHandler.loginAdmin = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new LoginAdmin_1.LoginAdminCase(new AdminDataRepositoryImpl_1.AdminDataRepositoryImpl()).loginAdmin(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
AdminMutationHandler.changeadminPassword = (adminId, oldPassword, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new ChangeAdminPassword_1.ChangeAdminPasswordCase(new AdminDataRepositoryImpl_1.AdminDataRepositoryImpl()).changeadminPassword(adminId, oldPassword, newPassword);
        return res;
    }
    catch (error) {
        return error;
    }
});
AdminMutationHandler.forgotPassword = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new ForgotAdminPassword_1.ForgotAdminPasswordCase(new AdminDataRepositoryImpl_1.AdminDataRepositoryImpl()).forgotPassword(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
AdminMutationHandler.resetPassword = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new ResetAdminPassword_1.ResetAdminPasswordCase(new AdminDataRepositoryImpl_1.AdminDataRepositoryImpl()).resetPassword(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
