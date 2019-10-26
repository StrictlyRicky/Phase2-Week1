const bcryptjs = require('bcryptjs')

const hashPassword = (password) => {
    const saltRounds = 10
    const salt = bcryptjs.genSaltSync(saltRounds)
    return bcryptjs.hashSync(password, salt)
}

const comparePassword = (password, hashPassword) => {
    return bcryptjs.compareSync(password, hashPassword)
}

module.exports = { hashPassword, comparePassword }