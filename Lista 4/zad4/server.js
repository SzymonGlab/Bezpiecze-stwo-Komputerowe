
const https = require('https')
const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended:true}))

const options = {
    
    key: fs.readFileSync('privkeyA.pem'),
    cert: fs.readFileSync('certA.crt')
  }

app.get('/', (req, res) => res.sendFile('login2.html', { root: __dirname }))

app.post('/surprise',(req, res) =>  res.send(`Hello, ${req.body.login} I'm really sorry but you've been hacked. Here's your password as a proof: ${req.body.password}`))

https.createServer(options, app).listen(443,'127.0.0.1', () => console.log('app is listening (https)'))

