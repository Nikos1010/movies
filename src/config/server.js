const express = require('express')
const cors = require('cors')

const { prodMysql, testMysql } = require('./enviroment')
const generalRoute = require('../routes/routes')
const { NODE_ENV } = process.env

const app = express()

app.use(cors())
app.use(express.json())

app.use(generalRoute)

const PORT = NODE_ENV === 'test'
  ? testMysql.PORT
  : prodMysql.PORT

module.exports = {
  app,
  PORT
}
