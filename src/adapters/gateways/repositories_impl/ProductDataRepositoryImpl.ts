import { ProductDataRepository } from "../../../usecases/repositories/ProductDataRepository";
import MainCategory from "../../../domains/models/MainCategory";
export class ProductDataRepositoryImpl implements ProductDataRepository {
  async addMainCategory(
    MainCategoryName: String,
    Createdby: any
  ): Promise<any> {
    if (!MainCategoryName) {
      return {
        message: "main category can not be null",
        statusCode: 201,
      };
    }
    try {
      const data = await MainCategory.create({
        mainCategory: MainCategoryName,
        createdBY: Createdby,
      });
      return {
        message: "Success",
        statusCode: 201,
        data: data,
      };
    } catch (error) {
      return {
        message: "not found",
        statusCode: 404,
        data: error,
      };
    }
  }
}
