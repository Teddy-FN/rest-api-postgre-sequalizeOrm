require("dotenv").config({ path: `${process.cwd()}/.env` });
const express = require("express");
const authRoutes = require("./route/authRoute");

// Port
const port = process.env.APP_PORT || 5000;

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: 200,
    message: "SUCCESS",
  });
});

// Error
app.use("*", (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "Not Found",
  });
});

// Routes
app.use("/api/v1/auth", authRoutes);

// Listen app
app.listen(port, () => {
  console.log("CONNECTED");
});
