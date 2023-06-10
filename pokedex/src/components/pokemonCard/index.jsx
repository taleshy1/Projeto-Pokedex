import {
  BoxInsideTheBox,
  ButtonDetails,
  CardBox,
  CatchButton,
  IdPokemon,
  InfoAndButtonBox,
  InfoBox,
  InfoText,
  NamePokemon,
  PokeImg,
  Pokebola,
  RemoveButton,
  TypesOnCard,
} from "./style";
import pokeType from "../../utils/types";
import fundoPokebola from "../../assets/fundo-pokebola.svg";
import { GoToDetails } from "../../routes/coordination";
import { useContext, useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";
import { Global } from "../../context/global/globalContext";
import { Router } from "../../context/routerContext";

export default function PokemonCard({ pokemonInfos }) {
  const [pokemonIsOnPokedex, setPokemonIsOnPokedex] = useState(true);
  const { navigate, location } = useContext(Router);
  const { catchPokemon, removePokemon, pokemonsOnPokedex, setPokemon } =
    useContext(Global);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(20deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="5%"
      backdropBlur="10px"
    />
  );

  const [overlay, setOverlay] = useState(<OverlayOne />);
  useEffect(() => {
    if (location.pathname === "/") {
      setPokemonIsOnPokedex(
        pokemonsOnPokedex.find((pokemon) => pokemon.id === pokemonInfos.id)
      );
    }
  });

  function handleCloseModal() {
    onClose();
    if (location.pathname === "/pokedex") {
      removePokemon(pokemonInfos);
    }
  }

  return (
    <CardBox>
      <PokeImg
        src={pokemonInfos.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <BoxInsideTheBox type={pokemonInfos.types}>
        <InfoAndButtonBox>
          <InfoBox>
            <InfoText>
              <IdPokemon>
                #{" "}
                {pokemonInfos.id < 10 ? `0${pokemonInfos.id}` : pokemonInfos.id}
              </IdPokemon>
              <NamePokemon>{pokemonInfos.name}</NamePokemon>
            </InfoText>
            <TypesOnCard>
              {pokemonInfos.types.map((type) => {
                return (
                  <img src={pokeType[type.type.name]} key={type.type.name} />
                );
              })}
            </TypesOnCard>
          </InfoBox>
          <ButtonDetails
            onClick={() => {
              setPokemon(pokemonInfos);
              GoToDetails(navigate, pokemonInfos.id);
            }}
          >
            Detalhes
          </ButtonDetails>
        </InfoAndButtonBox>
        {!pokemonIsOnPokedex && (
          <CatchButton
            onClick={() => {
              catchPokemon(pokemonInfos);
              setOverlay(<OverlayTwo />);
              onOpen();
            }}
          >
            Capturar!
          </CatchButton>
        )}
        {location.pathname === "/pokedex" && (
          <RemoveButton
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            Excluir!
          </RemoveButton>
        )}
        <Pokebola src={fundoPokebola} alt="" />
      </BoxInsideTheBox>

      <Modal isCentered isOpen={isOpen} onClose={handleCloseModal}>
        {overlay}
        {location.pathname === "/pokedex" ? (
          <ModalContent>
            <ModalHeader>OH NO!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>O pokemon foi removido da sua pokédex</Box>
            </ModalBody>
          </ModalContent>
        ) : (
          <ModalContent>
            <ModalHeader>Gotcha!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>O pokemon foi adicionado a sua pokédex</Box>
            </ModalBody>
          </ModalContent>
        )}
      </Modal>
    </CardBox>
  );
}
