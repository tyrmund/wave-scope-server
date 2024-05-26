module.exports = app => {

    const authRouter = require('./auth.routes')
    app.use('/api/auth', authRouter)

    const beachRouter = require('./beaches.routes')
    app.use('/api/beaches', beachRouter)

    const specimenRouter = require('./specimens.routes')
    app.use('/api/specimens', specimenRouter)

    const sightingRouter = require('./sightings.routes')
    app.use('/api/sightings', sightingRouter)

}