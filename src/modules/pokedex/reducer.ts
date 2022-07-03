import { Actions, PokedexState, PokedexTypes } from "./types";

export const pokedex = (state: PokedexState, action: PokedexTypes): PokedexState => {
    switch(action.type) {
        case Actions.GET_POKEMON_LIST_START: {
            return {
                ...state,
                pokemonList: {
                    ...state.pokemonList,
                    isLoading: true,
                }
            }
        }
        case Actions.GET_POKEMON_LIST_FULFILLED: {
            return {
                ...state,
                pokemonList: {
                    list: [...action.payload],
                    isLoading: false,
                }
            }
        }
        case Actions.GET_POKEMON_LIST_REJECTED: {
            return {
                ...state,
                pokemonList: {
                    ...state.pokemonList,
                    isLoading: false,
                }
            }
        }
        case Actions.GET_POKEMON_FULFILLED: {
            return {
                ...state,
                currentPokemon: {
                    ...action.payload,
                }
            }
        }
        default: 
            return state;
    }
}