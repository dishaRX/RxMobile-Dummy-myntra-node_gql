import { AddMainCategoryCase } from "../../../usecases/cases/product/AddMainCategory";
import { GetAllMainCategoryCase } from "../../../usecases/cases/product/GetAllMainCategory";
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
}
