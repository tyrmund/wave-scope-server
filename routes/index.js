module.exports = app => {

    const authRouter = require('./auth.routes')
    app.use('/api/auth', authRouter)

    const specimenRouter = require('./specimens.routes')
    app.use('/api/specimens', specimenRouter)

    const sightingRouter = require('./sightings.routes')
    app.use('/api/sightings', sightingRouter)

}