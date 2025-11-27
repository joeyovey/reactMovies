import { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [search, setSearch] = useState('')

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You love without stress</h1>
        </header>
        <Search search={search} setSearch={setSearch} />
        <h1 className='text-white text-3clarxl'>{search}</h1>
      </div>

    </main>
  )
}

export default App
