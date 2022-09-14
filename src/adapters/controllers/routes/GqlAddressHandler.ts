import { AddUserAddressCase } from "../../../usecases/cases/address/AddUserAddress";
import { AddressDataRepositoryImpl } from "../../gateways/repositories_impl/AddressDataRepositoryImpl";

class AddressQueryHandler {}

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
