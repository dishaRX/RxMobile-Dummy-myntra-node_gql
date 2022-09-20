import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class AllProductCategoryCase {
  allproductcategoryDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.allproductcategoryDataRepository = productDataRepository;
  }

  public getAllProductCategories = async (
    Createdby: any
  ) => {
    return await this.allproductcategoryDataRepository.getAllProductCategories(
      Createdby
    );
  };
}