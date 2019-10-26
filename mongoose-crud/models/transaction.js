const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const transactionSchema = new Schema({
    member: {
        type: ObjectId,
        ref: 'Member'
    },
    in_date: {
        type: Date,
        required: [true, 'In_Date Is Required']
    },
    out_date: {
        type: Date,
        required: [true, 'Out_Date Is Required']
    },
    due_date: {
        type: Date,
        required: [true, 'Due_Date Is Required']
    },
    fine: Number,
    booklist: [{
        type: ObjectId,
        required: [true, 'BookId Is Required'],
        ref: 'Book'
    }]
})

transactionSchema.pre('save', function (next) {
    const dayInMs = 24 * 60 * 60 * 1000
    const in_Date = new Date(this.in_Date)
    const due_Date = new Date(this.due_Date)
    const diffDays = Math.round((in_Date - due_Date) / dayInMs)
    console.log(diffDays)
    if (diffDays > 0) {
        this.fine = diffDays * 1000
    } else {
        this.fine = 0
    }
    next()
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction