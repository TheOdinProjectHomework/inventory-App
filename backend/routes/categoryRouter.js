import express from "express"

const categoryRouter = express.Router();
categoryRouter.use(express.json());

categoryRouter.get("/", (req, res) => {
    res.json("Category Router");
})

export default categoryRouter;