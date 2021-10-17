const router = require("express").Router();
const UserController = require("../controllers/userController");

router.post("/signup", UserController.signUp);
router.post("/signin", UserController.signIn);
// router.get("/token/:verifyingToken/:email", UserController.tokenInput);

module.exports = router;
