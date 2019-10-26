const router = require('express').Router()
const dotaRoute = require('./dotaRoute')

router.use('/heroes', dotaRoute)

module.exports = router