const { response } = require('express')

const ERROR_HANDLERS = {
  CastError: (res) =>
    res.status(400).send({ error: 'BAD REQUEST' }),

  ValidateError: (res, { message }) =>
    res.status(409).send({ error: message }),

  JsonWebTokenError: (res) =>
    res.status(401).json({ error: 'token missing or invalid' }),

  TokenExpirerError: (res) =>
    res.status(401).json({ error: 'token expired' }),

  defaultError: (res, error) => {
    console.error(error.name)
    res.status(500).end()
  }
}

module.exports = (error, req, res, next) => {
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError

  handler(response, error)
}
