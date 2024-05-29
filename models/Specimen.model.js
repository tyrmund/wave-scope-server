const { Schema, model } = require('mongoose')

const specimenSchema = new Schema(
  {
    images: {
      type: [String],
      required: [true, 'Please attach a picture of this specimen']
    },
    commonName: {
      type: String,
      required: [true, 'Name of specimen is required']
    },
    scientificName: {
      type: String,
      unique: true,
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
    },
    description: {
      type: String,
      required: [true, 'Please write a description of this specimen']
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('Specimen', specimenSchema)