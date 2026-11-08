function DestinationStats({ stats }) {
  return (
    <ul className="DestinationStats">
      <li>Популярность: {stats.popularity}</li>
      <li>Доступность: {stats.accessibility}</li>
      <li>Климат: {stats.climate}</li>
      <li>Время суток: {stats.timeofday}</li>
    </ul>
  );
}

export default DestinationStats;
