const mysql = require('mysql2')

const { prodMysql } = require('./enviroment')
const { host, database, user, password } = prodMysql

class MysqlDB {
  connection () {
    return mysql.createPool({
      host,
      database,
      user,
      password
    }).promise()
  }
}

module.exports = MysqlDB
