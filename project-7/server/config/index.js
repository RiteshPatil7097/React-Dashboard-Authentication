// server/config/index.js
import mongoose from "mongoose";
import createHttpError from "http-errors";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);

    const DB = process.env.MONGODB_URI;
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw createHttpError(501, "Unable to connect database");
  }
};
