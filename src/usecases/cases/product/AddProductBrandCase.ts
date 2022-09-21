import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class AddProductBrandCase {
  productbrandDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.productbrandDataRepository = productDataRepository;
  }

  public addProductBrand = async (
    MainCategoryName: string,
    Categoryname: string,
    Brandname:string,
    Createdby: any 
  ) => {
    return await this.productbrandDataRepository.addProductBrand(
      MainCategoryName,
      Categoryname,
      Brandname,
      Createdby
    );
  };
}
