const express = require('express')
const cors = require('cors')

require('dotenv').config()
require('./config/conection')

const generalRoute = require('./routes/routes')
const { notFound, handleErrors } = require('./middleware')
const { PORT } = process.env

const app = express()

app.use(cors())
app.use(express.json())

app.use(generalRoute)
app.use(notFound)
app.use(handleErrors)

const port = PORT || 3001

app.listen(port, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { app }
