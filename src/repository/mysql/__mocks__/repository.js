const file = {
  movie: [
    {
      id: 2,
      name: 'The School for Good and Evil',
      releaseDate: '2022-10-19T05:00:00.000Z',
      productionCompany: 'Netflix',
      idGenre: 1,
      nameGenre: 'Fantasy'
    },
    {
      id: 1,
      name: 'Thor: Love and Thunder',
      releaseDate: '2022-06-23T05:00:00.000Z',
      productionCompany: 'Marvel Studios',
      idGenre: 1,
      nameGenre: 'Fantasy'
    }
  ]
}

module.exports = {
  findAll: jest.fn((model) => {
    return file[model]
  })
}
