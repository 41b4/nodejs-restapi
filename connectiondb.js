const{createPool}=require('mysql2/promise')
const pool= createPool({
    host:'',
    user:'',
    password:'',
    port:'',
    database:''
})

module.exports=pool