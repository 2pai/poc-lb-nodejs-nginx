const express = require('express')
const moment = require('moment')

const PORT = process.argv[2] || process.env.PORT || 3022
const appName = process.argv[3] || 'horizon'
const app = express()
app.set('trust proxy', ['uniquelocal'])

const commonHandler = (req,res) => {
    const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
    const {getUrl, method, hostname, headers} = req
    const data = {
        message: `hello world from ${appName}`,
        requestPayload:{
            getUrl,
            method,
            hostname,
            headers
        },
        timestamp
    }
    res.send(JSON.stringify(data))
}
app.get('/', commonHandler)
app.get('/ipHash', commonHandler)
app.get('/leastConn', commonHandler)

app.get('/metadata', (req,res) => {
    const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
    const data = {
        "description": "Just an example metadata.",
        "external_url": "https://github.com/2pai/nft-erc721/blob/main/assets/2pai-japan.png",
        "image": "https://github.com/2pai/nft-erc721/raw/main/assets/2pai-japan.png",
        "name": "2Pai Japanese Edition",
        timestamp
      }
    res.send(JSON.stringify(data))
})
app.listen(PORT,() => console.log(`This app is running on ${PORT}`))
