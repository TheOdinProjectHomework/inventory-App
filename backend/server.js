import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"
import { connectDB } from "./config/db.js";
import categoryRouter from "./routes/categoryRouter.js"
import itemRouter from "./routes/itemRouter.js"

dotenv.config();
const port = process.env.PORT || 5001;
const __dirname = path.resolve();
const app = express();

if(process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: "http://localhost:5173"
    }))
};

app.use(express.json());
app.use("/api/category", categoryRouter);
app.use("/api/items", itemRouter);

// app.get("/", (req, res) => {
//     res.json("Hello World!");
// })

if(process.env.NODE_ENV === "production") {
    // app.use(express.static(path.join(__dirname, "../frontend/dist")));

    // app.get((req, res) => {
    //     res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    // });
  const distPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(distPath));

  app.get((req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port: ${port}`)
    });
})