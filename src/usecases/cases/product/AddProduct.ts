import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class AddProductCase {
 addProductDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.addProductDataRepository = productDataRepository;
  }

  public addProduct = async (   Maincategory:any,
    Category:String,
    Brand:String,
    Productname:String,
    Productdetails:String,
    ProductImage:any,
    Deliverable:String,
    Returnable:Boolean) => {
    return await this.addProductDataRepository.addProduct(
        Maincategory,
        Category,
        Brand,
        Productname,
        Productdetails,
        ProductImage,
        Deliverable,
        Returnable
    );
  };
}
