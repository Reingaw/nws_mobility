require('dotenv').config()
const express = require('express')
const app = express()
const complaint = require('./routes/complaint')

app.use(express.json())
app.use(complaint)

app.listen(8080,()=> console.log('Server running at localhost:8080'))