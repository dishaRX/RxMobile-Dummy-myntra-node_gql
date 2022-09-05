import { ProductDataRepository } from "../../repositories/ProductDataRepository";

export class GetAllProductsCase {

    productDataRepository: ProductDataRepository;

    constructor(productDataRepository: ProductDataRepository) {
        this.productDataRepository = productDataRepository;
    }

    public getAllProducts = async () =>
        await this.productDataRepository.getAllProducts();

    // public getProductByPrice = async (min: any, max: any) =>
    //     await this.productDataRepository.getProductByPrice(min, max);

    // public getProductById = async (id: any) =>
    //     await this.productDataRepository.getProductById(id);

    // public addNewProduct = async (id: any, description: any, price: any) =>
    //     await this.productDataRepository.addNewProduct(id, description, price);

    // public addNewProductReview = async (id: any, rating: any, comment: any) =>
    //     await this.productDataRepository.addNewProductReview(id, rating, comment);

}