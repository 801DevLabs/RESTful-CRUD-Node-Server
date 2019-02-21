const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dev_db_url = 'mongodb+srv://newAdmin:admin123456@cluster0-xerm8.gcp.mongodb.net/listing'

const mongoDB = process.env.MONGODB_URI || dev_db_url
mongoose.connect(mongoDB, {useNewUrlParser: true})
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const listing = require('./routes/listing.route')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/listings', listing)

const port = (process.env.PORT || 5000)

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`)
})