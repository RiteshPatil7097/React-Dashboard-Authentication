import express from "express";
import createHttpError from "http-errors";
import exampleRoute from "./routes/exampleRoutes";
import userRoute from "./routes/userRoutes";
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHanlder";
import passport from "passport";
import kPassport from "./middleware/passport";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// 🔐 Middleware
app.use(
  cors({ origin: [process.env.FRONTEND_URL as string], credentials: true })
);
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
kPassport(passport);

// 📦 Routes
app.use("/", exampleRoute);
app.use("/user", userRoute);

// 🚧 404 Handler
app.use(() => {
  throw createHttpError(404, "Route not found");
});

// 🛠️ Error Handler
app.use(errorHandler);

// 🌐 Connect to DB and Start Server
mongoose
  .connect(DB)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
    throw createHttpError(501, "Unable to connect to database");
  });
