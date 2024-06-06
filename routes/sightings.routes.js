const router = require('express').Router()

const { isAuthenticated } = require('../middlewares/verifyToken')
const Sighting = require('../models/Sighting.model')

router.post('/', isAuthenticated, (req, res, next) => {

  const { _id: user } = req.payload
  const { images, latitude, longitude, beach, specimen, comment, confirmations, rejections } = req.body

  const location = {
    type: "Point",
    coordinates: [longitude, latitude]
  }

  Sighting
    .create({ images, location, beach, specimen, user, comment, confirmations, rejections })
    .then(newSighting => res.json(newSighting))
    .catch(err => next(err))
})

router.get('/', (req, res, next) => {

  const { totalItems } = req.query

  Sighting
    .find()
    .sort({ createdAt: -1 })
    .limit(totalItems)
    .populate(['beach', 'specimen', 'user'])
    .then(allSightings => res.json(allSightings))
    .catch(err => next(err))

})

router.get('/sightingsByBeach/:beachId', (req, res, next) => {

  const { beachId } = req.params

  Sighting
    .find({ beach: { $eq: beachId } })
    .sort({ createdAt: -1 })
    .populate(['beach', 'specimen', 'user'])
    .then(sightingsByBeach => res.json(sightingsByBeach))
    .catch(err => next(err))

})

router.get('/:sightingId', (req, res, next) => {

  const { sightingId } = req.params

  Sighting
    .findById(sightingId)
    .populate(['beach', 'specimen', 'user'])
    .then(oneSighting => res.json(oneSighting))
    .catch(err => next(err))
})

router.put('/:sightingId', isAuthenticated, (req, res, next) => {

  const { sightingId } = req.params
  const { _id: user } = req.payload
  const { images, latitude, longitude, beach, specimen, comment, confirmations, rejections } = req.body

  const location = {
    type: "Point",
    coordinates: [longitude, latitude]
  }

  Sighting
    .findByIdAndUpdate(sightingId, { images, location, beach, specimen, user, comment, confirmations, rejections })
    .populate(['beach', 'specimen', 'user'])
    .then(updatedSighting => res.json(updatedSighting))
    .catch(err => next(err))

})

router.delete('/:sightingId', (req, res, next) => {

  const { sightingId } = req.params

  Sighting
    .findByIdAndDelete(sightingId)
    .then(() => res.sendStatus(204))
    .catch(err => next(err))
})

router.post('/:sightingId/confirmation', isAuthenticated, (req, res, next) => {

  const { sightingId } = req.params
  const { _id: user } = req.payload

  Sighting
    .findByIdAndUpdate(sightingId, { $push: { confirmations: user } })
    .then(updatedConfirmations => res.json(updatedConfirmations))
    .catch(err => next(err))

})

router.delete('/:sightingId/confirmation', isAuthenticated, (req, res, next) => {

  const { sightingId } = req.params
  const { _id: user } = req.payload

  Sighting
    .findByIdAndUpdate(sightingId, { $pull: { confirmations: user } })
    .then(updatedConfirmations => res.json(updatedConfirmations))
    .catch(err => next(err))

})

router.post('/:sightingId/rejection', isAuthenticated, (req, res, next) => {

  const { sightingId } = req.params
  const { _id: user } = req.payload

  Sighting
    .findByIdAndUpdate(sightingId, { $push: { rejections: user } })
    .then(updatedRejections => res.json(updatedRejections))
    .catch(err => next(err))

})

router.delete('/:sightingId/rejection', isAuthenticated, (req, res, next) => {

  const { sightingId } = req.params
  const { _id: user } = req.payload

  Sighting
    .findByIdAndUpdate(sightingId, { $pull: { rejections: user } })
    .then(updatedRejections => res.json(updatedRejections))
    .catch(err => next(err))

})

module.exports = router