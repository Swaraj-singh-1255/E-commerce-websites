import { useState } from 'react'
import './App.css'
import { RouterProvider } from "react-router"
import { routes } from './app.routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello World</h1>
    </>
  )
}

export default App
