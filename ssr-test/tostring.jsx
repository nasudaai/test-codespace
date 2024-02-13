import React from 'react'
import { renderToString } from 'react-dom/server'

function Page() {
  return (
    <html>
      <head>
        <title>title</title>
      </head>
      <body>
        <div id="root">
        <h1>Title</h1>
        <p>server rendering</p>
        <script src='main.js'></script>
        </div>
      </body>
    </html>
  )
}

const html = renderToString(<Page />)
export { html, Page }
console.log(html)