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
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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

export default function PokemonCard({
  pokemonInfos,
  catchPokemon,
  pokemonsOnPokedex,
  setPokemonsOnPokedex,
  setPokemon,
}) {
  const [pokemonIsOnPokedex, setPokemonIsOnPokedex] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    if (location.pathname === "/") {
      setPokemonIsOnPokedex(
        pokemonsOnPokedex.find((pokemon) => pokemon.id === pokemonInfos.id)
      );
    }
  });
  function handleDetailButton() {
    setPokemon(pokemonInfos);
    GoToDetails(navigate, pokemonInfos.id);
  }

  function removePokemon(id) {
    const newList = pokemonsOnPokedex.filter((pokemon) => pokemon.id !== id);
    setPokemonsOnPokedex(newList);
  }

  function handleCloseModal() {
    onClose();
    if (location.pathname === "/pokedex") {
      removePokemon(pokemonInfos.id);
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
          <ButtonDetails onClick={handleDetailButton}>Detalhes</ButtonDetails>
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
              <Box>
                O {pokemonInfos.name.toUpperCase()} foi removido da sua pokédex
              </Box>
            </ModalBody>
          </ModalContent>
        ) : (
          <ModalContent>
            <ModalHeader>Gotcha!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                O {pokemonInfos.name.toUpperCase()} foi adicionado a sua pokédex
              </Box>
            </ModalBody>
          </ModalContent>
        )}
      </Modal>
    </CardBox>
  );
}
