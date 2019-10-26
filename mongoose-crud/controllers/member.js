const Member = require('../models/members')

class MemberController {
    static findAll(req, res, next) {
        Member.find().exec()
        .then(members => {
            if (members) {
                res.status(200).json(members)
            } else {
                next({
                    status: 401,
                    msg: 'Members Not Found'
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
            Member.findById(id).exec()
            .then(member => {
                if (member) {
                    res.status(200).json(member)
                } else {
                    next({
                        status: 403,
                msg: 'Member Not Found'
                    })
                }
            })
        } else {
            next({
                status: 403,
                msg: 'Member Not Found'
            })
        }
    }
    static create(req, res, next) {
        const { name, address, zipcode, email, phone } = req.body
        if (!name || !address || !zipcode) {
            next({
                status: 401,
                msg: 'All fields must be inputted'
            })
        } else {
            Member.create({
                name,
                address,
                zipcode,
                email,
                phone
            })
            .then(member => {
                if (member) {
                    res.status(201).json(member)
                } else {
                    next({
                        status: 401,
                        msg: 'Error in creating member'
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
        const { name, address, zipcode, email, phone } = req.body
        const { id } = req.params
        if (!name || !address || !zipcode || !email || !phone) {
            next({
                status: 401,
                msg: 'All fields must be inputted'
            })
        } else {
            Member.updateOne(
                {
                    _id: id
                },
                {
                    name,
                    address,
                    zipcode,
                    email,
                    phone
                }).exec()
            .then(member => {
                if (member) {
                    res.status(201).json(member)
                } else {
                    next({
                        status: 401,
                        msg: 'Error in updating member'
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
            Member.updateOne(
                {
                    _id: id
                }, obj).exec()
            .then(member => {
                if (member) {
                    res.status(201).json(member)
                } else {
                    next({
                        status: 401,
                        msg: 'Error in updating member'
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
        Member.deleteOne({
            _id: id
        }).exec()
        .then(member => {
            if (member) {
                res.status(200).json({
                    message: `Member at id ${id} successfully deleted`
                })
            } else {
                next({
                    status: 403,
                    msg: 'Failed to remove member'
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

module.exports = MemberController