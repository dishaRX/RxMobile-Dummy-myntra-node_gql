import { CartDataRepository } from "../../repositories/CartDataRepository";

export class AddToCartCase {
  cartDataRepository: CartDataRepository;
  constructor(cartDataRepository: CartDataRepository) {
    this.cartDataRepository = cartDataRepository;
  }

  public addItemToCart = async (args: any) => {
    return await this.cartDataRepository.addItemToCart(args);
  };
}
