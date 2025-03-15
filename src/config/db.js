import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  console.log("Attempting to connect to MongoDB...");

  try {
    console.log(`MONGO_URI: ${process.env.MONGO_URI}`);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected:");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error("Failed to connect to MongoDB. Exiting process...");
    process.exit(1);
  }
};

export default connectDB;
