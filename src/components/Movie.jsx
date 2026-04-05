import { useEffect, useState } from "react";

function Movie({ textSearch }) {
  const [currentMovies, setCurrentMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        if (!textSearch.trim()) {
          setCurrentMovies([]);
          return;
        }

        const res = await fetch(
          `https://www.omdbapi.com/?s=${encodeURIComponent(textSearch)}&apikey=d29b4ffb`,
        );
        const data = await res.json();

        if (data.Response === "False") {
          setCurrentMovies([]);
          console.log(data.Error);
          return;
        }

        setCurrentMovies(data.Search ?? []);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, [textSearch]);
  return (
    <div className="flex w-full flex-col gap-3 rounded-lg p-3 shadow-lg">
      {currentMovies.length === 0 ? (
        <p className="text-sm text-gray-500">No movies found.</p>
      ) : (
        currentMovies.map((movie) => (
          <div
            key={movie.imdbID}
            className="flex flex-col items-center border-b border-gray-200 bg-white p-3 text-center md:grid md:grid-cols-2 md:gap-4"
          >
            <img src={movie.Poster} alt={movie.Title} />
            <div>
              <h2 className="text-xl font-bold text-teal-600 md:text-3xl">
                {movie.Title}
              </h2>
              <p className="text-sm text-gray-600 md:text-base">
                Release Year: {movie.Year}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Movie;
