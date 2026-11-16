import styles from "./styles.module.css";

// получает один prop {объект} -city
function CityCard({ city }) {
  return (
    <div className={styles.card}>
      <h2>{city.name}</h2>

      <img className={styles.image} src={city.imageUrl} alt={city.name} />

      <p className={styles.description}>{city.description}</p>

      <h3>Интересные факты</h3>

      {/* map() отображает список фактов. */}
      <ul className={styles.facts}>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;

// Отображает название, фотографию, описание и факты
