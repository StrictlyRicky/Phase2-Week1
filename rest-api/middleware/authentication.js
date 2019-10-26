const { decodeToken } = require('../helpers/jwt')

const authentication = (req, res, next) => {
    try {
        const loggedUser = decodeToken(req.headers.token)
        req.loggedUser = loggedUser
        next()
    } catch (err) {
        next({ status: 401, message: 'You must sign in first!' })
    }
}

module.exports = authentication