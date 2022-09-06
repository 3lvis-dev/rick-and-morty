import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResidents from './components/CardResidents'
import Location from './components/Location'

function App() { 
  const [location, setLocation] = useState()
  const [search, setSearchInput] = useState('')

  useEffect(() => {
    // Calculating a random number between 1 and 126
    let numberLocation 
    if (search === '') {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1)
    } else {
      numberLocation = search
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`  
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))   
  }, [search])
  
  // Search for input
  const handleSubmit = e => {
    e.preventDefault()

    setSearchInput(e.target.search.value)
  }

  return (
    <div className="App">

      <header className='header'>
        <div className='banner'>
          <div className='capa'>
            <form className='search__input' onSubmit={handleSubmit}>
              <input id="search" type="text" placeholder='Write a number:' />
              <button>Search</button>
            </form>
          </div>
        </div>
      </header>

      <div className='container'>
        <div className='card__location'>
          <Location location={location} />
        </div>
        
        {
          location?.residents.map(url => (
            <CardResidents 
              key={url}  
              url={url}
            />
          ))
        }

      </div>
      
    </div>
  )
}

export default App
