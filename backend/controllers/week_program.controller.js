const weekProgram = require("../models/week_program.model");

const createProgram = async (req, res) => {
  try {
    const userProgram = await weekProgram.find({ user_id: req.user.id });
    if (userProgram.length >= 2) {
      return res.status(400).json("you cant have more the 2 week programs");
    }

    const program = new weekProgram(req.body);
    program.user_id = req.user.id;
    const savedProgram = await program.save();

    res.status(200).json(savedProgram);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

const updateProgram = async (req, res) => {
  try {
    const updatedProgram = await weekProgram.findOne({
      user_id: req.user.id,
      isOddWeek: req.query.isOddWeek,
    });
    const keys = Object.keys(req.body.week);

    keys.forEach((key) => {
      switch (key) {
        case "sat":
          updatedProgram._doc.week.sat = updatedProgram.week.sat.concat(
            req.body.week.sat
          );
          break;
        case "sun":
          updatedProgram._doc.week.sun = updatedProgram.week.sun.concat(
            req.body.week.sun
          );
          break;
        case "mon":
          updatedProgram._doc.week.mon = updatedProgram.week.mon.concat(
            req.body.week.mon
          );
          break;
        case "tue":
          updatedProgram._doc.week.tue = updatedProgram.week.tue.concat(
            req.body.week.tue
          );
          break;
        case "wed":
          updatedProgram._doc.week.wed = updatedProgram.week.wed.concat(
            req.body.week.wed
          );
          break;
        case "thu":
          updatedProgram._doc.week.thu = updatedProgram.week.thu.concat(
            req.body.week.thu
          );
          break;
        case "fri":
          updatedProgram._doc.week.fri = updatedProgram.week.fri.concat(
            req.body.week.fri
          );
          break;

        default:
          break;
      }
    });

    const result = await weekProgram.updateOne(
      {
        user_id: req.user.id,
        isOddWeek: req.query.isOddWeek,
      },
      updatedProgram,
      { new: true }
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

const getProgram = async (req, res) => {
  try {
    const qOddOrEven = req.query.isOddWeek;
    if (qOddOrEven)
      return res.status(200).json(
        await weekProgram.find({
          user_id: req.user.id,
          isOddWeek: qOddOrEven,
        })
      );
    const programs = await weekProgram.find({ user_id: req.user.id });

    res.status(200).json(programs);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

module.exports = {
  createProgram,
  updateProgram,
  getProgram,
};
