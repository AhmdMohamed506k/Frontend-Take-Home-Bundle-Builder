import { Router } from "express";
import * as PR from "./Product.controller.js";
import { MulterHost, validExtensions } from "../../middleWare/Multer/MulterHost.js";
import { validate } from "../../middleWare/Validation/Validation.js";
import * as PTV from "./ProductValidation.js";
const ValidExtensions = [{ name: "mainImage", maxCount: 1 }, { name: "variantImages", maxCount: 10 }]

const ProductRouter = Router();


ProductRouter.post( "/AddProduct", MulterHost(validExtensions.image).fields(ValidExtensions),validate(PTV.AddProductSchema),PR.AddNewProduct);

ProductRouter.put("/UpdateProduct/:productId" , MulterHost(validExtensions.image).fields(ValidExtensions),validate(PTV.UpdateProductSchema), PR.UpdateProduct);

ProductRouter.delete("/DeleteProduct/:productId" ,validate(PTV.DeleteProductSchema), PR.DeleteProduct);


export default ProductRouter;