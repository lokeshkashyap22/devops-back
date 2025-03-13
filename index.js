import express from "express";
import mongoose from "mongoose";
import NoteRouter from "./src/route/note.route.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/note", NoteRouter);

// Default route
app.get("/", (req, res) => {
  res.send("Hello World from Backend!!");
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});