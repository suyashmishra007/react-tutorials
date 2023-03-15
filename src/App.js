import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((moveiData) => {
          return {
            id: moveiData.episode_id,
            openingText: moveiData.opening_crawl,
            title: moveiData.title,
            releaseDate: moveiData.release_date,
          };
        });
        setMovies(transformedMovies);
      })
      .catch();
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
