module.exports = app => {

    const authRouter = require('./auth.routes')
    app.use('/api/auth', authRouter)

}