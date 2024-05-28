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
    busStopCoords: [{
      type: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    }],
    length: {
      type: Number,
      required: [true, 'Length is required']
    },
    composition: {
      type: String,
      enum: ["Sand", "Gravel", "Rock", "Shell", "Sand and Rock", "Sand and Gravel", "Sand and Shell", "Gravel and Rock", "Gravel and Shell", "Rock and Shell"]
    },
    sectors: {
      type: Number,
      default: 1
    }
  },
  {
    timestamps: true
  })

beachSchema.index({ location: '2dsphere' })
beachSchema.index({ busStopCoords: '2dsphere' })

module.exports = model('Beach', beachSchema)