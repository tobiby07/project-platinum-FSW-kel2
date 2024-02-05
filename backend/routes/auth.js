const express = require("express");
const router = express.Router();
const Controller = require("../controller/auth");
router.post("/", Controller.login);
module.exports = router;