import {
  AdicionarAPokedex,
  ButtonAndLessBox,
  ButtonBackToHome,
  ButtonPokedex,
  ButtonRemovePokemon,
  HeaderStyled,
  Image,
  LessThanIcon,
} from "./style";
import logo from "../../assets/logo.svg";
import lt from "../../assets/lt.svg";
import { GoToHome, GoToPokedex } from "../../routes/coordination";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header({
  setPokemonsOnPokedex,
  pokemonsOnPokedex,
  pokemon,
  catchPokemon,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const removePokemon = () => {
    const newPokeList = pokemonsOnPokedex.filter(
      (pokemonio) => pokemonio.id !== pokemon.id
    );
    setPokemonsOnPokedex(newPokeList);
    GoToPokedex(navigate);
  };

  return (
    <HeaderStyled>
      {location.pathname !== "/" && (
        <ButtonAndLessBox>
          <LessThanIcon src={lt} />
          <ButtonBackToHome onClick={() => GoToHome(navigate)}>
            Todos Pokémons
          </ButtonBackToHome>
        </ButtonAndLessBox>
      )}

      <Image src={logo} />

      {location.pathname === "/" && (
        <ButtonPokedex onClick={() => GoToPokedex(navigate)}>
          Pokédex
        </ButtonPokedex>
      )}

      {location.pathname.includes("/details") &&
        (pokemonsOnPokedex.find((pokemonio) => pokemonio.id === pokemon.id) ? (
          <ButtonRemovePokemon
            onClick={() => {
              alert("Pokemon Removido da pokedex");
              removePokemon();
            }}
          >
            Excluir da Pokédex
          </ButtonRemovePokemon>
        ) : (
          <AdicionarAPokedex
            onClick={() => {
              alert("Pokemon Adicionado na pokedex");
              catchPokemon(pokemon);
              GoToPokedex(navigate);
            }}
          >
            Adicionar a pokédex
          </AdicionarAPokedex>
        ))}
    </HeaderStyled>
  );
}
