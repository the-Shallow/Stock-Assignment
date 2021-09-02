const viewController = require("./../Controller/viewController");
const express = require("express");

const router = express.Router();

router.get("/",viewController.getStock);

module.exports = router;
