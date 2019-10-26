const validateEmail = (email) => {
    const re =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const memberSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name Is Required']
    },
    address: {
        type: String,
        required: [true, 'Address Is Required']
    },
    zipcode: {
        type: String,
        required: [true, 'Zip Code Is Required']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email Is Required'],
        validate: [validateEmail, 'Invalid email address']
    },
    phone: {
        type: String,
        required: [true, 'Phone Number Is Required'],
        minlength: 11,
        maxlength: 13

    }
})

const Member = mongoose.model('Member', memberSchema)

module.exports = Member