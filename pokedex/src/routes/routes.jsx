import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import PokemonListPage from "../pages/pokemonsListPage";
import PokedexPage from "../pages/pokedexPage";
import PokedexDetailPage from "../pages/pokedexDetailPage";
import { useState } from "react";

export function RouterPage() {
  const [pokemonsOnPokedex, setPokemonsOnPokedex] = useState([]);
  const [pokemon, setPokemon] = useState({});

  function catchPokemon(pokemon) {
    setPokemonsOnPokedex([...pokemonsOnPokedex, pokemon]);
  }
  return (
    <BrowserRouter>
      <Header
        pokemonsOnPokedex={pokemonsOnPokedex}
        setPokemonsOnPokedex={setPokemonsOnPokedex}
        pokemon={pokemon}
        catchPokemon={catchPokemon}
      />
      <Routes>
        <Route
          index
          element={
            <PokemonListPage
              pokemonsOnPokedex={pokemonsOnPokedex}
              setPokemonsOnPokedex={setPokemonsOnPokedex}
              pokemon={pokemon}
              setPokemon={setPokemon}
              catchPokemon={catchPokemon}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              pokemonsOnPokedex={pokemonsOnPokedex}
              setPokemonsOnPokedex={setPokemonsOnPokedex}
              pokemon={pokemon}
              setPokemon={setPokemon}
            />
          }
        />
        <Route path="/details/:id" element={<PokedexDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
