const { Schema, model } = require('mongoose')

const sightingSchema = new Schema(
  {
    image: {
      type: String
    },
    coords: {
      type: {
        'lat': String,
        'lng': String
      }
    },
    beach: {
      type: Schema.ObjectId,
      ref: 'Beach',
    },
    specimen: {
      type: Schema.ObjectId,
      ref: 'Specimen',
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    comment: {
      type: String
    },
    confirmations: {
      type: Number,
      default: 0
    },
    rejections: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('Sighting', sightingSchema)