import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetProductByPriceCase {

    productDataRepository: ProductDataRepository;

    constructor(productDataRepository: ProductDataRepository) {
        this.productDataRepository = productDataRepository;
    }

    public getProductByPrice = async (min: any, max: any) =>
        await this.productDataRepository.getProductByPrice(min, max);
}