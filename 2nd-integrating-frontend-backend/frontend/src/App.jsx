import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [joke, setjoke] = useState([])
useEffect(() => {
  axios.get('/api/jokes')
  .then((response) => {
    setjoke(response.data)
    console.log(response.data);
  })


}, )

  return (
    <>
    <h1>Hello Im Huzaifa!</h1>
    <h2>{joke.length}</h2>
    {joke.map((joke, index) =>
       (
        <div key={index}>
          <h3>{joke.joke}</h3>
        </div>
      )
    )}

    </>
  )
}

export default App
