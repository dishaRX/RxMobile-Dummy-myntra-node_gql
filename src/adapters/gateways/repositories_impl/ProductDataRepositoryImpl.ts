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
  async getAllMainCategory(): Promise<any> {
    try {
      const data = await MainCategory.find();
      return {
        message: "success true",
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
  async getMainCategoryById(args: String): Promise<any> {
    if (!args) {
      return {
        message: "main category id can not be null",
        statusCode: 201,
      };
    }
    try {
      const data = await MainCategory.findOne({ _id: args });
      console.log(data);
      return {
        message: "success true",
        statusCode: 201,
        data: data,
      };
    } catch (error) {
      return {
        message: "Not found",
        statusCode: 404,
        data: error,
      };
    }
  }
  async deleteMainCategoryById(args: String, createdBy: any): Promise<any> {
    if (!args) {
      return {
        message: "main category id can not be null",
        statusCode: 201,
      };
    }
    try {
      const deletedItem = await MainCategory.findOneAndDelete({
        _id: args,
        createdBY: createdBy._id,
      });
      return {
        message: "success true",
        statusCode: 201,
        data: deletedItem,
      };
    } catch (error) {
      return {
        message: "success false",
        statusCode: 501,
        data: error,
      };
    }
  }
}
