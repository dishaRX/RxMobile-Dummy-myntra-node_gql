import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class UpdateProductCase {
 updateProductDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this.updateProductDataRepository = productDataRepository;
  }

  public updateProduct = async (   
    Productname:String,
    Productdetails:String,
    ProductImage:any,
    Deliverable:String,
    Returnable:Boolean,
    Productid:String,
    ProductSize:String,
    ProductPrice:String
    ) => {
    return await this.updateProductDataRepository.updateProduct(
        Productname,
        Productdetails,
        ProductImage,
        Deliverable,
        Returnable,
        Productid,
        ProductSize,
        ProductPrice
    );
  };
}
