// No deberia ir logica en el modelo, simplemente los getter y setter.
module.exports = class Movies {
  #id
  #name
  #releaseDate
  #genre
  #productionCompany

  constructor (id, name, releaseDate, genre, productionCompany) {
    this.#id = id
    this.#name = name
    this.#releaseDate = releaseDate
    this.#genre = genre
    this.#productionCompany = productionCompany
  }
}
