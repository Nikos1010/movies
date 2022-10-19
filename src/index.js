// require('dotenv').config() //Leer documentacion sobre esto

const { app, PORT } = require('./config/server')

require('./config/conection')

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
