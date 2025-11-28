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
  const [movieList, setMovieList] = useState([])
  const [isLoading, setLoading] = useState(false)

  const fetchMovies = async () =>{
    setLoading(true)
    setErrMsg('')

    try{
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      
      if(!response.ok){
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
    
      if(data.Response === 'false'){
        setErrMsg(data.Error || 'Faile to fetch movies');
        setMovieList([]);
        return;
      }
    
      setMovieList(data.results || [])
    
    } catch (error){
      // console.log(`Error fetching movies: ${error}`)
      setErrMsg('Error fetching movies, try again later')
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchMovies();
  }, [])

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          {/* <img src="./hero-img.png" alt="Hero Banner" /> */}
          <h1>Find <span className='text-gradient'>Movies</span> You love without stress</h1>
          
          <Search search={search} setSearch={setSearch} />
        </header>

        <section className='all-movies'>
          <h2>All movies</h2>
          
          {isLoading ? (
            <p className='text-white'>Loading...</p>
          ) : errMsg ?(
            <p className='text-red-500'>{errMsg}</p>
          ) :(
            <ul>
              {movieList.map((movie) =>(
                <p className='text-white'>{movie.title}</p>
              ))}
            </ul>
          )}
        </section>
      </div>

    </main>
  )
}

export default App
