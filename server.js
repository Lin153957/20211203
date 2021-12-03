const express = require('express')

require('dotenv').config()
const host = process.env.HOST
const port = process.env.PORT

const app = express()

app.get('/', (req, res) => {
    res.send('Hello YSE!!!!')
})

app.get('/profile', (req, res) => {
    res.send('This is profile page')
})

app.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})