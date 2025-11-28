import { useEffect, useState } from 'react'
import Search from './components/Search'

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers:{
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [search, setSearch] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const fetchMovies = async () =>{
    try{
      

    } catch (error){
      console.log(`Error fetching movies: ${error}`)
      setErrMsg('Error fetching movies, try again later')
    }
  }

  useEffect(()=>{

  }, [])

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You love without stress</h1>
          
          <Search search={search} setSearch={setSearch} />
        </header>

        <section className='all-movies'>
          <h2>All movies</h2>
          {errMsg && <p className='text-red-500'>{errMsg}</p>}
        </section>
      </div>

    </main>
  )
}

export default App
