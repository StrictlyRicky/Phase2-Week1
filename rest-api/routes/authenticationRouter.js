const authenticationRouter = require('express').Router()
const authenticationController = require('../controllers/authenticationController')

authenticationRouter.post('/register', authenticationController.register)
authenticationRouter.post('/login', authenticationController.login)

module.exports = authenticationRouter