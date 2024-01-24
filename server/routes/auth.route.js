// dependency imports
const router = require("express").Router();
const authController = require("../controllers/auth.controller");

//REGISTER router
router.post("/register", authController.registerController);

// LOGIN router
router.post("/login", authController.logInController);

// LOGOUT router
router.post("/logOut", authController.logOutController);

//export the Router
module.exports = router;
