const router = require("express").Router();
const { Router } = require("express");

const userRoutes = require("./user.js");
// const adminRoutes = require("./admin");
// const freeUserRoutes = require("./freeUser");
// const globalRoutes = require("./global");
// const googleRoutes = require("./googleAuth");
// const facebookRoutes = require("./facebookAuth");

const errorHandler = require("../middlewares/errorHandler");
const authentication = require("../middlewares/authentication");

// router.use("/", globalRoutes);
router.use("/user", userRoutes);
router.use(authentication);
// router.use("/freeUser", freeUserRoutes);
// router.use("/admin", adminRoutes);

router.use(errorHandler);

module.exports = router;
