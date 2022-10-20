export interface CartDataRepository {
  addItemToCart(args: any): Promise<any>;
  getCartItemList(args: any): Promise<any>;
  updateCartItem(args: any): Promise<any>;
}
