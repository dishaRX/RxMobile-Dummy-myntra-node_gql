import { WishlistDataRepository } from "../../../usecases/repositories/WishlistDataRepository";
import { Response } from "./Response";
import Wishlist from "../../../domains/models/Wishlist";
export class WishlistDataRepositoryImpl implements WishlistDataRepository {
  //Wishlistitem
  async addToWishlist(args: any): Promise<Response> {
    const { userId, productId } = args;

    try {
      const wishlistSchema = new Wishlist({
        userId: userId,
        productId: productId,
      });
      let res = await wishlistSchema.save();
    } catch (error) {
      return {
        message: "Something went wrong",
        statusCode: 500,
      };
    }
    return {
      message: "Item added to wishlist",
      statusCode: 200,
    };
  }

  async getWishlistItemList(args: any): Promise<Response> {
    const { userId } = args;

    try {
      let wishlist = await Wishlist.find({
        userId: userId,
      });
      return {
        message: "Success",
        statusCode: 200,
        data: wishlist,
      };
    } catch (error) {
      return {
        message: "Something went wrong",
        statusCode: 500,
      };
    }
  }

  async removeItemFromWishlist(args: any): Promise<Response> {
    const { productId, userId } = args;

    const wishlist = await Wishlist.findOne({
      productId: productId,
      userId: userId,
    });
    console.log("wishlist : ", wishlist);

    if (!wishlist) {
      return {
        message: "Item not found",
        statusCode: 404,
      };
    }

    await wishlist.remove();

    return {
      message: "Item removed",
      statusCode: 200,
    };
  }
}
