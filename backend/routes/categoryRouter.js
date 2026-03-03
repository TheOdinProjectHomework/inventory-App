import express from "express"
import { createCategory, getAllCategories, updateCategory, deleteCategory, getCategoryItems } from "../controllers/category.controller.js";

const categoryRouter = express.Router();
categoryRouter.use(express.json());

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:category/items", getCategoryItems);
categoryRouter.post("/", createCategory);
categoryRouter.put("/", updateCategory);
categoryRouter.delete("/", deleteCategory);

export default categoryRouter;