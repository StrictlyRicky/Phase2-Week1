const Book = require('../models/book')
class BookController {
    static findAll(req, res) {
        Book.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({
                message: 'Failed to find all books'
            })
        })
    }
    static findById(req, res) {
        Book.findById(req.params.id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(401).json({
                    message: 'Book Not Found'
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: 'Book Not Found'
            })
        })
    }
    static update(req, res) {
        const { id } = req.params
        const { isbn, title, author, category, stock } = req.body
        if (!isbn || !title || !author || !category || !stock) {
            res.status(400).json({
                message: 'Fill All Field'
            })
        } else {
            Book.update(id, {
                isbn,
                title,
                author,
                category,
                stock
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(401).json({
                    message: 'Error while updating new data'
                })
            })
        }
    }
    static updateOne(req, res) {
        const { id } = req.params
        const { isbn, title, author, category, stock } = req.body
        let obj = {}
        for (let prop in req.body) {
            if (req.body[prop]) {
                obj[prop] = req.body[prop]
            }
        }
        Book.update(id, {
            $set: obj
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(401).json({
                message: 'Error while updating new data'
            })
        })
    }
    static create(req, res) {
        const { isbn, title, author, category, stock } = req.body
        if (!isbn || !title || !author || !category || !stock) {
            res.status(400).json({
                message: 'Fill All Field'
            })
        } else {
            Book.create({
                isbn,
                title,
                author,
                category,
                stock
            })
            .then(data => {
                res.status(201).json(data.ops[0])
            })
            .catch(err => {
                res.status(401).json({
                    message: 'Error while inserting new data'
                })
            })
        }
    }
    static deleteById(req, res) {
        const { id } = req.params
        if (!id) {
            res.status(400).json({
                message: 'Invalid input'
            })
        } else {
            Book.delete(id)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(401).json({
                    message: 'Error while deleting data'
                })
            })
        }
    }
}

module.exports = BookController