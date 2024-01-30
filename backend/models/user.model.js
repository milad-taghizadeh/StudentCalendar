// mongoose set up
const mongoose = require("mongoose");

// create the mongoose schema
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phonenumber: { type: String, required: true },
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("User", userSchema);
