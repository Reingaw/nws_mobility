const mongo = require('mongoose')

mongo.connect(process.env.MONGO_HOSTNAME, { 
  user: process.env.MONGO_USERNAME, 
  pass: process.env.MONGO_PASSWORD, 
  dbName: process.env.MONGO_DATABASE
})
const complaintSchema = new mongo.Schema({
  name: String,
  address: String,
  complement: String,
  neighborhood: String,
  city: String,
  issue: String
})
const complaint = mongo.model('Complaint', complaintSchema)

module.exports = complaint