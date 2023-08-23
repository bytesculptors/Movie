import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com/?apikey=3a5e702f';

// const movie = {
//   "Poster" : "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//   "Title" : "Batman v Superman: Dawn of Justice",
//   "Type" : "movie",
//   "Year" : "2016",
//   "imdbID" : "tt2975590"
// }

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  }

  // useEffect(() => {
  //   searchMovie('Superman');
  // }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input 
          type='text' 
          placeholder='Search for a movie...' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img 
          src={SearchIcon} 
          alt='Search Icon' 
          onClick={() => searchMovie(search)}
        />
      </div>
      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => {
              return <MovieCard movie={movie} />
            })}
          </div>
        ) : (
          <p className='empty'>No movies found!</p>
        )
      }
    </div>
  )
}

export default App
