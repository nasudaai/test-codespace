import express from 'express'
import { renderToString } from 'react-dom/server'
import { html } from './dist/main.js'
//console.log(html)

const app = express()
const port = 3001

//app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(html)
})

app.listen(port, () => {
  console.log(`app listening on port http://localhoset:${port}`)
})
