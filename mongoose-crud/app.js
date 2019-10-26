if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const routes = require('./routes')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3000

const mongoose = require('mongoose')
mongoose.connect(process.env.URL_MONGOOSE,
{ useNewUrlParser : true, useUnifiedTopology : true })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.use(errorHandler)
app.listen(PORT, () => { console.log(`listening at port ${PORT}`) })