// const MongoDB = require('./mongo')
const MysqlDB = require('./mysql')

class ConectionDB {
  constructor () {
    this.db = new MysqlDB()
  }

  connect () {
    return this.db.connection()
  }
}

const connection = new ConectionDB()

module.exports = connection.connect()
