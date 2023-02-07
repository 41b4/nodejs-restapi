var express = require("express");
var router = express.Router();
const pool = require("../db");
const getEmployees= require('../controllers/employees.controller')

router.get("/employees", getEmployees.getEmployees);
router.get("/employee/:id", getEmployees.getEmployee);
router.post("/employee", getEmployees.createEmployee);
router.put("/employee/:id", getEmployees.updateEmployee);
router.delete("/employee/:id",getEmployees.deleteEmployee);

module.exports = router;
