const { Todo } = require('../models')


const authorization = (req, res, next) => {
        Todo.findOne(
            {
                where: { id: req.params.id }
            }
        )
        .then((todo) => {
            if (todo) {
                if (todo.user_id === req.loggedUser.id) {
                    next()
                } else {
                    next({ status: 401, message: 'You Are Unauthorized!' })
                }
            } else {
                next({ status: 404, message: 'ToDo Not Found' })
            }
        }).catch(next)
    }

module.exports = authorization