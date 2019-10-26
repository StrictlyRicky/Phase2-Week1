const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    isbn: {
        type: String,
        required: [true, 'ISBN Is Required']
    },
    title: {
        type: String,
        required: [true, 'Title Is Required']
    },
    author: {
        type: String,
        required: [true, 'Author Is Required']
    },
    category: {
        type: String,
        required: [true, 'Category Is Required']
    },
    stock: {
        type: Number,
        required: [true, 'Stock Is Required']
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book