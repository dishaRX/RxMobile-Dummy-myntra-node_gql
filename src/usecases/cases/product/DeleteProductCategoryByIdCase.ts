import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class DeleteProductCategoryByIdCase {
  deleteproductcategorybyidDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.deleteproductcategorybyidDataRepository = productDataRepository;
  }

  public deleteProductCategoryById = async (productid: string, admin: any) => {
    return await this.deleteproductcategorybyidDataRepository.deleteProductCategoryById(
      productid,
      admin
    );
  };
}
