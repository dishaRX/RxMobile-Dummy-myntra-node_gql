import { AddressDataRepository } from "../../repositories/AddressDataRepository";

export class GetAddressListCase {
  addressDataRepository: AddressDataRepository;

  constructor(addressDataRepository: AddressDataRepository) {
    this.addressDataRepository = addressDataRepository;
  }

  public getAddressList = async (args: any) =>
    await this.addressDataRepository.getAddressList(args);
}
