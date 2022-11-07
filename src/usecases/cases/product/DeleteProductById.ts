import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class DeleteProductByIdCase {
  deleteproductbyidDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this. deleteproductbyidDataRepository = productDataRepository;
  }

  public deleteProductById = async (productid: string, admin: any) => {
    return await this.deleteproductbyidDataRepository. deleteProductById(
      productid,
      admin
    );
  };
}
