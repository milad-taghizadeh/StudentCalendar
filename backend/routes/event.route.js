// dependency imports
const router = require("express").Router();
const controller = require("../controllers/event.controller");
const { verifyTokenAndAuth } = require("../middleware/verify_token");

router.post("/", verifyTokenAndAuth, controller.createEvent);

router.delete("/", verifyTokenAndAuth, controller.deleteEvent);

router.get("/byDay", verifyTokenAndAuth, controller.getEventOfDay);

router.get("/byWeek", verifyTokenAndAuth, controller.getEventOfWeek);

module.exports = router;
