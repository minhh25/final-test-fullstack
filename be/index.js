import express from "express";  
import cors from "cors";
import mongoose from "mongoose";
import RootRouter from "./routers/index.js";


await mongoose.connect("mongodb+srv://minh:123@cluster0.jm6hvb9.mongodb.net/final-test");
const app = express();
app.use(express.json());

app.use(RootRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
})


app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
})