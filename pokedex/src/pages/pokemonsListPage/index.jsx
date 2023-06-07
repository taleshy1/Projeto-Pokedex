import { useEffect, useState } from "react";
import { PageTittle, PokeListContainer } from "../../GlobalStyles";
import PokemonCard from "../../components/pokemonCard";
import { pokeApi } from "../../api/axios-config";

export default function PokemonListPage() {
  const [pokemonsData, setPokemonsData] = useState([]);
  useEffect(() => {
    pokeApi
      .get("/pokemon", {
        params: {
          limit: 21,
        },
      })
      .then((res) => {
        Promise.all(res.data.results.map((res) => pokeApi.get(res.url))).then(
          (res) => {
            setPokemonsData(res.map((res) => res.data));
          }
        );
      });
  }, []);
  return (
    <>
      <PageTittle>Todos Pokémons</PageTittle>
      <PokeListContainer>
        {pokemonsData.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemonInfos={pokemon} />;
        })}
      </PokeListContainer>
    </>
  );
}
