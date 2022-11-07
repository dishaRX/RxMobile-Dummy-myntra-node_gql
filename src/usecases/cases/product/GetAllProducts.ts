import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetAllProductsCase {
  allproductsDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.allproductsDataRepository = productDataRepository;
  }

  public getAllProducts = async (createdBY:any) => {
    return await this.allproductsDataRepository.getAllProducts(createdBY);
  };
}
