import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const PokeBallBackground = styled.img`
  position: absolute;
  top: -1%;
  left: 5%;
  width: 85%;
`;

export const InfosBox = styled.div`
  margin-top: 4%;
  width: 98%;
  height: 90%;
  background: #729f92;
  border-radius: 1.9vw;
  display: flex;
  position: relative;
  z-index: 1;
`;

export const PokeballDetail = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
`;

export const PokemonImage = styled.img`
  width: 18%;
  position: absolute;
  right: 6%;
  top: -17%;
`;
