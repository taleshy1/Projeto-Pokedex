import PokemonCard from "../../components/pokemonCard";
import { PokeListContainer, PokemonListPageTittle } from "./style";

export default function PokemonListPage() {
  return (
    <>
      <PokemonListPageTittle>Todos Pokémons</PokemonListPageTittle>
      <PokeListContainer>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </PokeListContainer>
    </>
  );
}
