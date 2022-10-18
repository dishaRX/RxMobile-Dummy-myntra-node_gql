import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetCategoryMenuListCase {
  maincategoryDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.maincategoryDataRepository = productDataRepository;
  }

  public getCategoryMenuList = async () => {
    return await this.maincategoryDataRepository.getCategoryMenuList();
  };
}
