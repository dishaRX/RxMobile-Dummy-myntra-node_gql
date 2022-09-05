export interface ProductDataRepository {

    getAllProducts(): Promise<any>;

    getProductByPrice(min: any, max: any): Promise<any>;

    getProductById(id: any): Promise<any>;

    addNewProduct(id: any, description: any, price: any): Promise<any>;

    addNewProductReview(id: any, rating: any, comment: any): Promise<any>;

}