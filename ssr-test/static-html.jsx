import React from 'react'
import { renderToString } from 'react-dom/server'

function Page() {
  return (
    <html>
      <head>
        <title>title</title>
      </head>
      <body>
        <h1>Static HTML</h1>
        <p>server rendering</p>
        <div id="root"></div>

        <script src='index.js'></script>
      </body>
    </html>
  )
}

const html = renderToString(<Page />)
export { html, Page }
console.log(html)