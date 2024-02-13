import React from "react"
import { Page } from "../tostring"
import { useState } from "react"

export default function App() {
  return (
    <>
    
    <Page>
        
      <Counter />
    </Page>
    
    
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      clicked {count} times
    </button>

  )
}