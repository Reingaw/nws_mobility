require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const complaint = require('./routes/complaint')

app.use(cors())
app.use(express.json())
app.use(complaint)

app.listen(8080,()=> console.log('Server running at localhost:8080'))