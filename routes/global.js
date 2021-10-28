const router = require("express").Router();
const GlobalController = require("../controllers/globalController");

router.post("/sendMessage", GlobalController.sendFeedback);

// router.get("/token/:verifyingToken/:email", UserController.tokenInput);

module.exports = router;
