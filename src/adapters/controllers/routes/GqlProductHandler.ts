import { AddMainCategoryCase } from "../../../usecases/cases/product/AddMainCategory";
import { AddProductCategoryCase } from "../../../usecases/cases/product/AddProductCategoryCase";
import { AllProductCategoriesCreatedByUserCase } from "../../../usecases/cases/product/AllProductCategoriesCreatedByUserCase";
import { AllProductCategoryCase } from "../../../usecases/cases/product/AllProductCategoryCase";
import { DeleteMainCategoryByIdCase } from "../../../usecases/cases/product/DeleteMainCategoryById";
import { DeleteProductCategoryByIdCase } from "../../../usecases/cases/product/DeleteProductCategoryByIdCase";
import { GetAllMainCategoryCase } from "../../../usecases/cases/product/GetAllMainCategory";
import { GetMainCategoryByIdCase } from "../../../usecases/cases/product/GetMainCategoryById";
import { GetMainCategoryByUserIdCase } from "../../../usecases/cases/product/GetMainCategoryByUserIdCase";
import { GetProductCategoryByIdCase } from "../../../usecases/cases/product/GetProductCategoryByIdCase";
import { UpdateMainCategoryByIdCase } from "../../../usecases/cases/product/UpdateMainCategoryById";
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
    Category:string,
    createdBY: any
  ) => {
    try {
      const res = await new DeleteProductCategoryByIdCase(
        new ProductDataRepositoryImpl()
      ).deleteProductCategoryById(Category,createdBY);
      return res;
    } catch (error) {
      return error;
    }
  };
}
