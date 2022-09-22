import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetAllProductBrandsCreatedByUserCase {
  allproductbrandcreatedbyuserDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.allproductbrandcreatedbyuserDataRepository = productDataRepository;
  }

  public getAllProductBrandCreatedByUser = async (productid: any) => {
    return await this.allproductbrandcreatedbyuserDataRepository.getAllProductBrandCreatedByUser(
      productid
    );
  };
}
