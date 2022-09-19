export interface ProductDataRepository {
  addMainCategory(args: String, Createdby: any): Promise<any>;
  getAllMainCategory(): Promise<any>;
  getMainCategoryById(args: String): Promise<any>;
  deleteMainCategoryById(args: String, createdBy: any): Promise<any>;


}
