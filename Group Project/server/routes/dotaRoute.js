const router = require('express').Router()
const DotaController = require('../controllers/dota')


router.get('/', DotaController.getHeroes)
router.post('/recommendation', DotaController.findHeroes)

module.exports = router