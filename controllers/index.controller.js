const pool = require('../db')

const ping= async function(req, res, next) {
    const [result] = await pool.query('SELECT 1+1 AS result')
    res.json(result[0]);
  }

const index=function(req, res, next) {
    res.send('holaaa')}

module.exports={ping, index}