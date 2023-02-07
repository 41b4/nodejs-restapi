const pool = require('../db')

const getEmployees= async function (req, res, next) {
  const [rows]= await pool.query('SELECT * FROM employee ')
  res.send({
    rows});
}

const getEmployee= async function (req, res, next) {
  const [rows]= await pool.query('SELECT * FROM employee WHERE id=?;',[req.params.id])
  if (rows.length<=0){
    return res.status(404).json({message: 'Employee not found'})
  }else{
    res.send({rows});
  }
  
}  

const createEmployee=async function (req, res, next) {
  const {name, salary}= req.body
  const [rows]= await pool.query('INSERT INTO employee (name, salary) VALUES (?,?)',[name, salary])
  res.send({
    id:rows.insertId,
    name,
    salary});
  }

const updateEmployee= async function (req, res, next) {
  const [result]= await pool.query('UPDATE employee SET name= IFNULL(?, name), salary= IFNULL(?, salary) WHERE id=?;',[req.body.name, req.body.salary,req.params.id])
  if(result.affectedRows<=0){
    return res.status(404).json({message: 'Employee not found'})
  }else{
    res.send("actualizando empleado");
  }
  }

const deleteEmployee= async function (req, res, next) {
  const [result]= await pool.query('DELETE FROM employee WHERE id=?;',[req.params.id])
  if(result.affectedRows<=0){
    return res.status(404).json({message: 'Employee not found'})
  }else{
    res.send("eliminando empleado");
  }
  
}

module.exports= {
    getEmployees,
    getEmployee, 
    createEmployee, 
    updateEmployee,
    deleteEmployee}