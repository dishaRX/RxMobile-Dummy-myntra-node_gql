import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetAllProductBrandsCase {
  allproductbrandsDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.allproductbrandsDataRepository = productDataRepository;
  }

  public getAllProductBrands = async (
    Createdby: any
  ) => {
    return await this.allproductbrandsDataRepository.getAllProductBrands(
      Createdby
    );
  };
}