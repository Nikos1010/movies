const poolConnectionDB = require('../../config/conection')
const changeSQLCode = require('./sql/codeSQL')

module.exports = class RepositoryGeneric {
  static async findAll (model) {
    if (poolConnectionDB) {
      const sql = changeSQLCode({ model, action: 'findAll' })
      const [rows] = await poolConnectionDB.query(sql)
      return rows
    }
  }

  static async findById (model, id) {
    if (poolConnectionDB) {
      const sql = changeSQLCode({ model, action: 'findById', data: { id } })
      const [row] = await poolConnectionDB.query(sql)
      return row
    }
  }

  static async insert (model, objInsert) {
    if (poolConnectionDB) {
      const sql = changeSQLCode({ model, action: 'insert', data: objInsert })
      await poolConnectionDB.query(sql)
      return 'Se pudo'
    }
  }

  static async update (model, objUpdate) {
    if (poolConnectionDB) {
      const sql = changeSQLCode({ model, action: 'update', data: objUpdate })
      await poolConnectionDB.query(sql)
      return 'Tambien se pudo'
    }
  }

  static async delete (model, id) {
    if (poolConnectionDB) {
      const sql = changeSQLCode({ model, action: 'delete', data: { id } })
      await poolConnectionDB.query(sql)
    }
  }
}
