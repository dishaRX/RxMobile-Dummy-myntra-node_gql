import { CartDataRepository } from "../../repositories/CartDataRepository";

export class GetCartItemListCase {
  cartDataRepository: CartDataRepository;
  constructor(cartDataRepository: CartDataRepository) {
    this.cartDataRepository = cartDataRepository;
  }

  public getCartItemList = async (args: any) => {
    return await this.cartDataRepository.getCartItemList(args);
  };
}
