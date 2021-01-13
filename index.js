const express = require('express')
const bp = require('body-parser')
const moment = require('moment')

const PORT = process.env.PORT || 3022
const app = express()
app.set('trust proxy', ['uniquelocal']) 

app.get('/', (req,res) => {
    const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
    const {getUrl, method, hostname, headers} = req
    const data = {
        method,
        hostname,
        headers,
        timestamp
    }
    res.send(JSON.stringify(data))
})
app.get('/cached', (req,res) => {
    const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
    const {getUrl, method, hostname, headers} = req
    const data = {
        method,
        hostname,
        headers,
        timestamp
    }
    res.send(JSON.stringify(data))
})
app.listen(PORT,() => console.log(`This app is running on ${PORT}`))