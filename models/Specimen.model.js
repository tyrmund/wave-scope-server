const { Schema, model } = require('mongoose')

const specimenSchema = new Schema(
  {
    image: {
      type: [String],
      required: [true, 'Please attach a picture of this specimen']
    },
    commonName: {
      type: String,
      required: [true, 'Name of specimen is required']
    },
    scientificName: {
      type: String
    },
    mediumSize: {
      type: String,
      required: [true, 'Medium size of specimen is required']
    },
    isEndemic: {
      type: String,
      enum: ['Yes', 'No', 'Not sure']
    },
    habitat: {
      type: String,
      enum: ['Air', 'Earth', 'Water']
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('Specimen', specimenSchema)