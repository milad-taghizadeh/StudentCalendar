// express
const express = require("express");
const app = express();

// imports
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//CORS config
const allowedOrigins = ["http://localhost", "http://127.0.0.1"];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};

// apply middlewares
const cookieParser = require("cookie-parser");
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

// Routers
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const eventRouter = require("./routes/event.route");
const weekProgramRoute = require("./routes/week_program.route");
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/event", eventRouter);
app.use("/api/weekProgram", weekProgramRoute);

// db connection
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
