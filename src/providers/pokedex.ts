import { createContext, useContext } from "react";
import { PokedexState, PokedexTypes } from '../modules/pokedex/types';

export const defaultState = {
  store: {
    pokemonList: {
        list: [],
    },
    currentPokemon: null,
  } as PokedexState,
  dispatch: (a: PokedexTypes): void => {},
};

const pokedexContext = createContext(defaultState);

export const usePokedexContext = (): typeof defaultState => useContext(pokedexContext);

export default pokedexContext;