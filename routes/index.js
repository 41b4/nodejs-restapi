var express = require('express');
var router = express.Router();
const pool = require('../db')
const employeesRoutes= require('./employees')

router.get('/ping',async function(req, res, next) {
  const [result] = await pool.query('SELECT 1+1 AS result')
  res.json(result[0]);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('holaaa');
});

router.use(employeesRoutes)

module.exports = router;
