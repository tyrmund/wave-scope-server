const router = require('express').Router()

const Specimen = require('./../models/Specimen.model')

router.post('/', (req, res, next) => {

  const { images, commonName, scientificName, mediumSize, isEndemic, habitat } = req.body

  Specimen
    .create({ images, commonName, scientificName, mediumSize, isEndemic, habitat })
    .then(newSpecimen => res.status(201).json(newSpecimen))
    .catch(err => next(err))
})


router.get('/', (req, res, next) => {

  Specimen
    .find()
    // select
    .then(allSpecimens => res.json(allSpecimens))
    .catch(err => next(err))
})

router.get('/search', (req, res, next) => {

  const { commonName } = req.query

  Specimen
    .find({ commonName: { $regex: commonName, $options: 'i' } })
    .then(allSpecimens => res.json(allSpecimens))
    .catch(err => next(err))

})

router.get('/:specimenId', (req, res, next) => {

  const { specimenId } = req.params

  Specimen
    .findById(specimenId)
    .then(oneSpecimen => res.json(oneSpecimen))
    .catch(err => next(err))
})

router.put('/:specimenId', (req, res, next) => {

  const { specimenId } = req.params
  const { images, commonName, scientificName, mediumSize, isEndemic, habitat } = req.body

  Specimen
    .findByIdAndUpdate(specimenId, { images, commonName, scientificName, mediumSize, isEndemic, habitat })
    .then(updatedSpecimen => res.json(updatedSpecimen))
    .catch(err => next(err))

})

router.delete('/:specimenId', (req, res, next) => {

  const { specimenId } = req.params

  Specimen
    .findByIdAndDelete(specimenId)
    .then(() => res.sendStatus(204))
    .catch(err => next(err))
})

module.exports = router