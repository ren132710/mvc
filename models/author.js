const mongoose = require('mongoose')

//a schema is similar to a table in rdbms
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Author', authorSchema)
