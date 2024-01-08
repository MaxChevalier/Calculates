const express = require('express');
const logger = require('../middlewares/logger');
const router = express.Router(); // router intégré au framework Express
const dateCalculatorController = require('./controller');

router.get('/', logger, dateCalculatorController.index);

module.exports = router;