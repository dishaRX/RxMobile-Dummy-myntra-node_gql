import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class UpdateProductBrandByIdCase {
  updateproductbrandbyidDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.updateproductbrandbyidDataRepository = productDataRepository;
  }

  public updateProductBrandById = async (
    productid: string,
    updateddata: any,
    admin: any
  ) => {
    return await this.updateproductbrandbyidDataRepository.updateProductBrandById(
      productid,
      updateddata,
      admin
    );
  };
}
