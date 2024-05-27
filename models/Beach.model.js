const { Schema, model } = require('mongoose')

const beachSchema = new Schema(
  {
    images: {
      type: [String],
      required: [true, 'Please attach pictures of this beach']
    },
    name: {
      type: String,
      required: [true, 'Beach name is required']
    },
    location: {
      type: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    },
    transportCoords: {
<<<<<<< HEAD
      type: [String]
=======
      type: {
        type: String
      },
      coordinates: {
        type: [[Number]]
      }
>>>>>>> 74c92ce87698addb71a310280632ca76d2c44e2f
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

beachSchema.index({ location: '2dsphere' })
beachSchema.index({ transportCoords: '2dsphere' })

module.exports = model('Beach', beachSchema)