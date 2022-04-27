const express = require("express");
const path = require("path");
const mainController = require("../controllers/mainController");
const authMiddleware = require("../middlewares/userAuth");

const router = express.Router();

router.get("/", mainController.index);
router.get("/admin", authMiddleware, mainController.admin);

module.exports = router;
