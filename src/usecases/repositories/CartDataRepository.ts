export interface CartDataRepository {
  addItemToCart(args: any): Promise<any>;
}
