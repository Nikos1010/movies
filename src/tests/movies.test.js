// const Repository = require('../repository/mysql/repository')
const { response: res, request: req } = require('express')
const { getMovies } = require('../apiServices/movies/movies.controller')
const { findAll } = require('../repository/mysql/__mocks__/repository')

jest.mock('../repository/mysql/repository')

describe('Controllers Movie', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('GET operations', () => {
    test('Should get all movies', async () => {
      const spy = jest.spyOn(res, 'status')
      spy.mockImplementation(() => ({ json: jest.fn().mockReturnValue(findAll('movie')) }))

      const obj = await getMovies(req, res)

      expect(obj).toEqual(findAll('movie'))
      expect(spy).toHaveBeenCalledTimes(1)
    })

    // test('When you get all movies with controller', async () => {
    //   const { getMovies } = require('../apiServices/movies/controller')
    //   const obj = await getMovies()
    //   expect(obj).toEqual([
    //     {
    //       id: 2,
    //       name: 'The School for Good and Evil',
    //       releaseDate: '2022-10-19T05:00:00.000Z',
    //       productionCompany: 'Netflix',
    //       idGenre: 1,
    //       nameGenre: 'Fantasy'
    //     },
    //     {
    //       id: 1,
    //       name: 'Thor: Love and Thunder',
    //       releaseDate: '2022-06-23T05:00:00.000Z',
    //       productionCompany: 'Marvel Studios',
    //       idGenre: 1,
    //       nameGenre: 'Fantasy'
    //     }
    //   ])
    // })
  })
})
