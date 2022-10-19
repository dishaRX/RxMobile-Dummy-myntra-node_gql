export interface WishlistDataRepository {
  addToWishlist(args: any): Promise<any>;
  getWishlistItemList(args: any): Promise<any>;
  removeItemFromWishlist(args: any): Promise<any>;
}
