const stockController = require('./../Controller/stockController');
const express = require('express');

const router = express.Router();

router.get('/', stockController.createStock);

module.exports = router