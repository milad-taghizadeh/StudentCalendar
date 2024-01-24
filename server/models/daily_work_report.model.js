// mongoose set up
const mongoose = require("mongoose");

// create the mongoose schema
const workReportSchema = mongoose.Schema({
  user_id: { type: mongoose.ObjectId, require: true, ref: "User" },
  report: { type: String, require: true },
  date: { type: Date, require: true },
});

// export
module.exports = mongoose.model("workReport", workReportSchema);
