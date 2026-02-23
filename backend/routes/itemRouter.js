import express from "express"
import { createItem, getAllItems } from "../controllers/item.controller.js";

const itemRouter = express.Router();
itemRouter.use(express.json());

itemRouter.get("/", getAllItems);
itemRouter.post("/", createItem);

export default itemRouter;