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

  async editAddress(args: any): Promise<any> {
    const address = await Address.findOne({
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

      await address.save();
    } catch (error: any) {
      console.log(error);
    }

    return {
      message: "Address added",
      statusCode: 200,
    };
  }
}
