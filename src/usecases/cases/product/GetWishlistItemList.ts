import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetWishlistItemListCase {
  maincategoryDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.maincategoryDataRepository = productDataRepository;
  }

  public getWishlistItemList = async (args: any) => {
    return await this.maincategoryDataRepository.getWishlistItemList(args);
  };
}
