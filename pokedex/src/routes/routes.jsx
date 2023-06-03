import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import PokemonListPage from "../pages/pokemonsListPage";
import PokedexPage from "../pages/pokedexPage";
import PokedexDetailPage from "../pages/pokedexDetailPage";

export function RouterPage() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<PokemonListPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details/:id" element={<PokedexDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
