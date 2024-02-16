import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))


root.render(
  <App />
)

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