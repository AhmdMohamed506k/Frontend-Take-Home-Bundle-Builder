import { Router } from "express";
import * as CT from "./Category.controller.js";
import * as CTV from "./CategoryValidation.js";
import { validate } from "../../middleWare/Validation.js";





const CategoryRouter = Router();





CategoryRouter.get("/Get", CT.GetCategories);

CategoryRouter.post("/Create",validate(CTV.createCategorySchema), CT.CreateCategory);

CategoryRouter.put("/Update/:id",validate(CTV.updateCategorySchema), CT.UpdateCategory);

CategoryRouter.delete("/Delete/:id",validate(CTV.deleteCategorySchema), CT.DeleteCategory);





export default CategoryRouter;