import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetMainCategoryByUserIdCase {
  maincategorybyuseridDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.maincategorybyuseridDataRepository = productDataRepository;
  }

  public getMainCategoryByUserId = async (productid: any) => {
    return await this.maincategorybyuseridDataRepository.getMainCategoryByUserId(
      productid
    );
  };
}
