const router = require("express").Router()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 10

const User = require("../models/User.model")
const { isAuthenticated } = require("../middlewares/verifyToken")

router.post("/signup", (req, res, next) => {

    const { email, password, username, postalCode, country, profilePic } = req.body

    if (email === '' || password === '' || username === '' || postalCode === '' || country === '') {
        res.status(400).json({ message: "Provide email, password and name" })
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!emailRegex.test(email)) {
        res.status(400).json({ message: 'Provide a valid email address.' })
        return
    }

    if (password.length < 2) {
        res.status(400).json({ message: 'Password must have at least 3 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(password, salt);

            User
                .create({ username, email, password: hashedPassword })
                .then(() => res.sendStatus(201))
                .catch(err => next(err))
        })
        .catch(err => next(err))
})




router.post('/login', (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
                return;
            }

            const passwordCorrect = bcrypt.compareSync(password, foundUser.password)

            if (!passwordCorrect) {
                res.status(401).json({ message: "Incorrect password" })
                return
            }

            const { _id, email, username } = foundUser

            const payload = { _id, email, username }

            const authToken = jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                { algorithm: 'HS256', expiresIn: "6h" }
            )

            res.json({ authToken: authToken });

        })
        .catch(err => next(err))
})


router.get('/verify', isAuthenticated, (req, res) => {
    res.json(req.payload);
})


module.exports = router