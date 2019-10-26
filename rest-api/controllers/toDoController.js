const {Todo} = require('../models')

class ToDoController {

    static findAll(req, res, next) {
        Todo.findAll({
            where: {
                id : req.loggedUser.id
            }
        })
        .then(results => {
            res.status(200).json(results)
        })
        .catch(next)
    }

    static findOne(req, res, next) {
        Todo.findByPk(req.params.id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
    }

    static create(req, res, next) {
        const {title, description} = req.body
        if (!title || !description) {
            next({
                status: 400,
                message: "Please insert title and description!"
            })
        } else {
            Todo.create({
                title: title,
                description: description,
                createdAt: new Date(),
                updatedAt: new Date(),
                user_id : req.loggedUser.id
            })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(next)
        }
    }

    static delete(req, res, next) {
        const {id} = req.params
        Todo.destroy({
            where: {
                id: id
            }
        })
        .then(result => {
            res.status(200).json( { message : 'Successfully Deleted' } )
        })
        .catch(next)
    }

    static update(req, res, next) {
        const {title, description} = req.body
        Todo.update({
            title: title,
            description: description
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            res.status(200).json( { message: 'Successfully updated' } )
        })
        .catch(next)
    }
    static updateSpecific(req,res, next) {
        const {title, description} = req.body
        if (description) {
            Todo.update({
                description
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(result => {
                res.status(200).json( { message : 'Successfully updated' } )
            })
            .catch(next)
        }
        else {
            return next({
                status: 403,
                msg: 'Invalid input'
            })
        }
    }
}

module.exports = ToDoController