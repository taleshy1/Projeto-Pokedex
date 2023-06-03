import { useParams } from "react-router-dom";
import { PageTittle } from "../../GlobalStyles";
import pokeballBackground from "../../assets/bigPokebola.svg";
import {
  Container,
  InfosBox,
  PokeBallBackground,
  PokeballDetail,
  PokemonImage,
} from "./style";
import pokeballDetail from "../../assets/pokeballDetailInsideBackground.svg";
import pokemonImageDetail from "../../assets/pokemonDetailPage.svg";

export default function PokedexDetailPage() {
  const params = useParams();
  console.log("params", params);
  return (
    <>
      <PageTittle>Detalhes</PageTittle>
      <PokeBallBackground src={pokeballBackground} alt="" />
      <Container>
        <InfosBox>
          <PokeballDetail src={pokeballDetail} alt="pokeball" />
          <PokemonImage src={pokemonImageDetail} alt="" />
        </InfosBox>
      </Container>
    </>
  );
}
