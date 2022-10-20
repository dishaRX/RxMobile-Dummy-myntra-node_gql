import { Response } from "./Response";
import { CartDataRepository } from "../../../usecases/repositories/CartDataRepository";
import Cart from "../../../domains/models/Cart";
export class CartDataRepositoryImpl implements CartDataRepository {
  //Cart
  async addItemToCart(args: any): Promise<Response> {
    const { userId, productId, size, quantity } = args;
    try {
      let isCartData = await Cart.findOne({
        userId: userId,
        productId: productId,
      }); //
      let existingUpdateCart;
      let newCart;
      if (isCartData) {
        const forupdate = {
          quantity: isCartData.quantity + quantity,
          size: size,
        };

        existingUpdateCart = await Cart.findOneAndUpdate(
          { userId: userId, productId: productId },
          forupdate
        );
      } else {
        const cartSchema = new Cart({
          userId: userId,
          productId: productId,
          size: size,
          quantity: quantity,
        });
        newCart = await cartSchema.save();
      }

      if (existingUpdateCart || newCart) {
        return {
          message: "Item added to cart",
          statusCode: 200,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        message: "Something went wrong",
        statusCode: 500,
      };
    }
    return {
      message: "Something went wrong",
      statusCode: 500,
    };
  }

  async getCartItemList(args: any): Promise<Response> {
    const { userId } = args;

    try {
      let cart = await Cart.find({
        userId: userId,
      });
      return {
        message: "Success",
        statusCode: 200,
        data: cart,
      };
    } catch (error) {
      return {
        message: "Something went wrong",
        statusCode: 500,
      };
    }
  }

  async updateCartItem(args: any): Promise<Response> {
    const { userId, productId, size, quantity } = args;
    try {
      let cartItem = await Cart.findOne({
        userId: userId,
        productId: productId,
      });

      if (!cartItem) {
        return {
          message: "Item not found",
          statusCode: 404,
        };
      }

      const forupdate = {
        quantity: quantity,
        size: size,
      };

      const existingUpdateCart = await Cart.findOneAndUpdate(
        { userId: userId, productId: productId },
        forupdate
      );

      if (existingUpdateCart) {
        return {
          message: "Cart item updated",
          statusCode: 200,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        message: "Something went wrong",
        statusCode: 500,
      };
    }
    return {
      message: "Something went wrong",
      statusCode: 500,
    };
  }
}
