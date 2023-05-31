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

export default function Header() {
  return (
    <HeaderStyled>
      {/* <ButtonAndLessBox>
        <LessThanIcon src={lt} />
        <ButtonBackToHome>Todos Pokémons</ButtonBackToHome>
      </ButtonAndLessBox> */}

      <Image src={logo} />
      <ButtonPokedex>Excluir da Pokédex</ButtonPokedex>
    </HeaderStyled>
  );
}
