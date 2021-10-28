const router = require("express").Router();
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 40 * 1000, // 15 minutes 15 * 60 * 1000
    max: 1// limit each IP to 100 requests per windowMs
});

const GlobalController = require("../controllers/globalController");

router.post("/sendMessage", limiter, GlobalController.sendFeedback);

module.exports = router;
