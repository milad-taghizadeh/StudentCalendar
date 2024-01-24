// dependency imports
const router = require("express").Router();
const Controller = require("../controllers/work_report.controller");
const { verifyTokenAndAuth } = require("../middleware/verify_token");

router.post("/", verifyTokenAndAuth, Controller.createWorkReport);

router.put("/", verifyTokenAndAuth, Controller.updateWorkReport);

router.delete("/", verifyTokenAndAuth, Controller.deleteWorkReport);

router.get("/", verifyTokenAndAuth, Controller.getWorkReport);

//export the Router
module.exports = router;
