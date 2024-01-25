const Event = require("../models/event.model");
const jalali = require("jalali-moment");

const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    newEvent.date = jalali
      .from(req.body.date, "fa", "YYYY/MM/DD")
      .startOf("day")
      .toDate()
      .setHours(1);

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
    const startOfDay = jalali
      .from(req.body.date, "fa", "YYYY/MM/DD")
      .startOf("day")
      .toDate(0, 0, 0);

    const endOfDay = jalali
      .from(req.body.date, "fa", "YYYY/MM/DD")
      .endOf("day")
      .toDate();

    const events = await Event.find({
      date: { $gt: startOfDay, $lt: endOfDay },
    });

    res.status(200).json(events);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

const getEventOfWeek = async (req, res) => {
  try {
    const startOfWeek = jalali
      .from(req.body.date, "fa", "YYYY/MM/DD")
      .startOf("Week")
      .toDate(0, 0, 0);

    const endOfWeek = jalali
      .from(req.body.date, "fa", "YYYY/MM/DD")
      .endOf("Week")
      .toDate();

    const events = await Event.find({
      date: { $gt: startOfWeek, $lt: endOfWeek },
    });

    res.status(200).json(events);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

const getEventOfTwoDates = async (req, res) => {
  try {
    const startDate = jalali
      .from(req.body.startDate, "fa", "YYYY/MM/DD")
      .startOf("day")
      .toDate(0, 0, 0);

    const endDate = jalali
      .from(req.body.endDate, "fa", "YYYY/MM/DD")
      .endOf("day")
      .toDate();

    const events = await Event.find({
      date: { $gt: startDate, $lt: endDate },
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
  getEventOfWeek,
  getEventOfTwoDates,
};
