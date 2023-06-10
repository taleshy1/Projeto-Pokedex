import {
  AdicionarAPokedex,
  ButtonAndLessBox,
  ButtonBackToHome,
  ButtonPokedex,
  ButtonRemovePokemon,
  HeaderStyled,
  Image,
  LessThanIcon,
} from "./style";
import logo from "../../assets/logo.svg";
import lt from "../../assets/lt.svg";
import { GoToHome, GoToPokedex } from "../../routes/coordination";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Header({
  setPokemonsOnPokedex,
  pokemonsOnPokedex,
  pokemon,
  catchPokemon,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const removePokemon = () => {
    const newPokeList = pokemonsOnPokedex.filter(
      (pokemonio) => pokemonio.id !== pokemon.id
    );
    setPokemonsOnPokedex(newPokeList);
    GoToPokedex(navigate);
  };

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [addOrRemove, setAddOrRemove] = useState("");

  // function removePokemon(id) {
  //   e.preventDefault();
  //   const newList = pokemonsOnPokedex.filter((pokemon) => pokemon.id !== id);
  //   setPokemonsOnPokedex(newList);
  // }

  function handleCloseModal() {
    onClose();
    if (addOrRemove === "remove") {
      removePokemon(pokemon.id);
    } else {
      GoToPokedex(navigate);
    }
  }
  return (
    <>
      <HeaderStyled>
        {location.pathname !== "/" && (
          <ButtonAndLessBox>
            <LessThanIcon src={lt} />
            <ButtonBackToHome onClick={() => GoToHome(navigate)}>
              Todos Pokémons
            </ButtonBackToHome>
          </ButtonAndLessBox>
        )}

        <Image src={logo} />

        {location.pathname === "/" && (
          <ButtonPokedex onClick={() => GoToPokedex(navigate)}>
            Pokédex
          </ButtonPokedex>
        )}

        {location.pathname.includes("/details") &&
          (pokemonsOnPokedex.find(
            (pokemonio) => pokemonio.id === pokemon.id
          ) ? (
            <ButtonRemovePokemon
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
                setAddOrRemove("remove");
              }}
            >
              Excluir da Pokédex
            </ButtonRemovePokemon>
          ) : (
            <AdicionarAPokedex
              onClick={() => {
                catchPokemon(pokemon);
                setOverlay(<OverlayTwo />);
                onOpen();
                setAddOrRemove("add");
              }}
            >
              Adicionar a pokédex
            </AdicionarAPokedex>
          ))}
      </HeaderStyled>
      <Modal isCentered isOpen={isOpen} onClose={handleCloseModal}>
        {overlay}
        {addOrRemove === "remove" ? (
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
    </>
  );
}
