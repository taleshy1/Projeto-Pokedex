import {
  BoxInsideTheBox,
  ButtonDetails,
  ButtonsBox,
  CardBox,
  CatchButton,
  IdPokemon,
  InfoBox,
  NamePokemon,
  PokeImg,
  Pokebola,
  TypesOnCard,
} from "./style";
import pokemonImage from "../../assets/pokemonm.svg";
import fundoPokebola from "../../assets/fundo-pokebola.svg";
import grassType from "../../assets/grassTypeIcon.svg";
import poisonType from "../../assets/poisonTypeIcon.svg";

export default function PokemonCard() {
  return (
    <CardBox>
      <PokeImg src={pokemonImage} alt="" />
      <BoxInsideTheBox>
        <InfoBox>
          <IdPokemon>#01</IdPokemon>
          <NamePokemon>Bulbasaur</NamePokemon>
          <TypesOnCard>
            <img src={grassType} alt="" />
            <img src={poisonType} alt="" />
          </TypesOnCard>
        </InfoBox>

        <ButtonsBox>
          <ButtonDetails>Detalhes</ButtonDetails>
          <CatchButton>Capturar!</CatchButton>
        </ButtonsBox>

        <Pokebola src={fundoPokebola} alt="" />
      </BoxInsideTheBox>
    </CardBox>
  );
}
