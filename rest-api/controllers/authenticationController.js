const { User } = require('../models')
const { comparePassword } = require('../helpers/bcryptjs')
class authenticationController {
    static register(req, res, next) {
        const { username, password, role } = req.body
        User.create({
            username,
            password,
            role,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(result => {
            res.status(201).json(result)
        })
        .catch(next)
    }
    static login(req, res, next) {
        const { username, password, role } = req.body
        User.findOne({
            where: { username }
        })
        .then(result => {
            if (result && comparePassword(password, result.password)) {
                let payload = {
                    id : result.id,
                    username,
                    role
                }
                let token = encode(payload, 'Infinite-Fox')
                req.headers.user_token = token
                res.status(200).json({ token })
            } else {
                return next({
                    status: 401,
                    message : 'Invalid username/password'
                })
            }
        })
        .catch(next)
    }
}

module.exports = authenticationController