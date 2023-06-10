import { createContext, useState } from "react";

export const Global = createContext();

const GlobalContextProvider = ({ children }) => {
  const [pokemonsOnPokedex, setPokemonsOnPokedex] = useState([]);
  const [pokemon, setPokemon] = useState({});

  const catchPokemon = (pokemon) => {
    setPokemonsOnPokedex([...pokemonsOnPokedex, pokemon]);
  };

  const removePokemon = (pokemon) => {
    const newPokeList = pokemonsOnPokedex.filter(
      (pokemonio) => pokemonio.id !== pokemon.id
    );
    setPokemonsOnPokedex(newPokeList);
  };

  return (
    <Global.Provider
      value={{
        pokemonsOnPokedex,
        catchPokemon,
        removePokemon,
        setPokemonsOnPokedex,
        pokemon,
        setPokemon,
      }}
    >
      {children}
    </Global.Provider>
  );
};

export default GlobalContextProvider;
