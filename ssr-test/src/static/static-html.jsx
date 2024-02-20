import React from 'react'
import { renderToString } from 'react-dom/server'

function App() {
  return (
    <>
      <h2>React component</h2>
      <p>This is static HTML.
      'express.static'
      </p>
    </>
  )
}


function Page() {
  return (
    <html>
      <head>
        <title>Static Page</title>
      </head>
      <body>
        <h1>Static HTML</h1>
        <p>server rendering</p>
        <div id="root"></div>
        <App />
        <script src='index.js'></script>
      </body>
    </html>
  )
}

const html = renderToString(<Page />)
export { html, Page, App }
console.log(html)