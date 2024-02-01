// dependency imports
const User = require("../models/user.model");

// Get Me
const getMeController = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { password, __v, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(401).json({ massage: "you are not authenticated" });
  }
};

// export functions
module.exports = {
  getMeController,
};
