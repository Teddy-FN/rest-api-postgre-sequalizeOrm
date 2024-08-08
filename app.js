const express = require("express");

const authRoutes = require("./route/authRoute");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: 200,
    message: "SUCCESS",
  });
});

// Routes
app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => {
  console.log("CONNECTED");
});
