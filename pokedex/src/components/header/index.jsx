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
import { useContext, useEffect, useState } from "react";
import { Global } from "../../context/global/globalContext";
import { Router } from "../../context/routerContext";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { navigate, location } = useContext(Router);
  const { removePokemon, catchPokemon, pokemonsOnPokedex, pokemon } =
    useContext(Global);
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

  function handleCloseModal() {
    onClose();
    if (addOrRemove === "remove") {
      removePokemon(pokemon);
      GoToPokedex(navigate);
    } else {
      GoToPokedex(navigate);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const actualHeigth = window.scrollY;
      const heigthToActive = 20;
      setIsSticky(actualHeigth > heigthToActive);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeaderStyled sticky={isSticky}>
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
