import { WishlistDataRepository } from "../../repositories/WishlistDataRepository";

export class GetWishlistItemListCase {
  wishlistDataRepository: WishlistDataRepository;
  constructor(wishlistDataRepository: WishlistDataRepository) {
    this.wishlistDataRepository = wishlistDataRepository;
  }

  public getWishlistItemList = async (args: any) => {
    return await this.wishlistDataRepository.getWishlistItemList(args);
  };
}
