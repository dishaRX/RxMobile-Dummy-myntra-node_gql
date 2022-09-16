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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressDataRepositoryImpl = void 0;
const Address_1 = __importDefault(require("../../../domains/models/Address"));
const mongoose = require("mongoose");
class AddressDataRepositoryImpl {
    addAddress(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, name, mobileNo, pinCode, country, state, city, billingAddress, shippingAddress, locality, isDefault, type, } = args;
            let address = new Address_1.default({
                userId,
                name,
                mobileNo,
                pinCode,
                country,
                state,
                city,
                billingAddress,
                shippingAddress,
                locality,
                isDefault,
                type,
            });
            let addresssRes = yield address.save();
            return {
                message: "Address added",
                statusCode: 200,
                data: addresssRes,
            };
        });
    }
    getAddressList(args) {
        return __awaiter(this, void 0, void 0, function* () {
            // let addressList = await Address.findById(args.userId);
            let addressList = yield Address_1.default.find({
                userId: args.userId,
            });
            console.log("addressList : ", addressList);
            return {
                message: "Success",
                statusCode: 200,
                data: addressList,
            };
        });
    }
    editAddress(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield Address_1.default.findOne({
                _id: args.addressId,
                userId: args.userId,
            });
            console.log("address : ", address);
            if (!address) {
                return {
                    message: "Address not found",
                    statusCode: 404,
                };
            }
            console.log("args before  : ", args);
            delete args.userId;
            delete args.addressId;
            console.log("args after: ", args);
            const updates = Object.keys(args);
            const allowedUpdates = [
                "name",
                "mobileNo",
                "pinCode",
                "country",
                "state",
                "city",
                "billingAddress",
                "shippingAddress",
                "locality",
                "isDefault",
                "type",
            ];
            const isValidOperation = updates.every((update) => {
                return allowedUpdates.includes(update);
            });
            if (!isValidOperation) {
                return {
                    message: " Operation invalid",
                    statusCode: 400,
                };
            }
            try {
                // const user = await User.findById(req.params.id);
                updates.forEach((update) => (address[update] = args[update]));
                yield address.save();
            }
            catch (error) {
                console.log(error);
            }
            return {
                message: "Address updated",
                statusCode: 200,
            };
        });
    }
    deleteAddress(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield Address_1.default.findOne({
                _id: args.addressId,
                userId: args.userId,
            });
            console.log("address : ", address);
            if (!address) {
                return {
                    message: "Address not found",
                    statusCode: 404,
                };
            }
            yield address.remove();
            return {
                message: "Address removed",
                statusCode: 200,
            };
        });
    }
}
exports.AddressDataRepositoryImpl = AddressDataRepositoryImpl;
