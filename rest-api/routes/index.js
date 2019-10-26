const mainRouter = require('express').Router()
const toDoRouter = require('./toDoRouter')
const authenticationRouter = require('./authenticationRouter')

mainRouter.get('/', (req, res) => {
    res.send(`Welcome to Audrick's ToDo App!`)
})
mainRouter.use('/todos', toDoRouter)
mainRouter.use('/', authenticationRouter)

module.exports = mainRouter