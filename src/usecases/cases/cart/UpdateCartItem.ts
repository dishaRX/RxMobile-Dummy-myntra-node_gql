import { CartDataRepository } from "../../repositories/CartDataRepository";

export class UpdateCartItemCase {
  cartDataRepository: CartDataRepository;
  constructor(cartDataRepository: CartDataRepository) {
    this.cartDataRepository = cartDataRepository;
  }

  public updateCartItem = async (args: any) => {
    return await this.cartDataRepository.updateCartItem(args);
  };
}
