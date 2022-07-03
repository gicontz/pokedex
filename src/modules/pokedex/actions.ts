import React, { useReducer } from 'react';
import { pokedex } from './reducer';
import { defaultState } from '../../providers/pokedex';
import { api } from '../../helpers/api';
import { Actions, PokedexState, PokedexTypes, TGetPokemon } from './types';
import { PokemonClass } from '../../types/Pokemon';

const initialState: PokedexState = defaultState.store;

export const usePokedex = (): [PokedexState, React.Dispatch<PokedexTypes>] => {
    const [state, dispatch] = useReducer(pokedex, initialState);
    return [state, dispatch];
};

export const getPokemonList = async (data: number, dispatch: React.Dispatch<PokedexTypes>) => {
    const limit = 14;
    const offset = limit * (data - 1);
    dispatch({ type: Actions.GET_POKEMON_LIST_START, payload: data });
    try {
        const { data: d } = await api({
            url: `?limit=${limit}&offset=${offset}`,
        });
        dispatch({ type: Actions.GET_POKEMON_LIST_FULFILLED, payload: d.results });
    } catch (e) {
        dispatch({ type: Actions.GET_POKEMON_LIST_REJECTED, payload: undefined });
    }
}


export const getPokemonInfo = async (data: Partial<TGetPokemon>, dispatch: React.Dispatch<PokedexTypes>) => {
    const { name } = data;
    dispatch({ type: Actions.GET_POKEMON_START, payload: data });
    try {
        const { data: d } = await api({
            url: `/${name}`,
        });
        dispatch({ type: Actions.GET_POKEMON_FULFILLED, payload: {
            name: d.name,
            image: d.sprites.other['official-artwork'].front_default,
            description: '',
            pokeId: d.id,
            type: (d.types as {type: { name: string }}[]).map(({type}) => type.name) as PokemonClass[],
            gender: 'female'
        } });
    } catch (e) {
        dispatch({ type: Actions.GET_POKEMON_REJECTED, payload: undefined });
    }
}