import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class AllProductCategoriesCreatedByUserCase {
  allproductcategoryDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.allproductcategoryDataRepository = productDataRepository;
  }

  public AllProductCategoriesCreatedByUser = async (
    Createdby: any
  ) => {
    return await this.allproductcategoryDataRepository.AllProductCategoriesCreatedByUser(
      Createdby
    );
  };
}