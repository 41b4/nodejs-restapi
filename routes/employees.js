var express = require("express");
var router = express.Router();
const pool = require("../db");

router.get("/employees", function (req, res, next) {
  res.send("obteniendo empleados");
});
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
