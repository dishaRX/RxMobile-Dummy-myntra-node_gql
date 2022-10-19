import { AddToCartCase } from "../../../usecases/cases/cart/AddToCart";
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
}
