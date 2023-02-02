var express = require("express");
var router = express.Router();
const pool = require("../db");
const getEmployees= require('../controllers/employees.controller')

router.get("/employees", getEmployees);
router.post("/employees", function (req, res, next) {
  res.send("creando empleados");
});
router.put("/employees", function (req, res, next) {
  res.send("actualizando empleado");
});
router.delete("/employees", function (req, res, next) {
  res.send("eliminando empleado");
});

module.exports = router;
