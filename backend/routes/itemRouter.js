import express from "express"

const itemRouter = express.Router();
itemRouter.use(express.json());

itemRouter.get("/", (req, res) => {
    res.json("Items route");
})

export default itemRouter;