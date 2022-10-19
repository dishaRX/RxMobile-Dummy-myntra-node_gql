import { WishlistDataRepository } from "../../repositories/WishlistDataRepository";

export class RemoveItemFromWishlistCase {
  wishlistDataRepository: WishlistDataRepository;
  constructor(wishlistDataRepository: WishlistDataRepository) {
    this.wishlistDataRepository = wishlistDataRepository;
  }

  public removeItemFromWishlist = async (args: any) => {
    return await this.wishlistDataRepository.removeItemFromWishlist(args);
  };
}
