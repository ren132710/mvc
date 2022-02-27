const express = require('express')
//we need the Router() method from express
const router = express.Router()

router.get('/', (req, res) => {
  //test that routes work
  //res.send('hello world')
  res.render('index')
})

module.exports = router
