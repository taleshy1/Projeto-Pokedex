import {
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
export default function Header({
  setPokemonsOnPokedex,
  pokemonsOnPokedex,
  idPokemon,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(idPokemon);
  const removePokemon = () => {
    const newPokeList = pokemonsOnPokedex.filter(
      (pokemon) => pokemon.id !== idPokemon
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

      {location.pathname.includes("/details") && (
        <ButtonRemovePokemon
          onClick={() => (
            alert("Pokemon Removido da pokedex"), removePokemon()
          )}
        >
          Excluir da Pokédex
        </ButtonRemovePokemon>
      )}
    </HeaderStyled>
  );
}
