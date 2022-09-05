import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetProductByIdCase {

    productDataRepository: ProductDataRepository;

    constructor(productDataRepository: ProductDataRepository) {
        this.productDataRepository = productDataRepository;
    }

    public getProductById = async (id: any) =>
        await this.productDataRepository.getProductById(id);
}