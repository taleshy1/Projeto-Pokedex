import { useContext } from "react";
import PokemonCard from "../../components/pokemonCard";
import useRequest from "../../hooks/useGetPokeList";
import { LoadingContainer } from "./style";
import { Global } from "../../context/global/globalContext";
import LoadingPage from "../../components/loading";
import { Button, Flex, Grid, Text } from "@chakra-ui/react";

export default function PokemonListPage() {
  const { setPage } = useContext(Global);
  const { data, isLoading, previous, next } = useRequest("", []);

  const fadeInAnimation = {
    from: { opacity: 0 },
    to: { opacity: 1 },
  };

  const fadeOutAnimation = {
    from: { opacity: 1 },
    to: { opacity: 0 },
  };

  return (
    <LoadingContainer isLoading={isLoading}>
      {isLoading ? (
        <LoadingPage />
      ) : (
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
            {data.map((pokemon) => {
              return <PokemonCard key={pokemon.id} pokemonInfos={pokemon} />;
            })}
          </Grid>

          <Flex justifyContent="center" m="2rem 0" gap="3rem">
            <Button
              disabled={!previous}
              onClick={() => setPage(previous)}
              previous={previous}
              color="white"
              _hover={previous ? { bg: "bisque", color: "black" } : "none"}
              backgroundColor={previous ? "purple" : "black"}
              cursor={previous ? "pointer" : "not-allowed"}
              borderRadius="0.8rem"
            >
              Anterior
            </Button>
            <Button
              disabled={!next}
              onClick={() => setPage(next)}
              next={next}
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
