const mysql = require('mysql2')

const { HOST, DATABASE_SQL, USER, PASSWORD_MYSQL } = process.env

class MysqlDB {
  connection () {
    return mysql.createPool({
      host: HOST,
      database: DATABASE_SQL,
      user: USER,
      password: PASSWORD_MYSQL
    }).promise()
  }
}

module.exports = MysqlDB
