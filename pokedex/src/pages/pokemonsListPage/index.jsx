import { PageTittle, PokeListContainer } from "../../GlobalStyles";
import PokemonCard from "../../components/pokemonCard";
import useRequest from "../../hooks/useGetPokeList";

export default function PokemonListPage() {
  const { data, isLoading } = useRequest("", []);
  return (
    <>
      <PageTittle>Todos Pokémons</PageTittle>
      <PokeListContainer>
        {data.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemonInfos={pokemon} />;
        })}
      </PokeListContainer>
    </>
  );
}
