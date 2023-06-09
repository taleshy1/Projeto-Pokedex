import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Header from "../components/header";
import PokemonListPage from "../pages/pokemonsListPage";
import PokedexPage from "../pages/pokedexPage";
import PokedexDetailPage from "../pages/pokedexDetailPage";
import { useState } from "react";

export function RouterPage() {
  const [pokemonsOnPokedex, setPokemonsOnPokedex] = useState([]);
  const [idPokemon, setIdPokemon] = useState(0);

  return (
    <BrowserRouter>
      <Header
        pokemonsOnPokedex={pokemonsOnPokedex}
        setPokemonsOnPokedex={setPokemonsOnPokedex}
        idPokemon={idPokemon}
      />
      <Routes>
        <Route
          index
          element={
            <PokemonListPage
              pokemonsOnPokedex={pokemonsOnPokedex}
              setPokemonsOnPokedex={setPokemonsOnPokedex}
              idPokemon={idPokemon}
              setIdPokemon={setIdPokemon}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              pokemonsOnPokedex={pokemonsOnPokedex}
              setPokemonsOnPokedex={setPokemonsOnPokedex}
              idPokemon={idPokemon}
              setIdPokemon={setIdPokemon}
            />
          }
        />
        <Route path="/details/:id" element={<PokedexDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
