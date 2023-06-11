import styled, { css } from "styled-components";

export const HeaderStyled = styled.div`
  background-color: #ffffff;
  height: 18vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  position: sticky;
  top: 0;
  z-index: 3;
  transition: opacity 1s ease-in-out;

  ${({ sticky }) =>
    sticky &&
    css`
      opacity: 0.9;
    `}
`;

export const Image = styled.img`
 width: 64%;
  grid-column: 7/11;
  align-self: center;
`;

export const ButtonPokedex = styled.button`
  width: 95%;
  height: 50%;
  background: #33a4f5;
  border-radius: 0.4vw;
  border: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2vw;
  color: #ffffff;
  cursor: pointer;
  align-self: center;
  grid-column: 13/16;
  z-index: 2;
`;

export const ButtonAndLessBox = styled.div`
  width: 80%;
  height: 30%;
  grid-column: 2/5;
  display: flex;
  align-self: center;
  z-index: 2;
`;
export const ButtonBackToHome = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1.3vw;
  text-decoration-line: underline;
  color: #1a1a1a;
  align-self: center;
`;

export const LessThanIcon = styled.img`
  height: 50%;
  align-self: center;
`;

export const ButtonRemovePokemon = styled.button`
 width: 95%;
  height: 50%;
  border: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
  color: #ffffff;
  cursor: pointer;
  align-self: center;
  grid-column: 13/16;
  width: 70%;
  background: #ff6262;
  border-radius: 0.4vw;
  z-index: 2;
`;

export const AdicionarAPokedex = styled.button`
width: 95%;
  height: 50%;
  background: #33a4f5;
  border-radius: 0.4vw;
  border: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
  color: #ffffff;
  cursor: pointer;
  align-self: center;
  grid-column: 13/16;
  z-index: 2;
`
