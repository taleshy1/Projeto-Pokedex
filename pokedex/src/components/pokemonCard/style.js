import styled from "styled-components";
export const CardBox = styled.div`
  width: 30%;
  height: 27vh;
  margin-bottom: 0.5vh;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

export const BoxInsideTheBox = styled.div`
  background: #729f92;
  width: 100%;
  height: 80%;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const Pokebola = styled.img`
  //!EDIT this
  /* width: 80%; */
`;

export const PokeImg = styled.img`
  position: absolute;
  width: 34%;
  top: -3%;
  right: 2%;
  z-index: 1;
`;

export const InfoBox = styled.div`
  color: #ffffff;
  font-family: "Inter Tight", sans-serif;
  height: 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 3%;
  overflow: hidden;
`;

export const InfoText = styled.div`
  height: 50%;
`;

export const IdPokemon = styled.p`
  font-size: 1vw;
`;
export const NamePokemon = styled.p`
  font-size: 2vw;
`;

export const TypesOnCard = styled.div`
  display: flex;
  gap: 3%;
  width: 70%;
  img {
    width: 48%;
  }
`;

export const InfoAndButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const ButtonDetails = styled.button`
  width: 30%;
  height: 15%;
  margin-bottom: 4%;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1vw;
  background: transparent;
  border: none;
  text-decoration-line: underline;
  cursor: pointer;
  color: #ffffff;
  margin-left: 6%;
`;

export const CatchButton = styled.button`
  width: 25%;
  height: 15%;
  font-size: 1vw;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  margin-right: 4%;
  position: absolute;
  bottom: 5%;
  right: 3%;
  z-index: 20;
  cursor: url("https://cur.cursors-4u.net/games/gam-13/gam1282.cur"), pointer;
`;
