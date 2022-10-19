const movieRepository = require('../../repository/mysql/movieRepository')

module.exports = class Movies {
  constructor (id, name, releaseDate, genre, productionCompany) {
    this.id = id
    this.name = name
    this.releaseDate = releaseDate
    this.genre = genre
    this.productionCompany = productionCompany
  }

  save () {}

  static deleteById (id) {}

  static async fetchAll () {
    return movieRepository.findAll()
  }

  static findById (id) {}
}
