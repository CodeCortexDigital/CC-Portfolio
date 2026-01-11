require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// connect database
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
app.use("/api/projects", projectRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/auth", authRoutes);

// health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// test route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio Backend is running" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
