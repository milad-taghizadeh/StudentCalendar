const Event = require("../models/event.model");
const jalali = require("jalali-moment");

const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    newEvent.date = jalali.from(req.body.date, "fa", "YYYY/MM/DD").toDate();

    const result = await newEvent.save();

    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findOneAndDelete({
      title: req.body.title,
    });
    res.status(200).json(deletedEvent);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

const getEventOfDay = async (req, res) => {
  try {
    const day = jalali
      .from(req.body.date, "fa", "YYYY/MM/DD")
      .startOf("day")
      .toDate(0, 0, 0);

    const endDay = jalali
      .from(req.body.date, "fa", "YYYY/MM/DD")
      .endOf("day")
      .toDate(0, 0, 0);

    console.log(endDay);
    const events = await Event.find({
      date: { $gt: day, $lt: endDay },
    });

    res.status(200).json(events);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

module.exports = {
  createEvent,
  deleteEvent,
  getEventOfDay,
};
