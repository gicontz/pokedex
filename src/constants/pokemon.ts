import { PokemonClass, PokemonGender } from "../types/Pokemon";

export const pokemonSample = {
    pokeId: 1,
    name: 'bulbasaur',
    type: [PokemonClass.GRASS, PokemonClass.POISON],
    gender: 'male' as PokemonGender,
    description: 'A strange seed was\nplanted on its\nback at birth.\u000cThe plant sprouts\nand grows with\nthis POKéMON.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
};