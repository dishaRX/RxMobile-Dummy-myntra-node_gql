import { AddressDataRepository } from "../../../usecases/repositories/AddressDataRepository";
import Address from "../../../domains/models/Address";
const mongoose = require("mongoose");

export class AddressDataRepositoryImpl implements AddressDataRepository {
  async addAddress(args: any): Promise<any> {
    const {
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
    } = args;

    let address = new Address({
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

    let addresssRes = await address.save();

    return {
      message: "Address added",
      statusCode: 200,
      data: addresssRes,
    };
  }
  async getAddressList(args: any): Promise<any> {
    // let addressList = await Address.findById(args.userId);
    let addressList = await Address.find({
      userId: args.userId,
    });
    console.log("addressList : ", addressList);

    return {
      message: "Success",
      statusCode: 200,
      data: addressList,
    };
  }
}
