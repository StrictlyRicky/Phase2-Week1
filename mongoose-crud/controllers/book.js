const Book = require('../models/book')

class BookController {
    static findAll(req, res, next) {
        Book.find().exec()
        .then(books => {
            if (books) {
                res.status(200).json(books)
            } else {
                next({
                    status: 401,
                    msg: 'Books Not Found'
                })
            }
        })
        .catch(err => {
            next({
                msg: err.message
            })
        })
    }
    static findById(req, res, next) {
        const { id } = req.params
        if (id) {
            Book.findById(id).exec()
            .then(book => {
                if (book) {
                    res.status(200).json(book)
                } else {
                    next({
                        status: 403,
                msg: 'Book Not Found'
                    })
                }
            })
        } else {
            next({
                status: 403,
                msg: 'Book Not Found'
            })
        }
    }
    static create(req, res, next) {
        const { isbn, title, author, category, stock } = req.body
        if (!isbn || !title || !author || !category || !stock) {
            next({
                status: 401,
                msg: 'All fields must be inputted'
            })
        } else {
            Book.create({
                isbn,
                title,
                author,
                category,
                stock
            })
            .then(book => {
                if (book) {
                    res.status(201).json(book)
                } else {
                    next({
                        status: 401,
                        msg: 'Error in creating book'
                    })
                }
            })
            .catch(err => {
                next({
                    msg: err.message
                })
            })
        }
    }
    static update(req, res, next) {
        const { isbn, title, author, category, stock } = req.body
        const { id } = req.params
        if (!isbn || !title || !author || !category || !stock) {
            next({
                status: 401,
                msg: 'All fields must be inputted'
            })
        } else {
            Book.updateOne(
                {
                    _id: id
                },
                {
                    isbn,
                    title,
                    author,
                    category,
                    stock
                }).exec()
            .then(book => {
                if (book) {
                    res.status(201).json(book)
                } else {
                    next({
                        status: 401,
                        msg: 'Error in updating book'
                    })
                }
            })
            .catch(err => {
                next({
                    msg: err.message
                })
            })
        }
    }
    static updateOne(req, res, next) {
        const { id } = req.params
        let obj = {}
        for (let prop in req.body) {
            if (req.body[prop]) {
                obj[prop] = req.body[prop]
            }
        }
            Book.updateOne(
                {
                    _id: id
                }, obj).exec()
            .then(book => {
                if (book) {
                    res.status(201).json(book)
                } else {
                    next({
                        status: 401,
                        msg: 'Error in updating book'
                    })
                }
            })
            .catch(err => {
                next({
                    msg: err.message
                })
            })
    }
    static deleteById(req, res, next) {
        const { id } = req.params
        Book.deleteOne({
            _id: id
        }).exec()
        .then(book => {
            if (book) {
                res.status(200).json({
                    message: `Book at id ${id} successfully deleted`
                })
            } else {
                next({
                    status: 403,
                    msg: 'Failed to delete book'
                })
            }
        })
        .catch(err => {
            next({
                msg: err.message
            })
        })
    }
    static findByField(req, res, next) {
        const { title, author } = req.body
        Book.find({
            $or:
            [
                { title },
                { author }
            ]
        }).exec()
        .then(books => {
            if (books) {
                if (books.length === 0) {
                    next({
                        status: 403,
                        msg: 'Missing input from body'
                    })
                } else {
                    res.status(200).json(books)
                }
            } else {
                next({
                    status: 401,
                    msg: 'Books Not Found'
                })
            }
        })
        .catch(err => {
            next({
                msg: err.message
            })
        })
    }
}

module.exports = BookController