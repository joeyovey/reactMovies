const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
        <div>
            <img src="search.svg" alt="search" />
            <input type="text"
                value={search}
                placeholder="Search movies here..."
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search
