const express = require('express')

const moviesRouter = require('../apiServices/movies/routes')

const router = express()

router.use('/api/movies', moviesRouter)

router.use('/api/genre', (req, res) => { res.end() })

module.exports = router
