const { Schema, model } = require('mongoose')

const beachSchema = new Schema(
  {
    image: {
      type: [String],
      required: [true, 'Please attach pictures of this beach']
    },
    name: {
      type: String,
      required: [true, 'Beach name is required']
    },
    coords: {
      type: { "lat": String, "lng": String },
      required: [true, 'GPS Coordinates are required']
    },
    transportCoords: {
      type: [{ String, String }]
    },
    length: {
      type: Number,
      required: [true, 'Length is required']
    },
    composition: {
      type: String,
      enum: ["Sand", "Gravel", "Rock", "Shell"]
    },
    sectors: {
      type: Number,
      default: 1
    }
  },
  {
    timestamps: true
  })

module.exports = model('Beach', beachSchema)