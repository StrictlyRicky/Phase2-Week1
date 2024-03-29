if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const router = require('./router')
const morgan = require('morgan')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', router)
app.use(errorHandler)

app.listen(port, () => { console.log(`listening at port ${port}`) })