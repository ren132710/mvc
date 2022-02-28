if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
//save the express object to an 'app' variable
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

/*
Set up routes
*/
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

/*
Set up views and layouts
*/
//set the view engine to ejs
app.set('view engine', 'ejs')
//location of views
app.set('views', __dirname + '/views')
//location of layouts
app.set('layout', 'layouts/layout')
//switch on expressLayouts
app.use(expressLayouts)
//location of public files
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

/*
connect to mongoose
*/
const mongoose = require('mongoose')

//fetch the connection string from .env
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

//switch on the routes
app.use('/', indexRouter)
app.use('/authors', authorRouter)

app.listen(process.env.PORT || 3000)
