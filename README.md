**🎬 Movie Search App**

A simple React application that allows users to search for movies in real time using the TMDB API, with debounced input, loading indicators, and clean UI components.

This project demonstrates:
✔ Debounced search (using react-use)
✔ API calls to TMDB with Fetch
✔ Conditional rendering (loading, errors, results)
✔ Reusable components (Search, MovieCard, Spinner)
✔ Environment variable for API security
✔ Clean React architecture

**Features**
1. Search for Movies: Users can type in the search bar and results will appear automatically.

2. Debounced Input: The app waits 500ms after typing stops before fetching—prevents spam API calls.

3. Movie List Display: Shows a list of movies with individual movie cards.

4. TMDB API Integration: Uses TMDB’s search and discover endpoints.

5. Error Handling: Shows a message when the API fails or no movie is found.

6. Loading Spinner: Displays a spinner while fetching data.

src/
│
├── components/
│   ├── Search.jsx
│   ├── Spinner.jsx
│   └── MovieCard.jsx
│
├── App.jsx
└── main.jsx

**Technologies Used**
1. React
2. Vite
3. JavaScript (ES6)
4. react-use (for debouncing)
5. Tailwind CSS (optional, based on your classes)
6. TMDB API

**Running the Project Locally**
1. Download or clone the repository: **https://github.com/joeyovey/reactMovies.git**
2. npm install
3. Create a .env file in your project root and add: *VITE_TMDB_API_KEY=your_tmdb_access_token_here* (Make sure it is your TMDB Bearer Token, not the normal API key).
4. npm run dev
5. http://localhost:5173



