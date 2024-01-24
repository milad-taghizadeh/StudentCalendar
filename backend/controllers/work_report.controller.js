const workReport = require("../models/daily_work_report.model");
const jalali = require("moment-jalaali");

const createWorkReport = async (req, res) => {
  try {
    const duplicatedReport = await workReport.find({
      user_id: req.user.id,
      date: {
        $gt: jalali().startOf("day").toDate(),
      },
    });
    if (!duplicatedReport.length == 0)
      return res.status(400).json("there is a report");
    const date = jalali().toDate();
    const newWorkReport = new workReport({
      user_id: req.user.id,
      report: req.body.report,
      date: date,
    });

    const result = await newWorkReport.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

const updateWorkReport = async (req, res) => {
  try {
    const updatedReport = await workReport.findOneAndUpdate(
      {
        user_id: req.user.id,
        date: {
          $gt: jalali().startOf("day").toDate(),
        },
      },
      { report: req.body.report },
      { new: true }
    );

    date = jalali(updatedReport.date)
      .format("jYYYY-jMM-jDD ddd")
      .toLocaleString();

    updatedReport._doc.date = date;

    res.status(200).json(updatedReport);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

const deleteWorkReport = async (req, res) => {
  try {
    const deletedReport = await workReport.findOneAndDelete(
      {
        user_id: req.user.id,
        date: {
          $gt: jalali().startOf("day").toDate(),
        },
      },
      { report: req.body.report },
      { new: true }
    );

    date = jalali(deletedReport.date)
      .format("jYYYY-jMM-jDD ddd")
      .toLocaleString();

    deletedReport._doc.date = date;

    res.status(200).json(deletedReport);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

const getWorkReport = async (req, res) => {
  try {
    const reports = await workReport.find({ user_id: req.user.id });
    reports.forEach((report) => {
      date = jalali(report.date).format("jYYYY-jMM-jDD ddd").toLocaleString();
      report._doc.date = date;
    });
    res.status(200).json(reports);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

module.exports = {
  createWorkReport,
  updateWorkReport,
  deleteWorkReport,
  getWorkReport,
};
