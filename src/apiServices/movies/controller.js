const Movies = require('./model')

exports.getMovies = (req, res) => {
  Movies.fetchAll().then(movie => {
    res.json(movie)
  })
}
