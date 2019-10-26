const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mainRouter = require('./routes')
const errorHandler = require('./middleware/errorHandler')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', mainRouter)
app.get('/', (req, res) => {
    res.redirect('/api')
})
app.use(errorHandler)
app.listen(PORT, () => {console.log(`listening at port ${PORT}`)})