const router = require('express').Router()

const Sighting = require('../models/Sighting.model')

router.post('/', (req, res, next) => {

  const { coords, beachId, specimenId, comment, confirmations, rejections } = req.body

  Sighting
    .create({ coords, beachId, specimenId, comment, confirmations, rejections })
    .then(newSighting => res.json(newSighting))
    .catch(err => next(err))

})


module.exports = router