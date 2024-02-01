// dependency imports
const router = require("express").Router();
const { verifyTokenAndAuth } = require("../middleware/verify_token");
const controller = require("../controllers/users.controller");

// GET Me router
router.get("/", verifyTokenAndAuth, controller.getMeController);

//export the Router
module.exports = router;
