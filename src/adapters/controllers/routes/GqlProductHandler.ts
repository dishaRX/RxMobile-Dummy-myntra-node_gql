import { GetAllProductsCase } from "../../../usecases/cases/product/GetAllProducts";
import { AddNewProductCase } from "../../../usecases/cases/product/AddNewProduct";
import { GetProductByIdCase } from "../../../usecases/cases/product/GetProductById";
import { GetProductByPriceCase } from "../../../usecases/cases/product/GetProductByPrice";
import { AddNewProductReviewCase } from "../../../usecases/cases/product/AddNewProductReview";
import { ProductDataRepositoryImpl } from "../../gateways/repositories_impl/ProductDataRepositoryImpl";

class ProductHandler {
    //Products
    static getAllProducts = async () => {
        try {
            const res = await new GetAllProductsCase(new ProductDataRepositoryImpl()).getAllProducts();
            return res;
        } catch (error: any) {
            return error;
        }
    }

    static getProductByPrice = async (min: any, max: any) => {
        try {
            const res = await new GetProductByPriceCase(new ProductDataRepositoryImpl()).getProductByPrice(min, max);
            return res;
        } catch (error: any) {
            return error;
        }
    }

    static getProductById = async (id: any) => {
        try {
            const res = await new GetProductByIdCase(new ProductDataRepositoryImpl()).getProductById(id);
            return res;
        } catch (error: any) {
            return error;
        }
    }

}

class ProductMutationHandler {

    //Products
    static addNewProduct = async (id: any, description: any, price: any) => {
        try {
            const res = await new AddNewProductCase(new ProductDataRepositoryImpl()).addNewProduct(id, description, price);
            return res;
        } catch (error: any) {
            return error;
        }
    }

    static addNewProductReview = async (id: any, rating: any, comment: any) => {
        try {
            const res = await new AddNewProductReviewCase(new ProductDataRepositoryImpl()).addNewProductReview(id, rating, comment);
            return res;
        } catch (error: any) {
            return error;
        }
    }

}

export {
    ProductHandler,
    ProductMutationHandler
}