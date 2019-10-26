const router = require('express').Router()
const gitRouter = require('./gitRouter')
const authRouter = require('./authRouter')

router.use('/', gitRouter)
router.use('/logIn', authRouter)


module.exports = router