const toDoRouter = require('express').Router()
const toDoController = require('../controllers/toDoController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
toDoRouter.use(authentication)
toDoRouter.get('/', toDoController.findAll)
toDoRouter.get('/:id', authorization, toDoController.findOne)
toDoRouter.post('/', toDoController.create)
toDoRouter.delete('/:id', authorization, toDoController.delete)
toDoRouter.put('/:id', authorization,toDoController.update)
toDoRouter.patch('/:id', authorization, toDoController.updateSpecific)

module.exports = toDoRouter