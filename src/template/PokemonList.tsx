import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import Slot from '../components/contents/Slot';
import { getPokemonInfo, getPokemonList } from '../modules/pokedex/actions';
import { usePokedexContext } from '../providers/pokedex';
import { Pokemon } from '../types/Pokemon';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 90vh;
`;

const PokemonList: FunctionComponent = () => {
    const { store, dispatch } = usePokedexContext();

    useEffect(() => {
        getPokemonList(1, dispatch);
    }, []);

    const handleClick = (name: string) => {
        getPokemonInfo({name}, dispatch);
    }

    return (
        <Container>
            {store.pokemonList.list.map(({name, image}) => {
                return (
                    <Slot name={name} image={image} onClick={handleClick} />
                )
            })}
        </Container>
    )
}

export default PokemonList;