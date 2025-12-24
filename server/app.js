const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const cors = require("cors");
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true                // allow cookies
}));
app.use(express.json());
app.use("/api/auth", authRoutes);

module.exports = app;
