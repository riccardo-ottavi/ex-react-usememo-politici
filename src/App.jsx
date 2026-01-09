import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [politicians, setPoliticians] = useState([])

  async function fetchPolicians() {
    const res = await fetch("http://localhost:3333/politicians")
    const data = await res.json();
    setPoliticians(data)
  }

  useEffect(() => {
    {
      fetchPolicians();
    }
  }, [])

  console.log(politicians)

  return (
    <>
      <div className="container">
        <h1>Lista Politici</h1>
        {politicians.map(p => (
          <Card
            id={p.name}
            politician={p}
          />
        ))}
      </div>

    </>
  )
}

export default App
