import { PageTittle, PokeListContainer } from "../../GlobalStyles";
import PokemonCard from "../../components/pokemonCard";
import useRequest from "../../hooks/useGetPokeList";

export default function PokemonListPage({
  pokemonsOnPokedex,
  setPokemonsOnPokedex,
  pokemon,
  setPokemon,
  catchPokemon,
}) {
  const { data, isLoading } = useRequest("", []);

  return (
    <>
      <PageTittle>Todos Pokémons</PageTittle>
      <PokeListContainer>
        {data.map((pokemon) => {
          return (
            <PokemonCard
              pokemonsOnPokedex={pokemonsOnPokedex}
              setPokemonsOnPokedex={setPokemonsOnPokedex}
              key={pokemon.id}
              pokemonInfos={pokemon}
              catchPokemon={catchPokemon}
              pokemon={pokemon}
              setPokemon={setPokemon}
            />
          );
        })}
      </PokeListContainer>
    </>
  );
}
