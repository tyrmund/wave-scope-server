module.exports = app => {

    const authRouter = require('./auth.routes')
    app.use('/api/auth', authRouter)

    const beachRouter = require('./beaches.routes')
    app.use('/api/beaches', beachRouter)

}