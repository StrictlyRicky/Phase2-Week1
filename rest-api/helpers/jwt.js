const jwt = require('jsonwebtoken')

const encodeToken = (payload) => {
    return jwt.sign(payload, 'Infinite-Fox')
}

const decodeToken = (token) => {
    return jwt.verify(token, 'Infinite-Fox')
}

module.exports = { encodeToken, decodeToken }