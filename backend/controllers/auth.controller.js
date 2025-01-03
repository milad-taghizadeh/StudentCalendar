// dependency imports
const User = require("../models/user.model");
const weekProgram = require("../models/week_program.model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// User register Controller (sign up)
const registerController = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ massage: "the request needs a body." });
    }

    // create the user object
    const userPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC_KEY
    ).toString();

    const newUser = new User(req.body);
    newUser.password = userPassword;

    // split the PASSWORD from the object
    const { password, __v, ...others } = newUser._doc;

    // save the user in DB
    const savedUser = await newUser.save();

    // set week program
    const oddProgram = new weekProgram();
    const evenProgram = new weekProgram();

    oddProgram.user_id = savedUser._id;
    evenProgram.user_id = savedUser._id;

    oddProgram.isOddWeek = true;
    evenProgram.isOddWeek = false;

    await oddProgram.save();
    await evenProgram.save();

    // set the response
    res.status(201).json(others);
  } catch (err) {
    // return the err if there is one
    res.status(400).json(err);
  }
};

// user Login Controller
const logInController = async (req, res) => {
  try {
    // find the user By username or email
    const user = await User.findOne({
      email: req.body.email,
    });

    // if there is not a user with that info
    if (user == null) {
      res.status(401).json(" Wrong UserName or password 1 !!");
    } else {
      // if we found a user with that email

      // decrypt the PASSWORD from the DB user
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC_KEY
      );
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      // get the Inputted PASSWORd
      const inputPassword = req.body.password;

      // create the access token
      const accessToken = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_SEC_KEY,
        { expiresIn: "10m" }
      );

      // split the PASSWORD from the object
      const { password, __v, ...others } = user._doc;

      // if the password doesn't match
      if (inputPassword !== originalPassword) {
        res.status(401).json("Wrong UserName or password 2 !!");
      } else {
        // if it matches we return the object without thw PASSWORD and the access token
        res
          .status(200)
          .cookie("accessToken", accessToken, {
            httpOnly: true,
            sameSite: "None",
            secure: true,
            credentials: true,
          })
          .json(others);
      }
    }
  } catch (err) {
    // return the err if there is one
    res.status(400).json(err);
    console.log(err);
  }
};

// log out route
const logOutController = async (req, res) => {
  try {
    res
      .clearCookie("accessToken", {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        credentials: true,
      })
      .status(204)
      .end();
  } catch (err) {
    res.status(500).json(err);
    req.err = err;
  }
};

// export the functions.
module.exports = { registerController, logInController, logOutController };
