if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
//save the app function in express to a variable
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')

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

//set the mongoose db connection
const mongoose = require('mongoose')

//fetch the env variable, don't hardcode
//TODO: may not need the optional param
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

//switch on the routes index
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
