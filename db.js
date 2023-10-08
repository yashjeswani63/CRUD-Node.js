const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Creative@2326',
    database: 'employee_db'
})


module.exports = mysqlPool