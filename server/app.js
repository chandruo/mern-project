const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const cors = require("cors");
app.use(cors({
  origin: "http://mern-frontend-siva.s3-website-us-east-1.amazonaws.com", // frontend URL
  credentials: true                // allow cookies
}));
app.use(express.json());
app.use("/api/auth", authRoutes);

module.exports = app;
