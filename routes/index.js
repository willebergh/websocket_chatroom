const express = require("express");
const router = express.Router();

router.use("/", require("./app"))

router.use("/api", require("./api"))

module.exports = router;