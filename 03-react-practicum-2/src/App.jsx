import PokemonList from "./components/pokemonList/index.jsx";
import MoviesDisplay from "./components/moviesDisplay/index.jsx";
import TravelCard from "./components/travelCard/index.jsx";

function App() {
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
    { id: 2, name: "Charmander", type: "Fire" },
    { id: 3, name: "Squirtle", type: "Water" },
    { id: 4, name: "Pikachu", type: "Electric" },
    { id: 5, name: "Jigglypuff", type: "Normal/Fairy" },
    { id: 6, name: "Gengar", type: "Ghost/Poison" },
    { id: 7, name: "Snorlax", type: "Normal" },
    { id: 8, name: "Mewtwo", type: "Psychic" },
    { id: 9, name: "Dragonite", type: "Dragon/Flying" },
    { id: 10, name: "Eevee", type: "Normal" },
  ];

  const movies = [
    { id: 1, title: "Inception", year: "2010" },
    { id: 2, title: "The Matrix", year: "1999" },
    { id: 3, title: "Interstellar", year: "2014" },
    { id: 4, title: "Pulp Fiction", year: "1994" },
    { id: 5, title: "Forrest Gump", year: "1994" },
    { id: 6, title: "The Lord of the Rings", year: "2001" },
    { id: 7, title: "Star Wars: Episode V", year: "1980" },
    { id: 8, title: "The Dark Knight", year: "2008" },
    { id: 9, title: "Fight Club", year: "1999" },
    { id: 10, title: "The Godfather", year: "1972" },
  ];

  const cardsInfo = [
    {
      id: 1,
      name: "Мальдивы",
      description: "Тропический рай для дайвинга и спокойного отдыха.",
      imageUrl:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
      stats: {
        popularity: 9.5,
        accessibility: "Круглый год",
        climate: "Тропический",
        timeofday: "night",
      },
    },
    {
      id: 2,
      name: "Исландия",
      description: "Страна вулканов, гейзеров и невероятных ландшафтов.",
      imageUrl:
        "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800",
      stats: {
        popularity: 8.0,
        accessibility: "Лучше летом",
        climate: "Субарктический",
        timeofday: "dawn",
      },
    },
    {
      id: 3,
      name: "Япония",
      description: "Древняя культура, технологии и удивительная природа.",
      imageUrl:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
      stats: {
        popularity: 9.2,
        accessibility: "Круглый год",
        climate: "Умеренный",
        timeofday: "midday",
      },
    },
    {
      id: 4,
      name: "Новая Зеландия",
      description: "Приключения на природе, треккинг и каякинг.",
      imageUrl:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      stats: {
        popularity: 8.8,
        accessibility: "Круглый год",
        climate: "Умеренно-морской",
        timeofday: "dusk",
      },
    },
    {
      id: 5,
      name: "Патагония (Аргентина)",
      description: "Треккинг и уединение среди монументальных гор.",
      imageUrl:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      stats: {
        popularity: 7.5,
        accessibility: "Лучше весной и осенью",
        climate: "Холодный",
        timeofday: "dusk",
      },
    },
  ];

  return (
    <div>
      <div>
        <h1>Pokemon List</h1>
        <PokemonList pokemonsData={pokemons} />
      </div>

      <div>
        <h2>Movies</h2>
        <MoviesDisplay moviesData={movies} />
      </div>

      <div>
        <h2>Travel Destinations</h2>

        {cardsInfo.map((cardInfo) => (
          <TravelCard key={cardInfo.id} cardInfo={cardInfo} />
        ))}
      </div>
    </div>
  );
}

export default App;

{
  /* <PokemonList /> — сообщает React, что здесь нужно отобразить компонент PokemonList.
А pokemonsData={pokemons} —передаёт этому компоненту массив pokemons через prop с названием pokemonsData. */
}
