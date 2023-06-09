import { useEffect, useState } from "react";
import { PageTittle, PokeListContainer } from "../../GlobalStyles";
import PokemonCard from "../../components/pokemonCard";
import { pokeApi } from "../../api/axios-config";
import useRequest from "../../hooks/useGetPokeList";

export default function PokemonListPage({
  pokemonsOnPokedex,
  setPokemonsOnPokedex,
  idPokemon,
  setIdPokemon,
}) {
  const { data, isLoading } = useRequest("", []);
  function catchPokemon(pokemon) {
    setPokemonsOnPokedex([...pokemonsOnPokedex, pokemon]);
  }
  return (
    <>
      <PageTittle>Todos Pokémons</PageTittle>
      <PokeListContainer>
        {data.map((pokemon) => {
          return (
            <PokemonCard
              pokemonsOnPokedex={pokemonsOnPokedex}
              key={pokemon.id}
              pokemonInfos={pokemon}
              catchPokemon={catchPokemon}
              idPokemon={idPokemon}
              setIdPokemon={setIdPokemon}
            />
          );
        })}
      </PokeListContainer>
    </>
  );
}
