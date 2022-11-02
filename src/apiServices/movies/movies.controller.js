// const Movies = require('./model')
const Repository = require('../../repository/mysql/repository')
const { notFoundFile } = require('../../services/notFoundFile')

exports.getMovies = async (req, res) => {
  const movies = await Repository.findAll('movie')

  const { content, statusCode } = notFoundFile(movies)

  return res.status(statusCode).json(content)
}

exports.getMovie = async (req, res, next) => {
  try {
    const id = req.params.id

    const movie = await Repository.findById('movie', id)

    const { content, statusCode } = notFoundFile(movie)

    return res.status(statusCode).json(content)
  } catch (error) {
    next()
  }
}

exports.updateMovie = async (req, res) => {
  const id = req.params.id
  const content = req.body

  const { name, releaseDate, productionCompany, idGenre } = content

  const update = await Repository.update('movie', { name, releaseDate, productionCompany, idGenre, id })

  const statusCode = update ? 204 : 400

  res.status(statusCode).end()
}
