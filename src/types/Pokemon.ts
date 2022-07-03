export enum PokemonClass {
    ELECTRIC = 'electric',
    FIRE = 'fire',
    WATER = 'water',
    GRASS = 'grass',
    POISON = 'poison'
};

export type PokemonGender = 'male' | 'female';

export interface Pokemon {
    name: string;
    pokeId: number;
    type: PokemonClass[];
    gender: PokemonGender;
    description: string;
    image: React.ReactSVG | React.ReactNode;
};