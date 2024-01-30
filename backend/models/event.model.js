// mongoose set up
const mongoose = require("mongoose");

// create the mongoose schema
const eventSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

// export
module.exports = mongoose.model("event", eventSchema);
