const router = require("express").Router()

const Beach = require("../models/Beach.model")

router.post("/", (req, res, next) => {

    const { images, name, latitude, longitude, busStopCoords, length, composition, sectors } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    const busStopPoints = busStopCoords.map(elm => {
        return (
            {
                type: 'Point',
                coordinates: elm
            }
        )
    })

    Beach
        .create({ images, name, location, busStopCoords: busStopPoints, length, composition, sectors })
        .then(newBeach => res.status(201).json(newBeach))
        .catch(err => next(err))
})

router.get("/", (req, res, next) => {

    Beach
        .find()
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

router.put("/:beachId", (req, res, next) => {

    const { images, name, coords, transportCoords, length, composition, sectors } = req.body
    const { beachId } = req.params

    Beach
        .findByIdAndUpdate(beachId, { images, name, coords, transportCoords, length, composition, sectors })
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