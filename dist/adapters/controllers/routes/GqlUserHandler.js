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
