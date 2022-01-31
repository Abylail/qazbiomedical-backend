const express = require('express');
var router = express.Router();
const controller = require('./controller');

router.get('/all', controller.findAll);

module.exports = router;