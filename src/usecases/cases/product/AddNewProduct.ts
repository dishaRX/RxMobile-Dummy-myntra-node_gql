import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class AddNewProductCase {

    productDataRepository: ProductDataRepository;

    constructor(productDataRepository: ProductDataRepository) {
        this.productDataRepository = productDataRepository;
    }

    public addNewProduct = async (id: any, description: any, price: any) =>
        await this.productDataRepository.addNewProduct(id, description, price);

}