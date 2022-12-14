export interface ProductDataRepository {
  addMainCategory(args: String, Createdby: any): Promise<any>;
  getAllMainCategory(): Promise<any>;
  getMainCategoryById(args: String): Promise<any>;
  deleteMainCategoryById(args: String, createdBy: any): Promise<any>;
  updateMainCategoryById(
    productid: String,
    updatedata: String,
    createdBy: any
  ): Promise<any>;
  getMainCategoryByUserId(createdBy: any): Promise<any>;
  addProductCategory(
    MainCategoryName: String,
    Categoryname: String,
    Createdby: any
  ): Promise<any>;
  getAllProductCategories(createdBy: any): Promise<any>;
  AllProductCategoriesCreatedByUser(createdBy: any): Promise<any>;
  getProductCategoryById(args: String): Promise<any>;
  deleteProductCategoryById(args: String, createdBy: any): Promise<any>;
  updateProductCategoryById(
    productid: String,
    updatedata: String,
    createdBy: any
  ): Promise<any>;
  addProductBrand(
    mainCategory: string,
    category: string,
    brandname: string,
    createdBy: any
  ): Promise<any>;
  getAllProductBrands(createdBY: any): Promise<any>;
  getAllProductBrandCreatedByUser(user: any): Promise<any>;
  deleteProductBrandById(args: String, createdBy: any): Promise<any>;
  getProductBrandById(args: String): Promise<any>;
  updateProductBrandById(
    productid: String,
    updatedata: String,
    createdBy: any
  ): Promise<any>;
  getCategoryMenuList(): Promise<any>;
  addProduct(
    Maincategory: String,
    Category: String,
    Brand: String,
    Productname: String,
    Productdetails: String,
    ProductImage: any,
    Deliverable:String,
    Returnable: Boolean,
    ProductSize:String,
    ProductPrice:String
  ): Promise<any>;
  getAllProducts(createdBY: any):Promise<any>;
  getProductById(args: String): Promise<any>;
  deleteProductById(args: String, createdBy: any): Promise<any>;
  updateProduct(
    Productname: String,
    Productdetails: String,
    ProductImage: any,
    Deliverable:String,
    Returnable: Boolean,
    Productid:String,
    ProductSize:String,
    ProductPrice:String
  ): Promise<any>;

}
