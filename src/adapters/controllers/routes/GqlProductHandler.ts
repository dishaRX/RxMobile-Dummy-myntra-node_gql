import { AddMainCategoryCase } from "../../../usecases/cases/product/AddMainCategory";
import { AddProductCase } from "../../../usecases/cases/product/AddProduct";
import { AddProductBrandCase } from "../../../usecases/cases/product/AddProductBrandCase";
import { AddProductCategoryCase } from "../../../usecases/cases/product/AddProductCategoryCase";
import { AllProductCategoriesCreatedByUserCase } from "../../../usecases/cases/product/AllProductCategoriesCreatedByUserCase";
import { AllProductCategoryCase } from "../../../usecases/cases/product/AllProductCategoryCase";
import { DeleteMainCategoryByIdCase } from "../../../usecases/cases/product/DeleteMainCategoryById";
import { DeleteProductBrandByIdCase } from "../../../usecases/cases/product/DeleteProductBrandByIdCase";
import { DeleteProductByIdCase } from "../../../usecases/cases/product/DeleteProductById";
import { DeleteProductCategoryByIdCase } from "../../../usecases/cases/product/DeleteProductCategoryByIdCase";
import { GetAllMainCategoryCase } from "../../../usecases/cases/product/GetAllMainCategory";
import { GetAllProductBrandsCase } from "../../../usecases/cases/product/GetAllProductBrandsCase";
import { GetAllProductBrandsCreatedByUserCase } from "../../../usecases/cases/product/GetAllProductBrandsCreatedByUserCase";
import { GetAllProductsCase } from "../../../usecases/cases/product/GetAllProducts";
import { GetCategoryMenuListCase } from "../../../usecases/cases/product/GetCategoryMenuList";
import { GetMainCategoryByIdCase } from "../../../usecases/cases/product/GetMainCategoryById";
import { GetMainCategoryByUserIdCase } from "../../../usecases/cases/product/GetMainCategoryByUserIdCase";
import { GetProductBrandByIdCase } from "../../../usecases/cases/product/GetProductBrandByIdCase";
import { GetProductByIdCase } from "../../../usecases/cases/product/GetProductById";
import { GetProductCategoryByIdCase } from "../../../usecases/cases/product/GetProductCategoryByIdCase";
import { UpdateMainCategoryByIdCase } from "../../../usecases/cases/product/UpdateMainCategoryById";
import { UpdateProductCase } from "../../../usecases/cases/product/UpdateProduct";
import { UpdateProductBrandByIdCase } from "../../../usecases/cases/product/UpdateProductBrandByIdCase";
import { UpdateProductCategoryByIdCase } from "../../../usecases/cases/product/UpdateProductCategoryByIdCase";
import { ProductDataRepositoryImpl } from "../../gateways/repositories_impl/ProductDataRepositoryImpl";
export class ProductMutationHandler {
  //Products
  static addMainCategory = async (MainCategoryName: String, Createdby: any) => {
    try {
      const res = await new AddMainCategoryCase(
        new ProductDataRepositoryImpl()
      ).addMainCategory(MainCategoryName, Createdby);
      return res;
    } catch (error: any) {
      return error;
    }
  };
  static updateMainCategoryById = async (
    productid: string,
    MainCategory: string,
    createdBY: any
  ) => {
    try {
      const res = await new UpdateMainCategoryByIdCase(
        new ProductDataRepositoryImpl()
      ).deleteMainCategoryById(productid, MainCategory, createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
  static addProductCategory = async (
    maincategoryname: string,
    categoryname: string,
    user: any
  ) => {
    try {
      const res = await new AddProductCategoryCase(
        new ProductDataRepositoryImpl()
      ).addProductCategory(maincategoryname, categoryname, user);
      return res;
    } catch (error) {
      return error;
    }
  };
  static updateProductCategoryById = async (
    productid: string,
    Category: string,
    createdBY: any
  ) => {
    try {
      const res = await new UpdateProductCategoryByIdCase(
        new ProductDataRepositoryImpl()
      ).updateProductCategoryById(productid, Category, createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
  static addProductBrand = async (
    maincategory: string,
    category: string,
    brandname: string,
    user: any
  ) => {
    try {
      const res = await new AddProductBrandCase(
        new ProductDataRepositoryImpl()
      ).addProductBrand(maincategory, category, brandname, user);
      return res;
    } catch (error) {
      return error;
    }
  };
  static updateProductBrandById = async (
    productid: string,
    Category: string,
    createdBY: any
  ) => {
    try {
      console.log(productid);
      const res = await new UpdateProductBrandByIdCase(
        new ProductDataRepositoryImpl()
      ).updateProductBrandById(productid, Category, createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
  static addProduct = async (
    Maincategory: String,
    Category: String,
    Brand: String,
    Productname: String,
    Productdetails: String,
    ProductImage:any,
    Deliverable: String,
    Returnable: Boolean,
    ProductSize:String,
    ProductPrice:String
  ) => {
    try {
      const res = await new AddProductCase(
        new ProductDataRepositoryImpl()
      ).addProduct(Maincategory,
        Category,
        Brand,
        Productname,
        Productdetails,
        ProductImage,
        Deliverable,
        Returnable,
        ProductSize,
        ProductPrice
        );
      return res;
    } catch (error) {
      return error;
    }


  };
  static updateProduct = async (
    Productname: String,
    Productdetails: String,
    ProductImage:any,
    Deliverable: String,
    Returnable: Boolean,
    Productid:String,
    ProductSize:String,
    ProductPrice:String
  ) => {
    try {
      const res = await new UpdateProductCase(
        new ProductDataRepositoryImpl()
      ).updateProduct(
        Productname,
        Productdetails,
        ProductImage,
        Deliverable,
        Returnable,
        Productid,
        ProductSize,
        ProductPrice
        );
      return res;
    } catch (error) {
      return error;
    }


  };
}

export class ProductQueryHandler {
  static getMainCategory = async () => {
    try {
      const res = await new GetAllMainCategoryCase(
        new ProductDataRepositoryImpl()
      ).GetAllMainCategory();
      return res;
    } catch (err) {
      return err;
    }
  };
  static getMainCategoryById = async (productid: string) => {
    try {
      const res = await new GetMainCategoryByIdCase(
        new ProductDataRepositoryImpl()
      ).getMainCategoryById(productid);
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  };
  static deleteMainCategoryById = async (
    MainCategory: string,
    createdBY: any
  ) => {
    try {
      const res = await new DeleteMainCategoryByIdCase(
        new ProductDataRepositoryImpl()
      ).deleteMainCategoryById(MainCategory, createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
  static getMainCategoryByUserId = async (createdBY: any) => {
    try {
      const res = await new GetMainCategoryByUserIdCase(
        new ProductDataRepositoryImpl()
      ).getMainCategoryByUserId(createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
  static getAllProductCategories = async (createdBY: any) => {
    try {
      const res = await new AllProductCategoryCase(
        new ProductDataRepositoryImpl()
      ).getAllProductCategories(createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
  static AllProductCategoriesCreatedByUser = async (createdBY: any) => {
    try {
      const res = await new AllProductCategoriesCreatedByUserCase(
        new ProductDataRepositoryImpl()
      ).AllProductCategoriesCreatedByUser(createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
  static getProductCategoryById = async (productid: string) => {
    try {
      const res = await new GetProductCategoryByIdCase(
        new ProductDataRepositoryImpl()
      ).getProductCategoryById(productid);
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  };
  static deleteProductCategoryById = async (
    Category: string,
    createdBY: any
  ) => {
    try {
      const res = await new DeleteProductCategoryByIdCase(
        new ProductDataRepositoryImpl()
      ).deleteProductCategoryById(Category, createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
  static getAllProductBrands = async (createdBY: any) => {
    try {
      const res = await new GetAllProductBrandsCase(
        new ProductDataRepositoryImpl()
      ).getAllProductBrands(createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
  static getAllProductBrandCreatedByUser = async (createdBy: any) => {
    try {
      const res = await new GetAllProductBrandsCreatedByUserCase(
        new ProductDataRepositoryImpl()
      ).getAllProductBrandCreatedByUser(createdBy);
      return res;
    } catch (error) {
      return error;
    }
  };
  static deleteProductBrandById = async (Category: string, createdBY: any) => {
    try {
      const res = await new DeleteProductBrandByIdCase(
        new ProductDataRepositoryImpl()
      ).deleteProductBrandById(Category, createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
  static getProductBrandById = async (productid: string) => {
    try {
      const res = await new GetProductBrandByIdCase(
        new ProductDataRepositoryImpl()
      ).getProductBrandById(productid);
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  };

  static getCategoryMenuList = async () => {
    try {
      const res = await new GetCategoryMenuListCase(
        new ProductDataRepositoryImpl()
      ).getCategoryMenuList();
      return res;
    } catch (err) {
      return err;
    }
  };
  static getAllProducts = async (createdBY: any) => {
    try {
      const res = await new GetAllProductsCase(
        new ProductDataRepositoryImpl()
      ).getAllProducts(createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
  static getProductById = async (productid: string) => {
    try {
      const res = await new GetProductByIdCase(
        new ProductDataRepositoryImpl()
      ).getProductById(productid);
      return res;
    } catch (error) {
      return error;
    }
  };
  static deleteProductById = async (Product: string, createdBY: any) => {
    try {
      const res = await new DeleteProductByIdCase(
        new ProductDataRepositoryImpl()
      ).deleteProductById(Product, createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };

}
