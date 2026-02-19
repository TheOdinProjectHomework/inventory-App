import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Hello World!");
})


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port: ${port}`)
    });
})