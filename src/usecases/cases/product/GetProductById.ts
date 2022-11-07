import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetProductByIdCase {
  productbyidDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.productbyidDataRepository = productDataRepository;
  }

  public getProductById = async (productid: string) => {
    return await this.productbyidDataRepository.getProductById(productid);
  };
}
