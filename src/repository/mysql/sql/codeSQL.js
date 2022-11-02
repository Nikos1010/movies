function changeSQLCode ({ model, action, data }) {
  if (model === 'movie') return movieSQL({ action, data })
  if (model === 'genre') return genreSQL({ action, data })
}

function movieSQL ({ action, data }) {
  if (!data) data = {}

  const objQuerys = {
    findAll: `SELECT movie.id, movie.name, movie.releaseDate, movie.productionCompany, idGenre, genre.nameGenre FROM movie
            INNER JOIN genre ON genre.id = movie.idGenre`,
    findById: `SELECT movie.id, movie.name, movie.releaseDate, movie.productionCompany, idGenre, genre.nameGenre FROM movie
            INNER JOIN genre ON genre.id = movie.idGenre
            WHERE movie.id = ${data.id}`,
    insert: `INSERT INTO movie(name, releaseDate, productionCompany, idGenre)
             VALUES (${data.name},${data.releaseDate},${data.productionCompany},${data.idGenre})`,
    update: `UPDATE movie
             SET name = ${data.name}, releaseDate = ${data.releaseDate}, productionCompany = ${data.productionCompany}, 
             idGenre = ${data.idGenre} WHERE id = ${data.id}`,
    delete: `DELETE FROM movie WHERE id = ${data.id}`
  }

  return objQuerys[action]
}

function genreSQL (objActions) {
  if (objActions.action === 'findAll') {
    return 'SELECT id, nameGenre FROM genre'
  }

  if (objActions.action === 'findById') {
    return `SELECT id, nameGenre FROM genre
            WHERE id = ${objActions.id}`
  }
}

module.exports = changeSQLCode

// {
//   id: 1,
//   name: 'Movie',
//   releaseDate: '2022-06-21',
//   productionCompany: 'Marvel',
//   genre: {
//     id: 1
//     nameGenre: 'Fantasy'
//   }
// }
