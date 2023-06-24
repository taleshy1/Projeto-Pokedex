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
  Grid,
  Flex,
  GridItem,
  Button,
  Image,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Global } from "../../context/global/globalContext";
import { Router } from "../../context/routerContext";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { navigate, location } = useContext(Router);
  const {
    removePokemon,
    catchPokemon,
    pokemonsOnPokedex,
    pokemon,
    globalLoading,
  } = useContext(Global);
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
      <Grid
        backgroundColor="#ffffff"
        height={{ md: "10rem", base: "5rem" }}
        position="sticky"
        top={0}
        zIndex={3}
        templateColumns="repeat(16, 1fr)"
        opacity={isSticky ? 0.9 : 1}
        transition="opacity 1s ease-in-out"
        alignContent="center"
      >
        {location.pathname !== "/" && (
          <GridItem
            colStart={{ base: 1, md: 2 }}
            colEnd={{ base: 8, md: 8, lg: 7 }}
          >
            <Flex maxW="100%" h="100%" alignItems={"center"}>
              <Image src={lt} />
              <Button
                bgColor="transparent"
                textDecoration="underline"
                fontWeight="bolder"
                fontSize={{ base: "1rem", md: "1.5rem" }}
                _hover="none"
                p={0}
                onClick={() => GoToHome(navigate)}
              >
                Todos os Pokémons
              </Button>
            </Flex>
          </GridItem>
        )}
        <GridItem colStart={{ lg: 7 }} colEnd={{ lg: 12 }}>
          <Image
            src={logo}
            display={{ base: "none", md: "none", lg: "block" }}
          />
        </GridItem>

        {location.pathname === "/" && (
          <GridItem
            colStart={{ base: 11, md: 12, lg: 13 }}
            colEnd={{ base: 16, md: 16, lg: 16 }}
            display="flex"
            alignItems="center"
          >
            <Button
              bgColor="#33A4F5"
              color="white"
              _hover="none"
              _active="none"
              w={{ base: "10rem", md: "17.938rem" }}
              h={{ base: "3rem", md: "4.625rem" }}
              fontSize="1.5rem"
              onClick={() => GoToPokedex(navigate)}
            >
              Pokédex
            </Button>
          </GridItem>
        )}
        <GridItem
          colStart={{ base: 9, md: 12, lg: 13 }}
          colEnd={{ base: 16, md: 16, lg: 16 }}
          display={"flex"}
          alignItems={"center"}
        >
          {location.pathname.includes("/details") &&
            !globalLoading &&
            (pokemonsOnPokedex.find(
              (pokemonio) => pokemonio.id === pokemon.id
            ) ? (
              <Button
                w={{ base: "12rem", lg: "17.938rem" }}
                h={{ base: "3rem", lg: "4.625rem" }}
                bgColor=" #ff6262"
                color="#ffffff"
                _hover="none"
                _active="none"
                cursor="pointer"
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                  setAddOrRemove("remove");
                }}
              >
                Excluir da Pokédex
              </Button>
            ) : (
              <Button
                w={{ base: "12rem", lg: "17.938rem" }}
                h={{ base: "3rem", lg: "4.625rem" }}
                bgColor=" #33a4f5"
                color="#ffffff"
                _hover="none"
                _active="none"
                cursor="pointer"
                onClick={() => {
                  catchPokemon(pokemon);
                  setOverlay(<OverlayTwo />);
                  onOpen();
                  setAddOrRemove("add");
                }}
              >
                Adicionar a pokédex
              </Button>
            ))}
        </GridItem>
      </Grid>

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
