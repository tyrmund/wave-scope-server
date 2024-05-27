const { Schema, model } = require('mongoose')

const sightingSchema = new Schema(
  {
    image: {
      type: String
    },
    location: {
      type: {
        type: String,
      },
      coordinates: {
        type: [Number]
      }
    },
    beach: {
      type: Schema.ObjectId,
      ref: 'Beach',
      required: [true, 'Beach name is required']
    },
    specimen: {
      type: Schema.ObjectId,
      ref: 'Specimen',
      required: [true, 'Specimen name is required']
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: [true, 'User name is required']
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