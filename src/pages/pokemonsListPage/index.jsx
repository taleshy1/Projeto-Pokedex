import { useContext } from "react";
import PokemonCard from "../../components/pokemonCard";
import useRequest from "../../hooks/useGetPokeList";
import { LoadingContainer } from "./style";
import { Global } from "../../context/global/globalContext";
import LoadingPage from "../../components/loading";
import { Button, Flex, Grid, Text } from "@chakra-ui/react";

export default function PokemonListPage() {
  const { setPage, pokemonsOnPokedex } = useContext(Global);
  const { data, isLoading, previous, next } = useRequest("", []);

  return (
    <LoadingContainer isLoading={isLoading}>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Text
            color="white"
            fontSize={{ lg: "3rem", base: "1.5rem" }}
            mt="3.75rem"
            ml="2.5rem"
            fontFamily="Poppins"
          >
            Todos os pokémons
          </Text>
          <Grid
            templateColumns={{
              "2xl": "repeat(3, 1fr)",
              lg: "repeat(2, 1fr)",
              base: "1fr",
            }}
            justifyItems="center"
          >
            {/* {data.map(
              (pokemon) =>
                !pokemonsOnPokedex.find((poke) => poke.id === pokemon.id) && (
                  <PokemonCard key={pokemon.id} pokemonInfos={pokemon} />
                )
            )}  //!-- IF YOU WANNA USE THIS FUNCTION TO REMOVE THE CARD AFTER ADD A POKEMON IN YOUR POKEDEX, CHANGE THE MODAL INSIDE THE CARD TOO, BECAUSE THE MODAL WILL DISAPEAR AS THE MODAL, SO PUT THE FUNCTION THAT WILL ADD THE POKEMON INSIDE THE CUSTOM FUNCTION CREATED ON CARD "handleCloseModal"*/}

            {data.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemonInfos={pokemon} />
            ))}
          </Grid>

          <Flex justifyContent="center" m="2rem 0" gap="3rem">
            <Button
              disabled={previous}
              onClick={() => setPage(previous)}
              // previous={previous}
              color="white"
              _hover={previous ? { bg: "bisque", color: "black" } : "none"}
              backgroundColor={previous ? "purple" : "black"}
              cursor={previous ? "pointer" : "not-allowed"}
              borderRadius="0.8rem"
            >
              Anterior
            </Button>
            <Button
              disabled={next}
              onClick={() => setPage(next)}
              // next={next}
              color="white"
              _hover={next ? { bg: "bisque", color: "black" } : "none"}
              backgroundColor={next ? "purple" : "black"}
              cursor={next ? "pointer" : "not-allowed"}
              borderRadius="0.8rem"
            >
              Próxima
            </Button>
          </Flex>
        </>
      )}
    </LoadingContainer>
  );
}
