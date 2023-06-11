import { useContext } from "react";
import { PageTittle, PokeListContainer } from "../../GlobalStyles";
import PokemonCard from "../../components/pokemonCard";
import useRequest from "../../hooks/useGetPokeList";
import { ButtonsDiv, LoadingContainer, Next, Previous } from "./style";
import { Global } from "../../context/global/globalContext";
import LoadingPage from "../../components/loading";

export default function PokemonListPage() {
  const { setPage } = useContext(Global);
  const { data, isLoading, previous, next } = useRequest("", []);

  return (
    <LoadingContainer isLoading={isLoading}>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <PageTittle>Todos Pokémons</PageTittle>

          <PokeListContainer>
            {data.map((pokemon) => {
              return <PokemonCard key={pokemon.id} pokemonInfos={pokemon} />;
            })}
          </PokeListContainer>

          <ButtonsDiv>
            <Previous
              disabled={!previous}
              onClick={() => setPage(previous)}
              previous={previous}
            >
              Anterior
            </Previous>
            <Next disabled={!next} onClick={() => setPage(next)} next={next}>
              Próxima
            </Next>
          </ButtonsDiv>
        </>
      )}
    </LoadingContainer>
  );
}
