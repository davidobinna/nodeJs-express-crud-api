const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;


app.use(express.json());
app.use("/api/", require("./routes/contactRoutes"));
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});