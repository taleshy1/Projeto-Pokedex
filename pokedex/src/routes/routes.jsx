import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import PokemonListPage from "../pages/pokemonsListPage";

export function RouterPage() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<PokemonListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
