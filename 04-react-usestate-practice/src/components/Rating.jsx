import { useState } from "react"; // Импортируем хук
import "./Rating.css";

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);
  // State — содержимое сейфа, то есть сохранённые данные.
  // useState — хук -механизм React, через который компонент получает доступ к этим данным
  // setRatingValue / — функции, через которые мы просим React изменить содержимое.

  // Главное — мы связали отображаемый интерфейс с одним изменяемым значением ratingValue.
  //      И сказали: Отображай изображение, соответствующее текущему значению ratingValue.

  // А React сам обновляет DOM, когда это значение меняется.
  // Это называется декларативный подход.

  const ratingList = [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Rating_stars_1.0.svg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Rating_stars_2.0.svg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Rating_stars_3.0.svg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Rating_stars_4.0.svg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Rating_stars_5.0.svg",
  ];

  return (
    <div className="rating-card">
      <h2>Оцените наш сервис</h2>
      <p>Насколько вам понравилось?</p>

      <div className="rating-image">
        <img src={ratingList[ratingValue]} alt="Текущий рейтинг" />
      </div>

      <h3>Rating: {ratingValue + 1} / 5</h3>

      {/* onClick={() => setRatingValue  -Передаём новую функцию, которая вызовет setRatingValue() при нажатии */}

      <div className="rating-buttons">
        <button onClick={() => setRatingValue(0)}>Плохо</button>
        <button onClick={() => setRatingValue(1)}>Приемлемо</button>
        <button onClick={() => setRatingValue(2)}>Хорошо</button>
        <button onClick={() => setRatingValue(3)}>Отлично</button>
        <button onClick={() => setRatingValue(4)}>Супер +</button>
      </div>
    </div>
  );
}

export default Rating;
