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
import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
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
            alert("Pokemon Removido da pokedex"), GoToPokedex(navigate)
          )}
        >
          Excluir da Pokédex
        </ButtonRemovePokemon>
      )}
    </HeaderStyled>
  );
}
