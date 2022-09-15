import { AddressDataRepository } from "../../repositories/AddressDataRepository";

export class DeleteAddressCase {
  addressDataRepository: AddressDataRepository;

  constructor(addressDataRepository: AddressDataRepository) {
    this.addressDataRepository = addressDataRepository;
  }

  public deleteAddress = async (args: any) =>
    await this.addressDataRepository.deleteAddress(args);
}
