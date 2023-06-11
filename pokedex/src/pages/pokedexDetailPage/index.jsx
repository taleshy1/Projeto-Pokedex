import { PageTittle } from "../../GlobalStyles";
import pokeballBackground from "../../assets/bigPokebola.svg";
import {
  Container,
  InfosBox,
  InfosContainer,
  MovesAndInfosContainer,
  MovesBox,
  NameIdTypeBox,
  Pic1,
  Pic2,
  PicsContainer,
  PokeBallBackground,
  PokeballDetail,
  PokemonImage,
  ProgressBar,
  Stats,
  StatsContainer,
  TypesBox,
} from "./style";
import pokeballDetail from "../../assets/pokeballDetailInsideBackground.svg";
import pokeType from "../../utils/types";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useGetPokeList";
import LoadingPage from "../../components/loading";

export default function PokedexDetailPage() {
  const id = useParams();
  const { data, isLoading } = useRequest(id.id);

  let moveCount = 0;
  let total = 0;

  if (!isLoading) {
    for (const stat of data.stats) {
      total += stat.base_stat;
    }
  }
  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <>
      {isLoading ? (
        <PageTittle />
      ) : (
        <>
          <PageTittle>Detalhes</PageTittle>
          <PokeBallBackground src={pokeballBackground} alt="" />
          <Container>
            <InfosBox type={data.types}>
              <PokeballDetail src={pokeballDetail} alt="pokeball" />
              <PokemonImage
                src={data.sprites.other["official-artwork"].front_default}
                alt=""
              />

              <InfosContainer>
                <PicsContainer>
                  <Pic1>
                    <img src={data.sprites.front_default} alt="" />
                  </Pic1>
                  <Pic2>
                    <img src={data.sprites.back_default} alt="" />
                  </Pic2>
                </PicsContainer>
                <StatsContainer>
                  <h2>Base stats</h2>
                  {data.stats.map((stat) => (
                    <Stats key={stat.stat.name}>
                      <span>{stat.stat.name}</span>
                      <span>{stat.base_stat}</span>

                      <ProgressBar stat={stat.base_stat}></ProgressBar>
                    </Stats>
                  ))}
                  <Stats>
                    <p>total:</p>
                    <span>{total}</span>
                  </Stats>
                </StatsContainer>
                <MovesAndInfosContainer>
                  <NameIdTypeBox>
                    <p>#{data.id < 10 ? `0${data.id}` : data.id}</p>
                    <p>{data.name}</p>
                    <TypesBox>
                      {data.types.map((type) => {
                        return (
                          <img
                            src={pokeType[type.type.name]}
                            key={type.type.name}
                          />
                        );
                      })}
                    </TypesBox>
                  </NameIdTypeBox>
                  <MovesBox>
                    <h2>Moves:</h2>
                    {data.moves.map((move) => {
                      if (moveCount < 8) {
                        moveCount += 1;
                        return <p>{move.move.name}</p>;
                      }
                    })}
                  </MovesBox>
                </MovesAndInfosContainer>
              </InfosContainer>
            </InfosBox>
          </Container>
        </>
      )}
    </>
  );
}
