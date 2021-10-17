const express = require('express')
const connection = require('./db')
const app = express()
const port = 3000

connection()
app.use(express.json())


// Available Routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})