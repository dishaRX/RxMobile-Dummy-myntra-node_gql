import { AddToCartCase } from "../../../usecases/cases/cart/AddToCart";
import { GetCartItemListCase } from "../../../usecases/cases/cart/GetCartItemList";
import { UpdateCartItemCase } from "../../../usecases/cases/cart/UpdateCartItem";
import { CartDataRepositoryImpl } from "../../gateways/repositories_impl/CartDataRepositoryImpl";

export class CartMutationHandler {
  //Wishlist
  static addItemToCart = async (args: any) => {
    try {
      const res = await new AddToCartCase(
        new CartDataRepositoryImpl()
      ).addItemToCart(args);
      return res;
    } catch (err) {
      return err;
    }
  };

  static updateCartItem = async (args: any) => {
    try {
      const res = await new UpdateCartItemCase(
        new CartDataRepositoryImpl()
      ).updateCartItem(args);
      return res;
    } catch (err) {
      return err;
    }
  };
}

export class CartQueryHandler {
  static getCartItemList = async (args: any) => {
    try {
      const res = await new GetCartItemListCase(
        new CartDataRepositoryImpl()
      ).getCartItemList(args);
      return res;
    } catch (err) {
      return err;
    }
  };
}
