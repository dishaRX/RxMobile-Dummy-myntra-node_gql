import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class RemoveItemFromWishlistCase {
  maincategoryDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.maincategoryDataRepository = productDataRepository;
  }

  public removeItemFromWishlist = async (args: any) => {
    return await this.maincategoryDataRepository.removeItemFromWishlist(args);
  };
}
