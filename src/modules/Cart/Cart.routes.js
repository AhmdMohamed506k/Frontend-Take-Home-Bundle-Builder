
import { Router } from "express";
import * as CR from "./Cart.controller.js";




const CartRouter = Router();


// --> Add-To-Cart-Routes
CartRouter.post("/AddToCart", CR.AddToCart);

// --> Get-Cart-Routes
CartRouter.get("/GetCart", CR.GetCart);

// --> create-checkout-session-Routes
CartRouter.post('/createCheckoutSession', CR.CreateCheckoutSession);

// --> Update-Cart-Quantity-Routes
CartRouter.put("/UpdateProductQuantity", CR.UpdateQuantity);

// --> Remove-Product-From-Cart-Routes
CartRouter.delete("/RemoveFromCart", CR.RemoveFromCart);







export default CartRouter;