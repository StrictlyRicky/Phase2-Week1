const router = require('express').Router()
const BookController = require('../controllers/book')

router.get('/', BookController.findAll)
router.get('/:id', BookController.findById)
router.post('/', BookController.create)
router.delete('/:id', BookController.deleteById)
router.put('/:id', BookController.update)
router.patch('/:id', BookController.updateOne)

module.exports = router