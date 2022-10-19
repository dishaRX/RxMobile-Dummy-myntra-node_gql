import { AddToWishlistCase } from "../../../usecases/cases/wishlist/AddToWishlist";
import { GetWishlistItemListCase } from "../../../usecases/cases/wishlist/GetWishlistItemList";
import { RemoveItemFromWishlistCase } from "../../../usecases/cases/wishlist/RemoveItemFromWishlist";

import { WishlistDataRepositoryImpl } from "../../gateways/repositories_impl/WishlistDataRepositoryImpl";
export class WishlistMutationHandler {
  //Wishlist
  static addToWishlist = async (args: any) => {
    try {
      const res = await new AddToWishlistCase(
        new WishlistDataRepositoryImpl()
      ).addToWishlist(args);
      return res;
    } catch (err) {
      return err;
    }
  };

  static removeItemFromWishlist = async (args: any) => {
    try {
      const res = await new RemoveItemFromWishlistCase(
        new WishlistDataRepositoryImpl()
      ).removeItemFromWishlist(args);
      return res;
    } catch (err) {
      return err;
    }
  };
}

export class WishlistQueryHandler {
  static getWishlistItemList = async (args: any) => {
    try {
      const res = await new GetWishlistItemListCase(
        new WishlistDataRepositoryImpl()
      ).getWishlistItemList(args);
      return res;
    } catch (err) {
      return err;
    }
  };
}
