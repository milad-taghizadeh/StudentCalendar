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
    const updatedProgram = await weekProgram.findOneAndUpdate(
      {
        user_id: req.user.id,
        isOddWeek: req.query.isOddWeek,
      },
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedProgram);
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
