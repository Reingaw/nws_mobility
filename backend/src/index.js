const express = require('express')
const mongo = require('mongoose')

mongo.connect('mongodb://localhost:27017', { user: 'root', pass: 'root', dbName: 'nws' })
const complaintSchema = new mongo.Schema({
  name: String,
  address: String,
  complement: String,
  neighborhood: String,
  city: String,
  issue: String
})
const complaint = mongo.model('Complaint', complaintSchema)

const app = express()

app.use(express.json())

app.post('/complaint', (req, res) => {
  try {
    const newComplaint = req.body
    complaint.create(newComplaint)
    
    return res.status(201).json({ message: 'Denúncia salva com sucesso.' })
  }catch {
    return res.status(500).json({ error: 'Não foi possível salvar os dados.' })
  }
})

app.get('/complaint', async (req, res) => {
  try {
    const allComplaints = await complaint.find({})
    return res.status(200).json({ message: 'sucesso', dados: allComplaints })
  }catch {
    return res.status(404).json({ error: 'Não foi possível recuperar os dados.' })
  }
})

app.listen(8080,()=> console.log('Server running at localhost:8080'))