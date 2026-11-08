function MovieCard({ title, year }) {
  return (
    <li>
      <h3>{title}</h3>
      <h5>{year}</h5>
    </li>
  );
}

export default MovieCard;
