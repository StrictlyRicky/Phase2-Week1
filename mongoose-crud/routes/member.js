const router = require('express').Router()
const memberController = require('../controllers/member')

router.get('/', memberController.findAll)
router.get('/:id', memberController.findById)
router.post('/', memberController.create)
router.put('/:id', memberController.update)
router.patch('/:id', memberController.updateOne)
router.delete('/:id', memberController.deleteById)

module.exports = router