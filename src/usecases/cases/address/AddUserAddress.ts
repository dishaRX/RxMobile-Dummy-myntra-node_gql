import { AddressDataRepository } from "../../repositories/AddressDataRepository";

export class AddUserAddressCase {
  addressDataRepository: AddressDataRepository;

  constructor(addressDataRepository: AddressDataRepository) {
    this.addressDataRepository = addressDataRepository;
  }

  public addAddress = async (args: any) =>
    await this.addressDataRepository.addAddress(args);
}
