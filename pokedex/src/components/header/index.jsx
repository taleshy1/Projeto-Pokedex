import {
  ButtonAndLessBox,
  ButtonBackToHome,
  ButtonPokedex,
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
  // const location = useLocation();
  // console.log(location);
  return (
    <HeaderStyled>
      <ButtonAndLessBox>
        <LessThanIcon src={lt} />
        <ButtonBackToHome onClick={() => GoToHome(navigate)}>
          Todos Pokémons
        </ButtonBackToHome>
      </ButtonAndLessBox>

      <Image src={logo} />
      <ButtonPokedex onClick={() => GoToPokedex(navigate)}>
        Pokédex
      </ButtonPokedex>
    </HeaderStyled>
  );
}
