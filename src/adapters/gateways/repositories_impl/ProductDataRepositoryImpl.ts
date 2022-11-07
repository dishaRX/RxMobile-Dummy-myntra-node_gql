import { ProductDataRepository } from "../../../usecases/repositories/ProductDataRepository";
import MainCategory from "../../../domains/models/MainCategory";
import Category from "../../../domains/models/Category";
import Brands from "../../../domains/models/Brands";
import Admin from "../../../domains/models/Admin";
const cloudinary = require("cloudinary");
import Product from "../../../domains/models/Product";
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
      console.log(data);
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
      const data = await MainCategory.find().populate([
        "category",
        "createdBY",
      ]);
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
      const data = await MainCategory.findOne({ _id: args }).populate(
        "category"
      );
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
      const brand = await Brands.find({ mainCategory: args });
      if (brand.length > 0) {
        const a = await Brands.deleteMany({ mainCategory: args });
        console.log("DELETED brands::", a);
      }
      const category = await Category.find({ mainCategory: args });
      if (category.length > 0) {
        const d = await Category.deleteMany({ mainCategory: args });
        console.log("categories deleted::", d);
      }
      const deletedItem = await MainCategory.findOneAndDelete({
        _id: args,
      });
      console.log("deletd item---->", deletedItem);
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
      let main = await MainCategory.findOne({
        mainCategory: MainCategoryName,
      });
      let data = await Category.create({
        Categoryname: Categoryname,
        mainCategory: main,
        createdBy: Createdby._id,
      });
      main?.category.push(data.id);
      const res = await main?.save();
      console.log("main data ::: res :: ", res);
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
      const data = await Category.find().populate(["mainCategory", "Brand"]);
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
      const Item = await Category.findOne({
        _id: args,
      }).populate("mainCategory");
      if (Item) {
        const s: any = await MainCategory.findById(Item.mainCategory?._id);
        const index = s.category.indexOf(args);
        s.category.splice(index, 1);
        const a = await s.save();
      }
      const brand = await Brands.find({ mainCategory: args });
      if (brand.length > 0) {
        const a = await Brands.deleteMany({ category: args });
        console.log("DELETED brands::", a);
      }
      const deletedItem = await Category.findOneAndDelete({
        _id: args,
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
  async updateProductCategoryById(
    productid: String,
    updatedata: String,
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
        Categoryname: updatedata,
      };
      console.log(forupdate);
      const data = await Category.findOneAndUpdate(
        { _id: productid, createdBy: createdBy._id },
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
  async addProductBrand(
    mainCategory: string,
    category: string,
    brandname: string,
    createdBy: any
  ): Promise<any> {
    if (!mainCategory || !category || !brandname) {
      return {
        message: "please fill all the details",
        statusCode: 501,
      };
    }
    try {
      const main = await MainCategory.findOne({ mainCategory: mainCategory });
      const categorydetails = await Category.findOne({
        Categoryname: category,
      });
      const user = await Admin.findOne({ _id: createdBy._id });
      const brand = await Brands.create({
        brandname: brandname,
        createdBy: user,
        category: categorydetails,
        mainCategory: main,
      });
      categorydetails?.Brand.push(brand);
      const d = await categorydetails?.save();
      return {
        message: "success true",
        statusCode: 201,
        data: brand,
      };
    } catch (error) {
      return {
        message: "success false",
        statusCode: 404,
        data: error,
      };
    }
  }
  async getAllProductBrands(createdBY: any): Promise<any> {
    try {
      const data = await Brands.find().populate([
        "createdBy",
        "mainCategory",
        "category",
        "products",
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
  async getAllProductBrandCreatedByUser(user: any): Promise<any> {
    try {
      const data = await Brands.find({ createdBy: user._id }).populate([
        "createdBy",
        "mainCategory",
        "category",
        "products",
      ]);
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
        data: error,
      };
    }
  }
  async deleteProductBrandById(args: String, createdBy: any): Promise<any> {
    console.log(args);
    if (!args) {
      return {
        message: "main category id can not be null",
        statusCode: 201,
      };
    }
    try {
      const Item = await Brands.findOne({
        _id: args,
      }).populate("category");
      if (Item) {
        const s: any = await Category.findById(Item.category?._id);
        const index = s.Brand.indexOf(args);
        s.Brand.splice(index, 1);
        const a = await s.save();
      }
      const deletedItem = await Brands.findOneAndDelete({
        _id: args,
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
  async getProductBrandById(args: String): Promise<any> {
    try {
      const data = await Brands.findOne({ _id: args }).populate([
        "mainCategory",
        "createdBy",
        "category",
        "products",
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
  async updateProductBrandById(
    productid: String,
    updatedata: String,
    createdBy: any
  ): Promise<any> {
    console.log(productid);
    if (!productid) {
      return {
        message: "main category id can not be null",
        statusCode: 201,
      };
    }
    try {
      const forupdate = {
        brandname: updatedata,
      };
      const data = await Brands.findOneAndUpdate(
        { _id: productid, createdBy: createdBy._id },
        forupdate
      );
      console.log(data);
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
  async getCategoryMenuList(): Promise<any> {
    try {
      const data = await MainCategory.find().populate(["category"]);
      return {
        message: "success",
        statusCode: 200,
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
  async addProduct(
    maincategory: String,
    category: String,
    brand: String,
    Productname: String,
    Productdetails: String,
    ProductImage: any,
    Deliverable: String,
    Returnable: boolean
  ): Promise<any> {
    try {
      let a: any = [];
      cloudinary.config({
        cloud_name: "dz6gjmx3j",
        api_key: "986946116878116",
        api_secret: "mSyeV8W1CHaHUPYOQ5_99RcFlYg",
      });
      if (ProductImage.length >= 1) {
        ProductImage.forEach(async (element: any) => {
          console.log("its try");
          await cloudinary.v2.uploader.upload(
            element,
            { public_id: "olympic_flag" },
            async function (error: any, result: any) {
              a.push(result.secure_url);
            }
          );
        });
      }
      setTimeout(async () => {
        const main: any = await MainCategory.findOne({ _id: maincategory });
        const categories: any = await Category.findOne({ _id: category });
        const brands: any = await Brands.findOne({ _id:brand });
        const product = await Product.create({
          Maincategory: main._id,
          Category: categories._id,
          Brand: brands._id,
          Productname: Productname,
          Productdetails: Productdetails,
          ProductImage: a,
          Deliverable: Deliverable,
          Returnable: Returnable,
        });
        console.log(product);
        brands.products.push(product);
        await brands.save();
      }, 3000);
      return { message: "product created", statusCode: 201 };
    } catch (error) {
      return { message: "success false", statusCode: 501 };
    }
  }
  async getAllProducts(createdBY: any): Promise<any> {
    try {
      const data = await Product.find().populate([
        "Maincategory",
        "Category",
        "Brand",
      ]);
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
}
