import mongoose from "mongoose";
import createHttpError from "http-errors";
import { DB } from "./index"; // or "./index" if DB is exported there

export const connectDb = async () => {
  try {
    await mongoose.connect(DB);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", (err as Error).message);
    throw createHttpError(501, "Unable to connect database");
  }
};
