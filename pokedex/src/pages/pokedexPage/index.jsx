import { useState } from "react";
import { PageTittle, PokeListContainer } from "../../GlobalStyles";
import PokemonCard from "../../components/pokemonCard";
import { useEffect } from "react";

export default function PokedexPage({
  pokemonsOnPokedex,
  setPokemonsOnPokedex,
  Pokemon,
  setPokemon,
}) {
  const sorterdPokemons = pokemonsOnPokedex.sort((pokemon1, pokemon2) => {
    if (pokemon1.id < pokemon2.id) {
      return -1;
    }
    if (pokemon1.id > pokemon2.id) {
      return 1;
    }
  });
  setPokemonsOnPokedex(sorterdPokemons);

  return (
    <>
      <PageTittle>Meus Pokémons</PageTittle>
      <PokeListContainer>
        {pokemonsOnPokedex.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemonInfos={pokemon}
              pokemonsOnPokedex={pokemonsOnPokedex}
              setPokemonsOnPokedex={setPokemonsOnPokedex}
              pokemon={pokemon}
              setPokemon={setPokemon}
            />
          );
        })}
      </PokeListContainer>
    </>
  );
}
