const express = require('express')
const router = express.Router()

const complaint = require('../config/dbConnection')

router.post('/complaint', (req, res) => {
  try {
    const newComplaint = req.body
    complaint.create(newComplaint)
    
    return res.status(201).json({ success: true, message: 'Denúncia salva com sucesso.' })
  }catch {
    return res.status(500).json({ success: false, error: 'Não foi possível salvar os dados.' })
  }
})

router.get('/complaint', async (req, res) => {
  try {
    const allComplaints = await complaint.find({})
    return res.status(200).json({ success: true, data: allComplaints })
  }catch {
    return res.status(404).json({ success: false, error: 'Não foi possível recuperar os dados.' })
  }
})

module.exports = router