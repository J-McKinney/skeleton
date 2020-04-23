const router = require("express").Router();
const apiRoute = require("./apiRoute");

// Sentence routes
router.use("/apiRoute", apiRoute);

module.exports = router;
