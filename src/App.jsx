import React, { useState, useEffect } from 'react'
import Search from './assets/components/Search'

const API_BASE_URL = `https://api.themoviedb.org/3/`

const API_KEY = import.meta.env.VITE_TMDB_API

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

  }, [])

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} ></Search>
      </div>
    </main>
  )
}

export default App
