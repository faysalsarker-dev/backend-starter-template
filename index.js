const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const errorHandler = require("./src/middlewares/errorHandler");


require("dotenv").config();


connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());










app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("API is running...");
});
// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
