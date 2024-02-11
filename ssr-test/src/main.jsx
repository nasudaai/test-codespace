import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

function Html() {
  return (
    <App />
  )
}

const html = renderToString(<Html />)
console.log(html)

export { html }