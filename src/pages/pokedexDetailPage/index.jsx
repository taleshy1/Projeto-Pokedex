import pokeballBackground from "../../assets/pokeballBackGroundDetail.png";
import { LoadingContainer } from "./style";
import pokeballDetail from "../../assets/pokeballDetailInsideBackground.svg";
import pokeType from "../../utils/types";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useGetPokeList";
import LoadingPage from "../../components/loading";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import themes from "../../utils/themes";
import { useMediaQuery } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Global } from "../../context/global/globalContext";

export default function PokedexDetailPage() {
  const id = useParams();
  const { data, isLoading } = useRequest(id.id);
  const [smallerScreen] = useMediaQuery("(max-width: 1280px)");
  const { setPokemon } = useContext(Global);
  let moveCount = 0;
  let total = 0;

  if (!isLoading) {
    for (const stat of data.stats) {
      total += stat.base_stat;
    }
  }
  useEffect(() => {
    if (!isLoading) {
      setPokemon(data);
    }
  });
  return (
    <LoadingContainer isLoading={isLoading} position="relative">
      {isLoading ? (
        <LoadingPage />
      ) : smallerScreen ? (
        <>
          <Box>
            <Text
              color="white"
              fontSize={{ md: "2rem", base: "1rem" }}
              pl="2.5rem"
              fontFamily="Poppins"
              textAlign="center"
              pt={"2rem"}
              ml="50%"
              transform="translate(-60%)"
            >
              Detalhes
            </Text>
            <Flex flexDirection={"column"}>
              <Text
                textTransform={"capitalize"}
                color={themes.colors.backgroundCard[data.types[0].type.name]}
                textAlign={"center"}
                fontSize={{ md: "3rem", base: "2rem" }}
              >
                #{data.id < 10 ? `0${data.id}` : data.id} {data.name}
              </Text>
              <Image
                src={data.sprites.other.dream_world.front_default}
                maxW={{ base: "10rem", md: "20rem" }}
                m={"auto"}
                mt="2rem"
              />
              <Flex
                flexDir="column"
                w="80%"
                bgColor="white"
                m="auto"
                mt="3rem"
                pb="1rem"
                h={`fit-content`}
              >
                <Text m="auto" fontSize="2rem">
                  STATUS
                </Text>
                {data.stats.map((stat) => (
                  <Flex alignItems="center" mb="0.5rem">
                    <Flex key={stat.stat.name} alignItems="center" w="35%">
                      <Text
                        w="70%"
                        textAlign="right"
                        textTransform="capitalize"
                      >
                        {stat.stat.name === "special-attack" ||
                        stat.stat.name === "special-defense"
                          ? stat.stat.name === "special-attack"
                            ? "Sp.atk"
                            : "Sp.def"
                          : stat.stat.name}
                      </Text>
                      <Text w="fit-content" pl=".5rem">
                        {stat.base_stat}
                      </Text>
                    </Flex>
                    <Flex
                      width={`${stat.base_stat / 2}%`}
                      maxW="63%"
                      backgroundColor={() =>
                        `hsl(${stat.base_stat * 0.8}, 80%, 50%)`
                      }
                      height=".8rem"
                      borderRadius="2rem"
                      _before={{
                        content: '""',
                        borderRadius: "2vw",
                        width: `${stat.base_stat}%`,
                      }}
                    />
                  </Flex>
                ))}
                <Text m={"auto"} fontSize={"1.5rem"}>
                  Total: {total}
                </Text>
              </Flex>
              <Flex
                flexDir="column"
                w="80%"
                bgColor="white"
                m="auto"
                mt="3rem"
                h={`fit-content`}
                mb="3rem"
                pb="1rem"
                alignItems={"center"}
              >
                <Text m="auto" fontSize="2rem">
                  MOVES
                </Text>
                <Flex
                  flexDir={{ base: "column", md: "row" }}
                  flexWrap={{ md: "wrap" }}
                >
                  {data.moves.map((move, i) => {
                    if (moveCount < 10) {
                      moveCount += 1;
                      return (
                        <Text
                          key={i}
                          ml="1rem"
                          p="1rem"
                          mt=".5rem"
                          backgroundColor="#ececec"
                          border="1px dashed rgba(0, 0, 0, 0.14)"
                          borderRadius="1.4rem"
                          width="fit-content"
                        >
                          {move.move.name}
                        </Text>
                      );
                    }
                  })}
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </>
      ) : (
        <Box position="relative">
          <Text
            color="white"
            fontSize={{ md: "3rem", base: "1.5rem" }}
            pt="3.75rem"
            pl="2.5rem"
            fontFamily="Poppins"
          >
            Detalhes
          </Text>
          <Image
            position="absolute"
            w="56.812rem"
            h="56.812rem"
            left="50%"
            transform="translate(-50%)"
            top="-1.688rem"
            src={pokeballBackground}
            alt=""
          />

          <Box
            type={data.types}
            position="absolute"
            w="86.821rem"
            maxW="100%"
            h="41.438rem"
            top="11.75rem"
            left="50%"
            transform="translate(-50%)"
            borderRadius="2.368rem"
            background={themes.colors.backgroundCard[data.types[0].type.name]}
          >
            <Image
              position="absolute"
              right={0}
              src={pokeballDetail}
              alt="pokeball"
            />
            <Image
              position="absolute"
              right="2.196rem"
              top="-8.25rem"
              w="16.875rem"
              src={data.sprites.other["official-artwork"].front_default}
              alt=""
            />

            <Flex p="1.5rem 0 1.625rem 2.75rem" h="38.313rem">
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                w="17.625rem"
                h="38.313rem"
              >
                <Flex
                  backgroundColor="white"
                  alignItems="center"
                  justifyContent="center"
                  h="17.625rem"
                  w="17.625rem"
                  borderRadius="0.5rem"
                >
                  <Image src={data.sprites.front_default} alt="" w="100%" />
                </Flex>
                <Flex
                  backgroundColor="white"
                  alignItems="center"
                  justifyContent="center"
                  h="17.625rem"
                  w="17.625rem"
                  borderRadius="0.5rem"
                >
                  <Image src={data.sprites.back_default} alt="" w="100%" />
                </Flex>
              </Flex>
              <Flex
                h="38.313rem"
                w="21.438rem"
                flexDirection="column"
                backgroundColor="white"
                borderRadius="0.8rem"
                ml="2.125rem"
              >
                <Text
                  as="h2"
                  fontSize="2rem"
                  fontWeight="bolder"
                  fontFamily="Inter"
                  m="1rem"
                >
                  Base stats
                </Text>
                {data.stats.map((stat) => (
                  <Flex alignItems="center" mb="0.5rem">
                    <Flex key={stat.stat.name} alignItems="center" w="35%">
                      <Text
                        w="70%"
                        textAlign="right"
                        textTransform="capitalize"
                      >
                        {stat.stat.name === "special-attack" ||
                        stat.stat.name === "special-defense"
                          ? stat.stat.name === "special-attack"
                            ? "Sp.atk"
                            : "Sp.def"
                          : stat.stat.name}
                      </Text>
                      <Text w="fit-content" pl=".5rem">
                        {stat.base_stat}
                      </Text>
                    </Flex>
                    <Flex
                      width={`${stat.base_stat / 2}%`}
                      maxW="65%"
                      backgroundColor={() =>
                        `hsl(${stat.base_stat * 0.8}, 80%, 50%)`
                      }
                      height=".8rem"
                      borderRadius="2rem"
                      _before={{
                        content: '""',
                        borderRadius: "2vw",
                        width: `${stat.base_stat}%`,
                      }}
                    />
                  </Flex>
                ))}

                <Text pl="2rem">Total: {total}</Text>
              </Flex>
              <Flex
                flexDirection="column"
                w="18.25rem"
                ml="4.25rem"
                zIndex={3}
                justifyContent="space-between"
                height="38.313rem"
              >
                <Flex flexDirection="column" color="white">
                  <Text fontSize="1rem">
                    #{""}
                    {data.id < 10 ? `0${data.id}` : data.id}
                  </Text>
                  <Text fontSize="3rem" textTransform="capitalize">
                    {data.name}
                  </Text>
                  <Flex>
                    {data.types.map((type) => {
                      return (
                        <img
                          src={pokeType[type.type.name]}
                          key={type.type.name}
                        />
                      );
                    })}
                  </Flex>
                </Flex>
                <Flex
                  flexDirection="column"
                  backgroundColor="white"
                  h="28.313rem"
                >
                  <Text
                    fontSize="1.5rem"
                    fontWeight="bolder"
                    pl="1.125rem"
                    pt="1.125rem"
                  >
                    Moves:
                  </Text>
                  <Flex flexWrap="wrap">
                    {data.moves.map((move, i) => {
                      if (moveCount < 10) {
                        moveCount += 1;
                        return (
                          <Text
                            key={i}
                            ml="1rem"
                            p="1rem"
                            mt=".5rem"
                            backgroundColor="#ececec"
                            border="1px dashed rgba(0, 0, 0, 0.14)"
                            borderRadius="1.4rem"
                            width="fit-content"
                          >
                            {move.move.name}
                          </Text>
                        );
                      }
                    })}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      )}
    </LoadingContainer>
  );
}
