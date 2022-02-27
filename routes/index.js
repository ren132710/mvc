const express = require('express')
//import the Router() method from express
const router = express.Router()

router.get('/', (req, res) => {
  //test that routes work
  //res.send('hello world')
  res.render('index')
})

module.exports = router
