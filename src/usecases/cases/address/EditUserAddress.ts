import { AddressDataRepository } from "../../repositories/AddressDataRepository";

export class EditUserAddressCase {
  addressDataRepository: AddressDataRepository;

  constructor(addressDataRepository: AddressDataRepository) {
    this.addressDataRepository = addressDataRepository;
  }

  public editAddress = async (args: any) =>
    await this.addressDataRepository.editAddress(args);
}
