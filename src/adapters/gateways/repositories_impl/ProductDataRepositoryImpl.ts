import { ProductDataRepository } from "../../../usecases/repositories/ProductDataRepository";
import MainCategory from "../../../domains/models/MainCategory";
import Category from "../../../domains/models/Category";

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
  async updateMainCategoryById(
    updatedata: String,
    productid: any,
    createdBy: any
  ): Promise<any> {
    if (!productid) {
      return {
        message: "main category id can not be null",
        statusCode: 201,
      };
    }
    try {
      const forupdate = {
        mainCategory: updatedata,
      };
      const data = await MainCategory.findOneAndUpdate(
        { _id: productid, createdBY: createdBy._id },
        forupdate
      );
      return {
        message: "success true",
        statusCode: 201,
        data: data,
      };
    } catch (error) {
      return {
        message: "success false",
        statusCode: 501,
        data: error,
      };
    }
  }
  async getMainCategoryByUserId(args: any): Promise<any> {
    try {
      const data = await MainCategory.find({ createdBY: args._id });
      if (data.length > 0) {
        return {
          message: "success true",
          statusCode: 201,
          data: data,
        };
      } else {
        return {
          message: "NO main categories found",
          statusCode: 201,
        };
      }
    } catch (error) {
      return {
        message: "success false",
        statusCode: 501,
        data: error,
      };
    }
  }
  async addProductCategory(
    MainCategoryName: String,
    Categoryname: String,
    Createdby: any
  ): Promise<any> {
    if (!MainCategoryName || !Categoryname) {
      return {
        message: "please fill all the details",
        statusCode: 501,
      };
    }
    try {
      const main = await MainCategory.findOne({
        mainCategory: MainCategoryName,
      });
      const data = await Category.create({
        Categoryname: Categoryname,
        mainCategory: main,
        createdBy: Createdby._id,
      });
      return {
        message: "success true",
        statusCode: 201,
        data: data,
      };
    } catch (error) {
      return {
        message: "success false",
        statusCode: 404,
      };
    }
  }
  async getAllProductCategories(createdBy: any): Promise<any> {
    try {
      const data = await Category.find().populate([
        "createdBy",
        "mainCategory",
      ]);
      return {
        message: "success true",
        statusCode: 201,
        data: data,
      };
    } catch (error) {
      return {
        message: "success false",
        statusCode: 404,
      };
    }
  }
  async AllProductCategoriesCreatedByUser(createdBy: any): Promise<any> {
    try {
      const data = await Category.find({ createdBy: createdBy._id });
      console.log(data);
      if (data.length > 0) {
        return {
          message: "success true",
          statusCode: 201,
          data: data,
        };
      } else {
        return {
          message: "no product categories found",
          statusCode: 201,
        };
      }
    } catch (error) {
      return {
        message: "success false",
        statusCode: 404,
      };
    }
  }
  async getProductCategoryById(args: String): Promise<any> {
    try {
      const data = await Category.findOne({ _id: args }).populate([
        "mainCategory",
        "createdBy",
      ]);
      return {
        message: "success true",
        statusCode: 201,
        data: data,
      };
    } catch (error) {
      return {
        message: "success false",
        statusCode: 404,
      };
    }
  }
  async deleteProductCategoryById(args: String, createdBy: any): Promise<any> {
    if (!args) {
      return {
        message: "main category id can not be null",
        statusCode: 201,
      };
    }

    try {
      const deletedItem = await Category.findOneAndDelete({
        _id: args,
        createdBy: createdBy._id,
      });
      return {
        message: "success true",
        statusCode: 201,
        data: deletedItem,
      };
    } catch (error) {
      return {
        message: "success false",
        statusCode: 404,
      };
    }
  }
}
