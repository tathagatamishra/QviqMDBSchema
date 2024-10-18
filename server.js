const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connection");
const userRoutes = require("./router/route");

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
connectDB();

// Routes
app.use("/qviq/api", userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
