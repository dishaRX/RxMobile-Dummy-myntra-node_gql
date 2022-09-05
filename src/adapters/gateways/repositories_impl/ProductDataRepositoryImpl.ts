import { ProductDataRepository } from "../../../usecases/repositories/ProductDataRepository";
import Product from "../../../domains/models/Products";

export class ProductDataRepositoryImpl implements ProductDataRepository {

    async getAllProducts() {
        var products = await Product.find({});
        return products;
    }

    async getProductByPrice(min: any, max: any): Promise<any> {
        var products = await this.getAllProducts();
        return products.filter((product: any) => {
            return product.price >= min && product.price <= max;
        })
    }

    async getProductById(id: any): Promise<typeof Product> {
        var products = await this.getAllProducts();
        return products.find((product: any) => {
            return product.id === id;
        })
    }

    async addNewProduct(id: any, description: any, price: any): Promise<any> {

        let product = new Product({
            id: id,
            description: description,
            price: price,
            reviews: []
        })

        return product.save();
    }

    async addNewProductReview(id: any, rating: any, comment: any): Promise<any> {
        var reviews = {
            rating: rating,
            comment: comment,
        };
        const filter = { id: id };
        let res = await Product.findOneAndUpdate(filter, { reviews: reviews });
        if (res !== null) {
            return reviews;
        } else {
            throw new Error("Id doesn't exists")
        }

    }
}