var express = require('express');
var router = express.Router();
const pool = require('../db')
const employeesRoutes= require('./employees')
const index = require('../controllers/index.controller')

router.get('/ping', index.ping);

/* GET home page. */
router.get('/', index.index);

router.use(employeesRoutes)

module.exports = router;
