import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [politicians, setPoliticians] = useState([])

  async function fetchPolicians(){
    const res = await fetch("http://localhost:3333/politicians")
    const data = await res.json();
    setPoliticians(data)
  }

  useEffect(() => {{
    fetchPolicians();
  }},[])

  console.log(politicians)

  return (
    <>
      <h1>Prova</h1>
    </>
  )
}

export default App
