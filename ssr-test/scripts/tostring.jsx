import React from 'react'
import { renderToString } from 'react-dom/server'

function Page() {
  return (
    <html>
      <head>
        <title>title</title>
      </head>
      <body>
        <h1>Title</h1>
      </body>
    </html>
  )
}

const html = renderToString(<Page />)
console.log(html)