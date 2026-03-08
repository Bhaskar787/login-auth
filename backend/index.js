const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./Models/db");

const AuthRouter = require("./Routes/AuthRouter");
const ProductsRouter = require("./Routes/ProductsRouter");

const PORT = process.env.PORT || 8081;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/ping", (req, res) => {
  res.send("PONG");
});

// Routes
app.use("/auth", AuthRouter);
app.use("/products", ProductsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});