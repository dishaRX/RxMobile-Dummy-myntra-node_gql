import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class DeleteMainCategoryByIdCase {
  deletemaincategorybyidDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.deletemaincategorybyidDataRepository = productDataRepository;
  }

  public deleteMainCategoryById = async (productid: string, admin: any) => {
    return await this.deletemaincategorybyidDataRepository.deleteMainCategoryById(
      productid,
      admin
    );
  };
}
