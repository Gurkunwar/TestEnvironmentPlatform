const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./routes/user.route')
const authRouter = require('./routes/auth.route')
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

const app = express();
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3100, () => {
  console.log("Server is running on port 3100!");
});
