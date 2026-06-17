


import { Router } from "express";

import * as CR from "./Cart.controller.js";






const CartRouter = Router();



CartRouter.post( "/AddToCart", CR.AddToCart);










export default CartRouter;