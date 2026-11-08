import MovieCard from "../movieCard/index.jsx";

function MoviesDisplay({ moviesData }) {
  return (
    <ul>
      {moviesData.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />; // spread
      })}
    </ul>
  );
}

export default MoviesDisplay;
