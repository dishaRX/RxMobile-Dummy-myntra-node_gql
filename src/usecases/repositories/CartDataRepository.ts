export interface CartDataRepository {
  addItemToCart(args: any): Promise<any>;
  getCartItemList(args: any): Promise<any>;
}
