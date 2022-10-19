const pool = require('../../config/conection')

module.exports = class movieRepository {
  static async findAll () {
    if (pool) {
      const sql = 'SELECT * FROM movie'
      const [rows] = await pool.query(sql)
      return rows
    }
  }
}
