const express = require('express');
var router = express.Router();
const controller = require('./controller');


router.get('/login', controller.login);


module.exports = router;