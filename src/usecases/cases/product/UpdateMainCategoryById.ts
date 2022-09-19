import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class UpdateMainCategoryByIdCase {
  updatemaincategorybyidDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.updatemaincategorybyidDataRepository = productDataRepository;
  }

  public deleteMainCategoryById = async (productid: string,updateddata:any ,admin: any) => {
    return await this.updatemaincategorybyidDataRepository.updateMainCategoryById(
      productid,
      updateddata,
      admin
    );
  };
}
