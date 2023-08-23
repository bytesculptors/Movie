import React, { useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import { useState } from 'react'

const API_URL = 'http://www.omdbapi.com/?apikey=3a5e702f';

const App = () => {
  const searchMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    console.log(data.Search);
  }
  useEffect(() => {
    searchMovie('Superman');
  })
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input 
          type='text' 
          placeholder='Search for a movie...' 
          value={'Superman'}
        />
        <img src={SearchIcon} alt='Search Icon' />
      </div>
    </div>
  )
}

export default App
