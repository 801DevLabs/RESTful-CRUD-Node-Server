const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

const ListingSchema = new Schema({
  address: {type: String, required: true, max: 100},
  city: {type: String, required: true},
  state: {type: String, required: true},
})

module.exports = mongoose.model('Listing', ListingSchema)