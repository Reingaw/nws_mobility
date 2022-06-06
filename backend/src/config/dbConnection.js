const mongo = require('mongoose')

mongo.connect(`mongodb+srv://mongo:uReELUViPq0rMIgB@cluster0.kpgvd.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log('connect'))
  .catch(() => console.log('not connect'))
  
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