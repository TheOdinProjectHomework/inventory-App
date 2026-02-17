import express from "express"
import dotenv from "dotenv"

dotenv.config();
const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Hello World!");
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});