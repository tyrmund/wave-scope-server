const router = require('express').Router()

const { isAuthenticated } = require('../middlewares/verifyToken')
const Specimen = require('./../models/Specimen.model')

router.post('/', isAuthenticated, (req, res, next) => {

  const { _id: user } = req.payload
  const { images, commonName, scientificName, mediumSize, isEndemic, habitat, description } = req.body

  Specimen
    .create({ user, images, commonName, scientificName, mediumSize, isEndemic, habitat, description })
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

router.put('/:specimenId', isAuthenticated, (req, res, next) => {

  const { specimenId } = req.params
  const { _id: user } = req.payload
  const { images, commonName, scientificName, mediumSize, isEndemic, habitat, description } = req.body

  Specimen
    .findByIdAndUpdate(specimenId, { user, images, commonName, scientificName, mediumSize, isEndemic, habitat, description })
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