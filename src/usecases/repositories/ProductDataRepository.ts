export interface ProductDataRepository {
  addMainCategory(args: String, Createdby: any): Promise<any>;
}