import path from 'path'
import { fileURLToPath } from 'url'
//import React from 'react'
import express from 'express'
//import { renderToString } from 'react-dom/server'
//import App from './server/App.js'
import { html } from './server/main.js'

//define __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3001

app.use(express.static('public'))
app.get('/', (req, res) => {
 // const html = renderToString(App)
  res.send(html)
})

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/public/test.html')
})


app.listen(port, () => {
  console.log(`app listening on port http://localhoset:${port}`)
})
