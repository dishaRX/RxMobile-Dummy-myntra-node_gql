import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetProductBrandByIdCase {
  productbrandbyidDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.productbrandbyidDataRepository = productDataRepository;
  }

  public getProductBrandById = async (productid: string) => {
    return await this.productbrandbyidDataRepository.getProductBrandById(
      productid
    );
  };
}
