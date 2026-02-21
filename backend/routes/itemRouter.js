import express from "express"
import { getAllItems } from "../controllers/item.controller.js";

const itemRouter = express.Router();
itemRouter.use(express.json());

itemRouter.get("/", getAllItems);

export default itemRouter;