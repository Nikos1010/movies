const mongoose = require('mongoose')

const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

class MongoDB {
  connection () {
    const conectionString = this.getURI()
    if (conectionString) {
      mongoose.connect(conectionString)
        .then(() => console.log('Database Connect'))
        .catch(err => console.error(err))
      this.excption()
    }
  }

  getURI () {
    const conectionString = NODE_ENV === 'test'
      ? MONGO_DB_URI_TEST
      : MONGO_DB_URI

    if (this.validateURI(conectionString)) return

    return conectionString
  }

  validateURI (conectionString) {
    if (!conectionString) console.error('Hay que tener un archivo .env')
  }

  excption () {
    process.on('uncaughtException', error => {
      console.error(error)
      mongoose.disconnect()
    })
  }
}

module.exports = MongoDB
