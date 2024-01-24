// dependency imports
const router = require("express").Router();
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuth,
} = require("../middleware/verify_token");
const controller = require("../controllers/users.controller");

//UPDATE router
router.put("/", verifyTokenAndAuth, controller.updateUserController);

//DELETE router
router.delete("/", verifyTokenAndAuth, controller.deleteUserController);

// GET Me router
router.get("/", verifyTokenAndAuth, controller.getMeController);

//export the Router
module.exports = router;
