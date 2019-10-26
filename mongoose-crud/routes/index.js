const router = require('express').Router()
const bookRouter = require('./book')
const memberRouter = require('./member')
const transactionRouter = require('./transaction')

router.use('/books', bookRouter)
router.use('/members', memberRouter)
router.use('/transactions', transactionRouter)

module.exports = router