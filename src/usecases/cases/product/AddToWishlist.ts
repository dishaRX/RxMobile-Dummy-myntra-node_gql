import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class AddToWishlistCase {
  maincategoryDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.maincategoryDataRepository = productDataRepository;
  }

  public addToWishlist = async (args: any) => {
    return await this.maincategoryDataRepository.addToWishlist(args);
  };
}
