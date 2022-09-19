import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class AddMainCategoryCase {
  maincategoryDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.maincategoryDataRepository = productDataRepository;
  }

  public addMainCategory = async (MainCategoryName: String, Createdby: any) => {
    return await this.maincategoryDataRepository.addMainCategory(
      MainCategoryName,
      Createdby
    );
  };
}
