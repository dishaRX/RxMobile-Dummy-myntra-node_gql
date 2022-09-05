import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class AddNewProductReviewCase {

    productDataRepository: ProductDataRepository;

    constructor(productDataRepository: ProductDataRepository) {
        this.productDataRepository = productDataRepository;
    }

    public addNewProductReview = async (id: any, rating: any, comment: any) =>
        await this.productDataRepository.addNewProductReview(id, rating, comment);

}