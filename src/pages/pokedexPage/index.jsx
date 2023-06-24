import { useContext, useEffect } from "react";
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
  useEffect(() => {
    setPokemonsOnPokedex(sorterdPokemons);
  }, [pokemonsOnPokedex]);
  return (
    <>
      <Text
        color="white"
        fontSize={{ lg: "3rem", base: "1.5rem" }}
        mt="3.75rem"
        ml="2.5rem"
        fontFamily="Poppins"
      >
        Meus Pokémons
      </Text>
      <Grid
        templateColumns={{
          "2xl": "repeat(3, 1fr)",
          lg: "repeat(2, 1fr)",
          base: "1fr",
        }}
        justifyItems="center"
      >
        {pokemonsOnPokedex.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemonInfos={pokemon} />;
        })}
      </Grid>
    </>
  );
}
