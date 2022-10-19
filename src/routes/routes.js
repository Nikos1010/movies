const express = require('express')

const moviesRouter = require('../apiServices/movies/routes')

const router = express()

router.use(moviesRouter)

module.exports = router
