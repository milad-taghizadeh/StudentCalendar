// dependency imports
const User = require("../models/user.model");
const CryptoJS = require("crypto-js");

// update User
const updateUserController = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ massage: "the request needs a body." });

    // encrypt the Password if there is one
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC_KEY
      ).toString();
    }

    // find the User by ID and update it
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (!updatedUser)
      return res.status(404).json({ massage: "user NOT FOUND" });
    // split the PASSWORD from the object
    const { password, __v, ...others } = updatedUser._doc;

    // set the response
    res.status(200).json(others);
  } catch (err) {
    // return the err if there is one
    res.status(400).json(err);
  }
};

// delete User
const deleteUserController = async (req, res) => {
  try {
    // find By Id And Delete the User
    const deletedUser = await User.findByIdAndDelete(req.user.id);

    // set the response
    if (deletedUser == null)
      return res
        .status(200)
        .json({ massage: "there is No User with that email" });
    res.status(200).json({ massage: "User has been deleted...", deletedUser });
  } catch (err) {
    // return the err if there is one
    res.status(400).json(err);
  }
};

// get User By email
const getUserByEmailController = async (req, res, next) => {
  try {
    if (req.params.email == ":email")
      return res
        .status(400)
        .json({ massage: "the request needs a username params." });

    // find the User By the ID
    const user = await User.findOne({ email: req.params.email });

    if (!user) return res.status(404).json({ massage: "user not found" });

    // split the from the object
    const { password, __v, ...userInfo } = user._doc;

    // set the response
    res.status(200).json(userInfo);
  } catch (err) {
    // return the err if there is one
    res.status(400).json(err);
  }
};

// Get Me
const getMeController = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const { password, __v, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(401).json({ massage: "you are not authenticated" });
  }
};

// get All Users
const getAllUsersController = async (req, res, next) => {
  try {
    // define the responce
    let users;

    //return ALL
    users = await User.find().select(["-password", "-__v"]);

    // set the response
    res.status(200).json(users);
  } catch (err) {
    // return the err if there is one
    res.status(400).json(err);
  }
};

// export functions
module.exports = {
  updateUserController,
  deleteUserController,
  getUserByEmailController,
  getAllUsersController,
  getMeController,
};
