const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());

const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected successfully !!");

    // Start the server
    app.listen(process.env.PORT || PORT, () => {
      console.log("Backend server is running on HTTPS");
    });
  })
  .catch((err) => {
    // catch the err if there is one
    console.log(err);
  });
