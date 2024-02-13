import React from "react"
import { Counter } from "./components/Counter"

function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="styleSheet" href="styles.css"></link>
        <title>Title</title>
      </head>
      <body>
        
        <h1>server render</h1>
        <p>server components</p>
        <p>add text</p>
        <ul>
          <li>fish</li>
          <li>flower</li>
          <li>rice</li>
        </ul>
        <div id="root">
          <h2>react component</h2>
          <Counter />
        </div>
        <script type="module" src="./main.js"></script>
      </body>
    </html>
  )
}

export default App