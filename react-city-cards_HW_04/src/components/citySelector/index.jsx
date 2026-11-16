import styles from "./styles.module.css";

const citiesData = [
  {
    name: "Токио",
    description: "Столица Японии.",
    imageUrl:
      "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
    facts: [
      "Токио — крупнейшая агломерация Японии.",
      "Город известен современной архитектурой.",
    ],
  },
  {
    name: "Киото",
    description: "Исторический город Японии.",
    imageUrl: "/images/kyoto.jfif",
    facts: [
      "В Киото более 1600 буддийских храмов.",
      "Город был столицей Японии более тысячи лет.",
    ],
  },
  {
    name: "Осака",
    description: "Крупный город Японии.",
    imageUrl: "/images/osaka.jfif",
    facts: ["Осака известна своим замком.", "Город знаменит своей кухней."],
  },

  {
    name: "Хоккайдо",
    description:
      "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
    imageUrl: "/images/hokkaido.jfif",
    facts: [
      "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
      "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
    ],
  },
  {
    name: "Нагоя",
    description:
      "Город в центре Хонсю, известен своим промышленным влиянием и историческими достопримечательностями.",
    imageUrl: "/images/nagoya.jfif",
    facts: [
      "Нагоя — один из важнейших промышленных городов Японии, центр автомобилестроения.",
      "Здесь находится известный Нагойский замок с позолоченными украшениями на крыше.",
    ],
  },
];

// Это деструктуризация props
function CitySelector({ setSelectedCity }) {
  // Объект события
  function handleChange(event) {
    // Элемент <select>, в котором произошло изменение
    // читает текущее значение элемента, вызвавшего событие, и сохраняет его в переменную cityName
    const cityName = event.target.value;

    // .find() 	Ищет первый подходящий
    const city = citiesData.find((item) => item.name === cityName);

    // Обновляет состояние App
    setSelectedCity(city || null);
  }

  return (
    <form className={styles.selector}>
      {/* Когда пользователь выбирает город, React вызывает handleChange и передаёт объект события */}
      <select className={styles.select} defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          Выберите город
        </option>

        {citiesData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default CitySelector;

// Содержит массив городов, показывает список, обрабатывает выбор

// Но Источник данных и компонент отображения, -разные ответственности.
// Это пригодится в более крупных проектах.
