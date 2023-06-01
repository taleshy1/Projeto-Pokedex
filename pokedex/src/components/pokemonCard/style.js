import styled from "styled-components";
export const CardBox = styled.div`
  width: 30%;
  height: 263px;
  margin-bottom: 6px;
  display: flex;
  position: relative;
`;

export const BoxInsideTheBox = styled.div`
  background: #729f92;
  width: 100%;
  height: 210px;
  border-radius: 12px;
  position: absolute;
  bottom: 0;
`;

export const Pokebola = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
export const PokeImg = styled.img`
  position: absolute;
  top: -6px;
  right: 15px;
  z-index: 1;
`;

export const InfoBox = styled.div`
  color: #ffffff;
  font-family: "Inter Tight", sans-serif;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding-bottom: 46px;
`;

export const IdPokemon = styled.p`
  position: absolute;
  left: 23px;
  top: 25px;
  font-size: 1rem;
`;
export const NamePokemon = styled.p`
  position: absolute;
  left: 23px;
  top: 40px;
  font-size: 2rem;
`;

export const TypesOnCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
  position: absolute;
  width: 197px;
  height: 31px;
  left: 23px;
  top: 89px;
`;

export const ButtonDetails = styled.button`
  width: 74px;
  height: 24px;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 16px;
  background: transparent;
  border: none;
  text-decoration-line: underline;
  cursor: pointer;
  color: #ffffff;
  margin-left: 23px;
`;

export const CatchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  margin-right: 22px;
  position: absolute;
  bottom: 11px;
  left: 349px;
  z-index: 20;
  cursor: url("https://cur.cursors-4u.net/games/gam-13/gam1282.cur"), pointer;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
