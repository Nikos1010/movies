const express = require('express')
const { getMovies, getMovie } = require('./movies.controller')

const router = express.Router()

router.get('/', getMovies)

router.get('/:id', getMovie)

module.exports = router
