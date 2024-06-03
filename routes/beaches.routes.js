const router = require("express").Router()
const { isAuthenticated } = require('../middlewares/verifyToken')
const Beach = require("../models/Beach.model")

router.post("/", isAuthenticated, (req, res, next) => {

  const { images, name, latitude, longitude, nearBusStops, length, composition, sectors, description, services } = req.body
  const { _id: user } = req.payload

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  }

  Beach
    .create({ images, name, location, nearBusStops, length, composition, sectors, description, services, user })
    .then(newBeach => res.status(201).json(newBeach))
    .catch(err => next(err))
})

router.get("/", (req, res, next) => {

  Beach
    .find()
    // select
    .then(allBeaches => res.json(allBeaches))
    .catch(err => next(err))
})

router.get("/search", (req, res, next) => {

  const { name } = req.query

  Beach
    .find({ name: { $regex: name, $options: 'i' } })
    .then(allFoundBeaches => res.json(allFoundBeaches))
    .catch(err => next(err))
})

router.get("/:beachId", (req, res, next) => {

  const { beachId } = req.params

  Beach
    .findById(beachId)
    .then(oneBeach => res.json(oneBeach))
    .catch(err => next(err))
})

router.put("/:beachId", isAuthenticated, (req, res, next) => {

  const { images, name, latitude, longitude, nearBusStops, length, composition, sectors, description, services } = req.body
  const { beachId } = req.params
  const { _id: user } = req.payload
  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  }

  Beach
    .findByIdAndUpdate(beachId, { images, name, location, nearBusStops, length, composition, sectors, description, services, user })
    .then(updatedBeach => res.json(updatedBeach))
    .catch(err => next(err))
})

router.delete("/:beachId", (req, res, next) => {

  const { beachId } = req.params

  Beach
    .findByIdAndDelete(beachId)
    .then(() => res.sendStatus(204))
    .catch(err => next(err))
})

module.exports = router