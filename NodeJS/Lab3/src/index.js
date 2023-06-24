//importing core modules
const http = require('http')
const path = require('path')

//importing 3rd party libraries
const express = require('express')
const bodyParser = require('body-parser')

//initialize
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

//middleware function that gets executed in EVERY incoming request
// app.use((req, res, next) => {
//     console.log("First Middleware")
//     next()
// })
// app.use((req, res, next) => {
//     console.log("Second Middleware")
//     res.send('<h1>Hello</h1>')
// })

//routes
app.use(require('./routes/check'))
app.use('/recipe', require('./routes/recipe'))
app.use('/admin', require('./routes/admin'))

//catch-all-middleware
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

//listener
const PORT = process.env.PORT || 8000
app.listen(PORT)