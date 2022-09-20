import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetProductCategoryByIdCase {
  maincategorybyidDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.maincategorybyidDataRepository = productDataRepository;
  }

  public getProductCategoryById = async (productid: string) => {
    return await this.maincategorybyidDataRepository.getProductCategoryById(
      productid
    );
  };
}
