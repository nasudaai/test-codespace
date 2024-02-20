import fs from 'node:fs'
import { html } from './out.js'

const content = html

fs.writeFile('./public/static.html', content, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('write')
  }
})