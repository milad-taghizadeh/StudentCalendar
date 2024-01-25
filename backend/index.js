const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const allowedOrigins = ["http://localhost:5500", "http://127.0.0.1:5500"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};

const cookieParser = require("cookie-parser");
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const workReportRouter = require("./routes/work_reort.route");
const eventRouter = require("./routes/event.route");
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/dailyWorkReport", workReportRouter);
app.use("/api/event", eventRouter);

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
