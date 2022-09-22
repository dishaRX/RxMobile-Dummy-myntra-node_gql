import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class DeleteProductBrandByIdCase {
  deleteproductbrandbyidDataRepository: ProductDataRepository;
  constructor(productDataRepository: ProductDataRepository) {
    this. deleteproductbrandbyidDataRepository = productDataRepository;
  }

  public deleteProductBrandById = async (productid: string, admin: any) => {
    return await this.deleteproductbrandbyidDataRepository. deleteProductBrandById(
      productid,
      admin
    );
  };
}
