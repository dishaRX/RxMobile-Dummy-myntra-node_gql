import { WishlistDataRepository } from "../../repositories/WishlistDataRepository";

export class AddToWishlistCase {
  wishlistDataRepository: WishlistDataRepository;
  constructor(wishlistDataRepository: WishlistDataRepository) {
    this.wishlistDataRepository = wishlistDataRepository;
  }

  public addToWishlist = async (args: any) => {
    return await this.wishlistDataRepository.addToWishlist(args);
  };
}
