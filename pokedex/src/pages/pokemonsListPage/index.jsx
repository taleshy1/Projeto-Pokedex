import { PageTittle, PokeListContainer } from "../../GlobalStyles";
import PokemonCard from "../../components/pokemonCard";

export default function PokemonListPage() {
  return (
    <>
      <PageTittle>Todos Pokémons</PageTittle>
      <PokeListContainer>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </PokeListContainer>
    </>
  );
}
