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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressMutationHandler = exports.AddressQueryHandler = void 0;
const AddUserAddress_1 = require("../../../usecases/cases/address/AddUserAddress");
const GetAddressList_1 = require("../../../usecases/cases/address/GetAddressList");
const AddressDataRepositoryImpl_1 = require("../../gateways/repositories_impl/AddressDataRepositoryImpl");
class AddressQueryHandler {
}
exports.AddressQueryHandler = AddressQueryHandler;
_a = AddressQueryHandler;
AddressQueryHandler.getAddressList = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new GetAddressList_1.GetAddressListCase(new AddressDataRepositoryImpl_1.AddressDataRepositoryImpl()).getAddressList(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
class AddressMutationHandler {
}
exports.AddressMutationHandler = AddressMutationHandler;
_b = AddressMutationHandler;
//Addresses
AddressMutationHandler.addAddress = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield new AddUserAddress_1.AddUserAddressCase(new AddressDataRepositoryImpl_1.AddressDataRepositoryImpl()).addAddress(args);
        return res;
    }
    catch (error) {
        return error;
    }
});
