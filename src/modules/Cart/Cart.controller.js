import { asyncHandler } from "../../middleWare/AsyncHandler/AsyncHandler.js";
import ProductModel from "../../../DB/Models/Product.model.js";
import CartModel from "../../../DB/Models/Cart.model.js";
import { nanoid } from 'nanoid';





export const AddToCart = asyncHandler(async (req, res, next) => {


    const { productId, quantity, cartId } = req.body;
    
   
    const product = await ProductModel.findById(productId);
    if (!product) return next(new Error("Product not found", { cause: 404 }));

  
    const unitPrice = product.HasOffer ? product.PriceAfterOffer  : product.BasePrice;

   
    let cart = await CartModel.findOne({ cartId });
    
    if (!cart) {
        cart = await CartModel.create({
            cartId: cartId || nanoid(),
            products: [{ 
                productId, 
                quantity, 
                priceAtAddition: product.BasePrice, 
                finalPrice: unitPrice             
            }]
        });
    } else {

      
        const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
        if (productIndex > -1) {
            cart.products[productIndex].quantity += quantity;
            cart.products[productIndex].finalPrice = unitPrice; 
        } else {
            cart.products.push({ productId, quantity, priceAtAddition: product.BasePrice, finalPrice: unitPrice });
        }
    }


    cart.subTotal = cart.products.reduce((acc, item) => acc + (item.priceAtAddition * item.quantity), 0);
    cart.totalAfterDiscount = cart.products.reduce((acc, item) => acc + (item.finalPrice * item.quantity), 0);

    await cart.save();
    return res.status(200).json({ message: "Product added successfully", cart });
});