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
  Image,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Global } from "../../context/global/globalContext";
import { Router } from "../../context/routerContext";
import themes from "../../utils/themes";

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
    <Box
      position="relative"
      width={{ md: "27.5rem", base: "20.5rem" }}
      height={{ md: "16.438rem", base: "11rem" }}
      mb=".5rem"
    >
      <Image
        src={pokemonInfos.sprites.other["official-artwork"].front_default}
        alt=""
        position="absolute"
        maxW={{ md: "12.063rem", base: "7.5rem" }}
        height={{ md: "12.063rem", base: "7.5rem" }}
        right=".5rem"
        top="-.5rem"
        zIndex={1}
      />
      <Box
        backgroundColor={
          themes.colors.backgroundCard[pokemonInfos.types[0].type.name]
        }
        position="absolute"
        bottom={0}
        width={{ md: "27.5rem", base: "20.5rem" }}
        height={{ md: "13.125rem", base: "9.5rem" }}
        borderRadius=".8rem"
        fontFamily="Inter Tight"
        color="white"
      >
        <Text
          position="absolute"
          fontSize={{ md: "1rem", base: "1rem" }}
          top={{ md: "1.563rem", base: ".5rem" }}
          left={{ md: "1.438rem", base: ".8rem" }}
        >
          # {pokemonInfos.id < 10 ? `0${pokemonInfos.id}` : pokemonInfos.id}
        </Text>
        <Text
          position="absolute"
          fontSize={{ md: "2rem", base: "1.5rem" }}
          top={{ md: "2.5rem", base: "1.5rem" }}
          left={{ md: "1.438rem", base: ".8rem" }}
          textTransform="capitalize"
        >
          {pokemonInfos.name}
        </Text>
        <Flex
          position="absolute"
          top={{ md: "5.563rem", base: "3.8rem" }}
          left={{ md: "1.438rem", base: ".8rem" }}
          gap={{ md: "0.438rem", base: "0.1rem" }}
          zIndex="2"
        >
          {pokemonInfos.types.map((type) => {
            return (
              <Image
                src={pokeType[type.type.name]}
                key={type.type.name}
                maxW={{ md: "9rem", base: "4.1rem" }}
              />
            );
          })}
        </Flex>
        <Button
          onClick={() => {
            setPokemon(pokemonInfos);
            GoToDetails(navigate, pokemonInfos.id);
          }}
          position="absolute"
          left="1rem"
          bottom="1rem"
          width="4.5rem"
          height="2rem"
          background="transparent"
          textDecoration="underline"
          color="white"
          _hover="none"
          _active="none"
          zIndex={2}
        >
          Detalhes
        </Button>

        {!pokemonIsOnPokedex && (
          <Button
            onClick={() => {
              catchPokemon(pokemonInfos);
              setOverlay(<OverlayTwo />);
              onOpen();
            }}
            position="absolute"
            right="2rem"
            bottom="1rem"
            width={{ md: "9.125rem", base: "5rem" }}
            borderRadius="0.5rem"
            fontSize="1rem"
            bgColor="#ffffff"
            fontFamily="Poppins, sans-serif"
            zIndex={2}
            cursor='url("https://cur.cursors-4u.net/games/gam-13/gam1282.cur"), pointer'
          >
            Capturar!
          </Button>
        )}
        {location.pathname === "/pokedex" && (
          <Button
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
            position="absolute"
            right="2rem"
            bottom="1rem"
            width={{ md: "9.125rem", base: "5rem" }}
            fontSize="1rem"
            borderRadius="0.5rem"
            border="1px solid white"
            backgroundColor="red"
            zIndex={2}
          >
            Excluir!
          </Button>
        )}
        <Image
          src={fundoPokebola}
          alt=""
          position="absolute"
          maxW={{ md: "100rem", base: "11rem" }}
          right="0"
          top="0"
          overflow="hidden"
        />
      </Box>

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
    </Box>
  );
}
