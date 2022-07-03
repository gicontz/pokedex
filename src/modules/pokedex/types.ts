import { Pokemon } from "../../types/Pokemon";
import { Action } from '../../types/Action';

export enum Actions {
    GET_POKEMON_LIST_START = '@pokemon/GET_POKEMON_LIST_START',
    GET_POKEMON_LIST_FULFILLED = '@pokemon/GET_POKEMON_LIST_FULFILLED',
    GET_POKEMON_LIST_REJECTED = '@pokemon/GET_POKEMON_LIST_REJECTED',
    GET_POKEMON_START = '@pokemon/GET_POKEMON_START',
    GET_POKEMON_FULFILLED = '@pokemon/GET_POKEMON_FULFILLED',
    GET_POKEMON_REJECTED = '@pokemon/GET_POKEMON_REJECTED',
};

export type WithLoadingList<T> = {
    list: T;
    isLoading?: boolean;
};

export type TGetPokemon = {
    name: string;
    id: number;
}

export interface PokedexState {
    pokemonList: WithLoadingList<Pokemon[]>;
    currentPokemon: Pokemon | null;
}

export type GetPokemonListRequest = Action<typeof Actions.GET_POKEMON_LIST_START, number>;
export type GetPokemonListAction = Action<typeof Actions.GET_POKEMON_LIST_FULFILLED, Pokemon[]>;
export type GetPokemonListError = Action<typeof Actions.GET_POKEMON_LIST_REJECTED>;

export type GetPokemonRequest = Action<typeof Actions.GET_POKEMON_START, Partial<TGetPokemon>>;
export type GetPokemonAction = Action<typeof Actions.GET_POKEMON_FULFILLED, Pokemon>;
export type GetPokemonError = Action<typeof Actions.GET_POKEMON_REJECTED>;

export type PokedexTypes = 
    | GetPokemonListRequest
    | GetPokemonListAction
    | GetPokemonListError
    | GetPokemonRequest
    | GetPokemonAction
    | GetPokemonError;