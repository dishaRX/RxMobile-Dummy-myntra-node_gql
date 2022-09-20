import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class AddProductCategoryCase {
  productcategoryDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.productcategoryDataRepository = productDataRepository;
  }

  public addProductCategory = async (
    MainCategoryName: String,
    Categoryname: string,
    Createdby: any
  ) => {
    return await this.productcategoryDataRepository.addProductCategory(
      MainCategoryName,
      Categoryname,
      Createdby
    );
  };
}
