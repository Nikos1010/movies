const { Schema, model } = require('mongoose')

const assetSchema = new Schema({
  name: String,
  typeAsset: String,
  typeFile: String, // Guardar url de ubicacion de archivo
  thumbnail: String, // Muestra un poco de lo que se va a hacer img de inicio)
  state: Number
})

assetSchema.set('toJSON', {
  transform (_, returnedObject) {
    returnedObject.id = returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Asset = model('Asset', assetSchema)

module.exports = Asset
