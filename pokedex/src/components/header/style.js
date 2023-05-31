import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: #ffffff;
  height: 160px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const Image = styled.img`
  width: 307px;
  height: 113px;
  grid-column: 7;
  align-self: center;
`;

export const ButtonPokedex = styled.button`
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  background: #33a4f5;
  border-radius: 8px;
  border: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
  align-self: center;
  grid-column: 11;
`;

export const ButtonAndLessBox = styled.div`
  grid-column: 2;
  display: flex;
  gap: 10px;
`;
export const ButtonBackToHome = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 36px;
  width: 210px;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  text-decoration-line: underline;
  color: #1a1a1a;
  align-self: center;
`;

export const LessThanIcon = styled.img`
  align-self: center;
  height: 14px;
  width: 7px;
`;
