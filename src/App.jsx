import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [politicians, setPoliticians] = useState([])
  const [filterQuery, setFilterQuery] = useState("")

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

  return (
    <>
      <div className="container">
        <h1>Lista Politici</h1>
        <input type="text" onChange={e => {setFilterQuery(e.target.value)}}/>
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
