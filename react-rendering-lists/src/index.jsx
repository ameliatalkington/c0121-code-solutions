import React from 'react';
import ReactDOM from 'react-dom';

function PokemonList(props) {
  const pokemons = props.pokemons;
  const list = pokedex.map((pokemon) =>
    <li key={pokemon.name}>
      {pokemon.name}
    </li>
  );
  return (
    <ul>{list}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <PokemonList pokemons={pokedex}/>,
  document.querySelector('#root')
);
