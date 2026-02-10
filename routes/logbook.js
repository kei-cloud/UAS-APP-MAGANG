const express = require("express");
const router = express.Router();
const logbookController = require("../controllers/logbookController");

router.get("/", logbookController.getAllLogbook);
router.post("/", logbookController.createLogbook);

module.exports = router;
