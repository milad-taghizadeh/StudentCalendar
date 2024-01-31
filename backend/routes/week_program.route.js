// dependency imports
const router = require("express").Router();
const controller = require("../controllers/week_program.controller");
const { verifyTokenAndAuth } = require("../middleware/verify_token");

router.put("/", verifyTokenAndAuth, controller.updateProgram);

router.get("/", verifyTokenAndAuth, controller.getProgram);

module.exports = router;
