import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { pokemonSample } from '../../constants/pokemon';

interface Props {
    name: string;
    image: React.ReactSVG | React.ReactNode;
    onClick?: (name: string) => void;
}

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background-color: rgba(0,0,0,0.3);
    align-items: center;
`;

const PokemonImage = styled.img`
    width: 50px;
`;

const Slot: FunctionComponent<Props> = ({
    name,
    image,
    onClick
}) => {

    const handleClick = () => {
        if (typeof onClick === 'function') onClick(name);
    }

    return (
        <Container onClick={handleClick}>
            {typeof image === 'string' ? <PokemonImage src={image}/> : <image /> }
            <span>{name}</span>
        </Container>
    )
}

export default Slot;