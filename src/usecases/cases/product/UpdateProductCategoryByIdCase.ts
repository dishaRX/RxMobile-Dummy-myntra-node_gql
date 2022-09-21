import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class UpdateProductCategoryByIdCase {
  updateproductcategorybyidDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.updateproductcategorybyidDataRepository = productDataRepository;
  }

  public updateProductCategoryById = async (
    productid: string,
    updateddata: any,
    admin: any
  ) => {
    return await this.updateproductcategorybyidDataRepository.updateProductCategoryById(
      productid,
      updateddata,
      admin
    );
  };
}
