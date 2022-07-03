import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import InfoContainer from '../components/contents/Info';
import PokemonList from '../template/PokemonList';
import { usePokedexContext } from '../providers/pokedex';

const Container = styled.div`
    display: flex;
    padding: 20px;
    background-color: #737F8C;
    height: 100vh;
`;

const MainView: FunctionComponent = () => {
    const { store } = usePokedexContext();
    return (
        <Container>
            <InfoContainer info={store.currentPokemon} />
            <PokemonList />
        </Container>
    )
};

export default MainView;