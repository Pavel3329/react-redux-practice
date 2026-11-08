import Pokemon from "../pokemon/index.jsx";

function PokemonList({ pokemonsData }) {
  return (
    <ul>
      {pokemonsData.map((pokemon) => {
        return <Pokemon key={pokemon.id} {...pokemon} />; // spread
      })}
    </ul>
  );
}

export default PokemonList;

// key={pokemon.id} —специальный атрибут React, а не обычный prop.
// Поэтому мы указываем его отдельно от spread.
