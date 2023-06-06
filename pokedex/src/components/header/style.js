import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: #ffffff;
  height: 25vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
`;

export const Image = styled.img`
  width: 64%;
  grid-column: 7/11;
  align-self: center;
`;

export const ButtonPokedex = styled.button`
  width: 95%;
  height: 46%;
  background: #33a4f5;
  border-radius: 8px;
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
  gap: 2%;
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
  height: 25%;
  align-self: center;
`;

export const ButtonRemovePokemon = styled.button`
  height: 30%;
  border: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.8vw;
  color: #ffffff;
  cursor: pointer;
  align-self: center;
  grid-column: 13/16;
  width: 70%;
  background: #ff6262;
  border-radius: 0.4vw;
  z-index: 2;
`;
