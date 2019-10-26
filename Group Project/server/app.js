if(process.env.NODE_ENV === 'development') require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const cors = require('cors')
// connect to mongoose
require('./config/mongooseConnect')

const app = express()

const PORT = process.env.PORT || 3000

//middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// main routes
app.use('/', routes)

// init app
app.listen(PORT, () => console.log('SERVER LISTENING ON PORT ', PORT))