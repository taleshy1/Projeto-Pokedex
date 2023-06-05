import { PageTittle, PokeListContainer } from "../../GlobalStyles";
import PokemonCard from "../../components/pokemonCard";

export default function PokedexPage() {
  return (
    <>
      <PageTittle>Meus Pokémons</PageTittle>
      <PokeListContainer>
        <PokemonCard />
        <PokemonCard />
      </PokeListContainer>
    </>
  );
}
