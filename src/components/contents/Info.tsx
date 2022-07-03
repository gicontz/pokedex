import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Pokemon } from '../../types/Pokemon';

interface Props {
    info: Pokemon | null;
};

const BaseContainer = styled.div`
    background-color: #AC8219;
    display: flex;
    max-height: 90vh;
    padding: 10px;
    box-sizing: border-box;
`;

const Container = styled.div`
    background-color: #EEE9CC;
    display: flex;
    flex-direction: column;
    max-height: 90vh;
    min-width: 70vw;
    padding: 20px;
    box-sizing: border-box;
`;

const PokemonImage = styled.img`
    width: 250px;
    display: block;
    margin: 0 auto;
`;

const TitleBar = styled.div`
    background-color: #27394D;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    height: 60px;
    > div >  span.name {
        margin-left: 10px;
    }
    > div.type {
        display: flex;
    }
    color: #FFFFFF;
`;

export const PokemonDetails: FunctionComponent<Pokemon> = ({
    pokeId,
    name,
    type,
    image,
    description
}) => {
    return (
        <>
            <TitleBar>
                <div>
                    <span>No. {pokeId}</span>
                    <span className='name'>{name}</span>
                </div>
                <div className='type'>{type.map((t) => <p>{t}</p>)}</div>
            </TitleBar>
            {typeof image === 'string' ? <PokemonImage src={image} /> : <image />}
            <pre>
                {description}
            </pre>
        </>
    )
}

const Info: FunctionComponent<Props> = (props: Props) => {
    return (
        <BaseContainer>
            <Container>
                {props.info && <PokemonDetails {...props.info} />}
            </Container>
        </BaseContainer>
    )
}

export default Info;
