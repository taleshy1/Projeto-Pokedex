import {
  BoxInsideTheBox,
  ButtonDetails,
  CardBox,
  CatchButton,
  IdPokemon,
  InfoAndButtonBox,
  InfoBox,
  InfoText,
  NamePokemon,
  PokeImg,
  Pokebola,
  TypesOnCard,
} from "./style";
import pokemonImage from "../../assets/pokemonm.svg";
import fundoPokebola from "../../assets/fundo-pokebola.svg";
import grassType from "../../assets/grassTypeIcon.svg";
import poisonType from "../../assets/poisonTypeIcon.svg";
import { GoToDetails } from "../../routes/coordination";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({ pokemonInfos }) {
  
  const imageLink = pokemonInfos.sprites.other["official-artwork"].front_default
  const navigate = useNavigate();

  return (
    <CardBox>
      <PokeImg src={imageLink} alt="" />
      <BoxInsideTheBox>
        <InfoAndButtonBox>
          <InfoBox>
            <InfoText>
              <IdPokemon># {pokemonInfos.id < 10? `0${pokemonInfos.id}` : pokemonInfos.id}</IdPokemon>
              <NamePokemon>{pokemonInfos.name}</NamePokemon>
            </InfoText>
            <TypesOnCard>
              <img src={grassType} alt="" />
              <img src={poisonType} alt="" />
            </TypesOnCard>
          </InfoBox>
          <ButtonDetails onClick={() => GoToDetails(navigate, pokemonInfos.id)}>
            Detalhes
          </ButtonDetails>
        </InfoAndButtonBox>
        <CatchButton>Capturar!</CatchButton>
        <Pokebola src={fundoPokebola} alt="" />
      </BoxInsideTheBox>
    </CardBox>
  );
}
