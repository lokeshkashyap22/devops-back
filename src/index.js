import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import NoteRouter from "./route/note.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/"); 
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};


connectDB();

app.use("/api/note", NoteRouter);
app.get("/", (req, res) => {
  res.send("Hello World from Backend!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
