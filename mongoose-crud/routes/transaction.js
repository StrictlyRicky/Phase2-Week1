const router = require('express').Router()
const transactionController = require('../controllers/transaction')

router.get('/', transactionController.findAll)
router.get('/book/:bookId', transactionController.findByBookId)
router.get('/:id', transactionController.findById)
router.post('/', transactionController.create)
router.put('/:id', transactionController.update)
router.patch('/:id', transactionController.updateOne)
router.delete('/:id', transactionController.deleteById)
router.get('/filter/:bookId', transactionController.findByBookId)

module.exports = router