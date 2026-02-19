import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import categoryRouter from "./routes/categoryRouter.js"
import itemRouter from "./routes/itemRouter.js"

dotenv.config();
const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use("/api/category", categoryRouter);
app.use("/api/items", itemRouter);

app.get("/", (req, res) => {
    res.json("Hello World!");
})


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port: ${port}`)
    });
})