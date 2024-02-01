// mongoose set up
const mongoose = require("mongoose");

// create the mongoose schema
const weekProgramSchema = mongoose.Schema({
  user_id: { type: mongoose.ObjectId, ref: "User" },
  isOddWeek: { type: Boolean },
  week: {
    sat: [
      {
        title: { type: String, require: true },
        description: { type: String },
        time: { type: String, require: true },
      },
    ],
    sun: [
      {
        title: { type: String, require: true },
        description: { type: String },
        time: { type: String, require: true },
      },
    ],
    mon: [
      {
        title: { type: String, require: true },
        description: { type: String },
        time: { type: String, require: true },
      },
    ],
    tue: [
      {
        title: { type: String, require: true },
        description: { type: String },
        time: { type: String, require: true },
      },
    ],
    wed: [
      {
        title: { type: String, require: true },
        description: { type: String },
        time: { type: String, require: true },
      },
    ],
    thu: [
      {
        title: { type: String, require: true },
        description: { type: String },
        time: { type: String, require: true },
      },
    ],
    fri: [
      {
        title: { type: String, require: true },
        description: { type: String },
        time: { type: String, require: true },
      },
    ],
  },
});

// export
module.exports = mongoose.model("weekProgram", weekProgramSchema);
