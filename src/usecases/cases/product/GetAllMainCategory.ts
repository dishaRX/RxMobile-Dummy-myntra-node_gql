import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetAllMainCategoryCase {
  maincategoryDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.maincategoryDataRepository = productDataRepository;
  }

  public GetAllMainCategory = async () => {
    return await this.maincategoryDataRepository.getAllMainCategory();
  };
}
