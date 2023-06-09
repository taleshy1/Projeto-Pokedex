import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
  width: 100%;
    background-color: #5E5E5E;
}

`;

export const PageTittle = styled.h1`
  margin: 2% 0 0.2% 3%;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3vw;

  color: #ffffff;
`;

export const PokeListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
