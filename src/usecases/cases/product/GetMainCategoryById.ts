import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetMainCategoryByIdCase {
  maincategorybyidDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.maincategorybyidDataRepository = productDataRepository;
  }

  public getMainCategoryById = async (productid: string) => {
    return await this.maincategorybyidDataRepository.getMainCategoryById(
      productid
    );
  };
}
