import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/connectDB.js";
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.json({
        "message": "working fine"
    })
});

app.listen(PORT, () => {
    console.log(`app is started on port: ${PORT}`);
});
