if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
//save the express object to an 'app' variable
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')

/*
Setup views and layouts
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

/*
connect to mongoose
*/
const mongoose = require('mongoose')

//fetch the url from .env
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

//switch on the routes index
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
