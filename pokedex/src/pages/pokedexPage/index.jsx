import { useContext } from "react";
import { PageTittle, PokeListContainer } from "../../GlobalStyles";
import PokemonCard from "../../components/pokemonCard";
import { Global } from "../../context/global/globalContext";

export default function PokedexPage() {
  const { pokemonsOnPokedex, setPokemonsOnPokedex } = useContext(Global);

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
          return <PokemonCard key={pokemon.id} pokemonInfos={pokemon} />;
        })}
      </PokeListContainer>
    </>
  );
}
