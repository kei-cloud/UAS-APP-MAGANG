const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET semua user
router.get("/", userController.getAllUsers);

// LOGIN
router.post("/login", userController.loginUser);

module.exports = router;
