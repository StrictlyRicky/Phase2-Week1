const router = require('express').Router()
const bookController = require('../controllers/book')

router.get('/', bookController.findAll)
router.get('/:id', bookController.findById)
router.post('/', bookController.create)
router.put('/:id', bookController.update)
router.patch('/:id', bookController.updateOne)
router.delete('/:id', bookController.deleteById)
router.post('/filter', bookController.findByField)

module.exports = router