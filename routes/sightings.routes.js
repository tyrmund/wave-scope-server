const router = require('express').Router()

const Sighting = require('../models/Sighting.model')

router.post('/', (req, res, next) => {

  const { coords, beach, specimen, user, comment, confirmations, rejections } = req.body

  Sighting
    .create({ coords, beach, specimen, user, comment, confirmations, rejections })
    .then(newSighting => res.json(newSighting))
    .catch(err => next(err))

})

router.get('/', (req, res, next) => {

  Sighting
    .find()
    .populate(['beach', 'specimen', 'user'])
    .then(allSightings => res.json(allSightings))
    .catch(err => next(err))

})


//TO REVIEW
// router.get('/search', (req, res, next) => {

//   res.send(req.query)

// })

router.get('/:sightingId', (req, res, next) => {

  const { sightingId } = req.params

  Sighting
    .findById(sightingId)
    .populate(['beach', 'specimen', 'user'])
    .then(oneSighting => res.json(oneSighting))
    .catch(err => next(err))

})

router.put('/:sightingId', (req, res, next) => {

  const { sightingId } = req.params
  const { coords, beach, specimen, user, comment, confirmations, rejections } = req.body

  Sighting
    .findByIdAndUpdate(sightingId, { coords, beach, specimen, user, comment, confirmations, rejections })
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

module.exports = router