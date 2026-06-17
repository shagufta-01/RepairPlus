const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

connectDB();

const app = express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/auth", authRoutes);

module.exports = app;