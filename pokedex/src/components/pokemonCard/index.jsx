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
  RemoveButton,
  TypesOnCard,
} from "./style";
import pokeType from "../../utils/types";
import fundoPokebola from "../../assets/fundo-pokebola.svg";
import { GoToDetails } from "../../routes/coordination";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PokemonCard({
  pokemonInfos,
  catchPokemon,
  pokemonsOnPokedex,
  setPokemonsOnPokedex,
  setPokemon,
}) {
  const [pokemonIsOnPokedex, setPokemonIsOnPokedex] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setPokemonIsOnPokedex(
        pokemonsOnPokedex.find((pokemon) => pokemon.id === pokemonInfos.id)
      );
    }
  });
  function handleDetailButton() {
    setPokemon(pokemonInfos);
    GoToDetails(navigate, pokemonInfos.id);
  }

  function removePokemon(id) {
    const newList = pokemonsOnPokedex.filter((pokemon) => pokemon.id !== id);
    setPokemonsOnPokedex(newList);
  }

  return (
    <CardBox>
      <PokeImg
        src={pokemonInfos.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <BoxInsideTheBox type={pokemonInfos.types}>
        <InfoAndButtonBox>
          <InfoBox>
            <InfoText>
              <IdPokemon>
                #{" "}
                {pokemonInfos.id < 10 ? `0${pokemonInfos.id}` : pokemonInfos.id}
              </IdPokemon>
              <NamePokemon>{pokemonInfos.name}</NamePokemon>
            </InfoText>
            <TypesOnCard>
              {pokemonInfos.types.map((type) => {
                return (
                  <img src={pokeType[type.type.name]} key={type.type.name} />
                );
              })}
            </TypesOnCard>
          </InfoBox>
          <ButtonDetails onClick={handleDetailButton}>Detalhes</ButtonDetails>
        </InfoAndButtonBox>
        {!pokemonIsOnPokedex && (
          <CatchButton onClick={() => catchPokemon(pokemonInfos)}>
            Capturar!
          </CatchButton>
        )}
        {location.pathname === "/pokedex" && (
          <RemoveButton onClick={() => removePokemon(pokemonInfos.id)}>
            Excluir!
          </RemoveButton>
        )}
        <Pokebola src={fundoPokebola} alt="" />
      </BoxInsideTheBox>
    </CardBox>
  );
}
