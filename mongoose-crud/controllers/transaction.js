const Transaction = require('../models/transaction')

class TransactionController {
    static findAll(req, res, next) {
        Transaction.find().populate('member').populate('booklist').exec()
        .then(transactions => {
            if (transactions) {
                res.status(200).json(transactions)
            } else {
                next({
                    status: 401,
                    msg: 'Transactions Not Found'
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
            Transaction.findById(id).exec()
            .then(transaction => {
                if (transaction) {
                    res.status(200).json(transaction)
                } else {
                    next({
                        status: 403,
                msg: 'Transaction Not Found'
                    })
                }
            })
        } else {
            next({
                status: 403,
                msg: 'Transaction Not Found'
            })
        }
    }
    static create(req, res, next) {
        const { in_date, out_date, due_date, booklist, member } = req.body
        if (!in_date || !out_date || !due_date || !booklist || !member) {
            next({
                status: 401,
                msg: 'All fields must be inputted'
            })
        } else {
            Transaction.create({
                in_date,
                out_date,
                due_date,
                fine : 0,
                member
            })
            .then(transaction => {
                if (transaction) {
                    res.status(201).json(transaction)
                } else {
                    next({
                        status: 401,
                        msg: 'Error in creating transaction'
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
        const { in_date, out_date, due_date, booklist } = req.body
        const { id } = req.params
        if (!in_date || !out_date || !due_date || !booklist) {
            next({
                status: 401,
                msg: 'All fields must be inputted'
            })
        } else {
            Transaction.updateOne(
                {
                    _id: id
                },
                {
                    in_date,
                    out_date,
                    due_date,
                    booklist
                }).exec()
            .then(transaction => {
                if (transaction) {
                    res.status(201).json(transaction)
                } else {
                    next({
                        status: 401,
                        msg: 'Error in updating transaction'
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
            Transaction.updateOne(
                {
                    _id: id
                }, obj).exec()
            .then(transaction => {
                if (transaction) {
                    res.status(201).json(transaction)
                } else {
                    next({
                        status: 401,
                        msg: 'Error in updating transaction'
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
        Transaction.deleteOne({
            _id: id
        }).exec()
        .then(transaction => {
            if (transaction) {
                res.status(200).json({
                    message: `Transaction at id ${id} successfully deleted`
                })
            } else {
                next({
                    status: 403,
                    msg: 'Failed to delete transaction'
                })
            }
        })
        .catch(err => {
            next({
                msg: err.message
            })
        })
    }
    static findByBookId(req, res, next) {
        const { bookId } = req.params
        let result = []
        Transaction.find().populate('member').populate('booklist').exec()
        .then(transactions => {
            transactions.forEach(transaction => {
                transaction.booklist.forEach(book => {
                    if (book._id == bookId) {
                        result.push(transaction)
                    }
                })
            })
            if (result.length === 0) {
                next({
                    status: 403,
                    msg: 'No Books Were Found'
                })
            } else {
                res.status(200).json(result)
            }
        })
        .catch(err => {
            next({
                msg: err.message
            })
        })
    }
}

module.exports = TransactionController