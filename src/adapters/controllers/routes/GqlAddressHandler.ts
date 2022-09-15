import { AddUserAddressCase } from "../../../usecases/cases/address/AddUserAddress";
import { GetAddressListCase } from "../../../usecases/cases/address/GetAddressList";
import { AddressDataRepositoryImpl } from "../../gateways/repositories_impl/AddressDataRepositoryImpl";

class AddressQueryHandler {
  static getAddressList = async (args: any) => {
    try {
      const res = await new GetAddressListCase(
        new AddressDataRepositoryImpl()
      ).getAddressList(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };
}

class AddressMutationHandler {
  //Addresses
  static addAddress = async (args: any) => {
    try {
      const res = await new AddUserAddressCase(
        new AddressDataRepositoryImpl()
      ).addAddress(args);
      return res;
    } catch (error: any) {
      return error;
    }
  };
}

export { AddressQueryHandler, AddressMutationHandler };
