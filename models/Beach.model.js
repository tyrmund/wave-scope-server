const { Schema, model } = require('mongoose')

const beachSchema = new Schema(
  {
    images: {
      type: [String],
      required: [true, 'Please attach pictures of this beach']
    },
    name: {
      type: String,
      required: [true, 'Beach name is required'],
    },
    location: {
      type: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    },
    nearBusStops:
      [{
        name: {
          type: String
        },
        lines: {
          type: [String]
        },
        longitude: {
          type: String
        },
        latitude: {
          type: String
        }
      }],
    length: {
      type: Number,
      required: [true, 'Length is required']
    },
    composition: {
      type: String,
      enum: ["Sand", "Gravel", "Rock", "Shell", "Sand & Rock", "Sand & Gravel", "Sand & Shell", "Gravel & Rock", "Gravel & Shell", "Rock & Shell"]
    },
    sectors: {
      type: Number,
      default: 1
    },
    description: {
      type: String,
      required: [true, 'Please write a brief description of this beach']
    },
    services: {
      type: [String]
    }
  },
  {
    timestamps: true
  })

beachSchema.index({ location: '2dsphere' })

module.exports = model('Beach', beachSchema)