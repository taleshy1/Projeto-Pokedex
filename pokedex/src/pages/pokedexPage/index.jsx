import { useContext } from "react";
import { PageTittle, PokeListContainer } from "../../GlobalStyles";
import PokemonCard from "../../components/pokemonCard";
import { Global } from "../../context/global/globalContext";
import { Grid, Text } from "@chakra-ui/react";

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
      <Text
        color="white"
        fontSize={{ md: "3rem", base: "1.5rem" }}
        mt="3.75rem"
        ml="2.5rem"
        fontFamily="Poppins"
      >
        Meus Pokémons
      </Text>
      <Grid
        templateColumns={{ md: "repeat(3, 1fr)", base: "1fr" }}
        justifyItems="center"
        gap={{ md: "10", base: "none" }}
      >
        {pokemonsOnPokedex.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemonInfos={pokemon} />;
        })}
      </Grid>
    </>
  );
}
