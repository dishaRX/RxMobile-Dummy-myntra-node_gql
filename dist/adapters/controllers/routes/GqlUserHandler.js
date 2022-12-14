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
exports.UserMutationHandler = exports.UserQueryHandler = void 0;
const RegisterUser_1 = require("../../../usecases/cases/user/RegisterUser");
const LoginUser_1 = require("../../../usecases/cases/user/LoginUser");
const UserDataRepositoryImpl_1 = require("../../gateways/repositories_impl/UserDataRepositoryImpl");
const ChangeUserPasswordCase_1 = require("../../../usecases/cases/user/ChangeUserPasswordCase");
const ResetUserPasswordCase_1 = require("../../../usecases/cases/user/ResetUserPasswordCase");
const ForgotUserPasswordCase_1 = require("../../../usecases/cases/user/ForgotUserPasswordCase");
const LogoutUserCase_1 = require("../../../usecases/cases/user/LogoutUserCase");
const UpdateUserCase_1 = require("../../../usecases/cases/user/UpdateUserCase");
class UserQueryHandler {
}
exports.UserQueryHandler = UserQueryHandler;
class UserMutationHandler {
}
exports.UserMutationHandler = UserMutationHandler;
_a = UserMutationHandler;
//Users
UserMutationHandler.registerUser = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new RegisterUser_1.RegisterUserCase(new UserDataRepositoryImpl_1.UserDataRepositoryImpl()).registerUser(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
UserMutationHandler.loginUser = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new LoginUser_1.LoginUserCase(new UserDataRepositoryImpl_1.UserDataRepositoryImpl()).loginUser(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
UserMutationHandler.logoutUser = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new LogoutUserCase_1.LogoutUserCase(new UserDataRepositoryImpl_1.UserDataRepositoryImpl()).logoutUser(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
UserMutationHandler.changePassword = (userId, oldPassword, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new ChangeUserPasswordCase_1.ChangeUserPasswordCase(new UserDataRepositoryImpl_1.UserDataRepositoryImpl()).changePassword(userId, oldPassword, newPassword);
        return res;
    }
    catch (error) {
        return error;
    }
});
UserMutationHandler.forgotPassword = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new ForgotUserPasswordCase_1.ForgotUserPasswordCase(new UserDataRepositoryImpl_1.UserDataRepositoryImpl()).forgotPassword(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
UserMutationHandler.resetPassword = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new ResetUserPasswordCase_1.ResetUserPasswordCase(new UserDataRepositoryImpl_1.UserDataRepositoryImpl()).resetPassword(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
UserMutationHandler.updateUser = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new UpdateUserCase_1.UpdateUserCase(new UserDataRepositoryImpl_1.UserDataRepositoryImpl()).updateUser(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
