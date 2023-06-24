import { useEffect } from "react";
import { createContext, useState } from "react";

export const Global = createContext();

const GlobalContextProvider = ({ children }) => {
  const [pokemonsOnPokedex, setPokemonsOnPokedex] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [globalLoading, setGlobalLoading] = useState(true);
  const [page, setPage] = useState("");

  const catchPokemon = (pokemon) => {
    setPokemonsOnPokedex([...pokemonsOnPokedex, pokemon]);
  };

  const removePokemon = (pokemon) => {
    const newPokeList = pokemonsOnPokedex.filter(
      (pokemonio) => pokemonio.id !== pokemon.id
    );
    setPokemonsOnPokedex(newPokeList);
  };

  useEffect(() => {
    const pokemonsOnLocalStorage = JSON.parse(localStorage.getItem("pokemons"));
    pokemonsOnLocalStorage
      ? setPokemonsOnPokedex(pokemonsOnLocalStorage)
      : setPokemonsOnPokedex([]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("pokemons", JSON.stringify(pokemonsOnPokedex));
    }, 200);
  }, [pokemonsOnPokedex]);

  return (
    <Global.Provider
      value={{
        pokemonsOnPokedex,
        catchPokemon,
        removePokemon,
        setPokemonsOnPokedex,
        pokemon,
        setPokemon,
        page,
        setPage,
        globalLoading,
        setGlobalLoading,
      }}
    >
      {children}
    </Global.Provider>
  );
};

export default GlobalContextProvider;
