import { pokemonApi } from "../api";
import {
  PokemonsResponse,
  Result,
  SinglePokemon,
} from "../interfaces/allPokemonsResponse";

interface EachPokemon {
  totalAmount: number;
  singlePokemonArray: SinglePokemon[];
}

export const getAllPokemons = async (
  limit: string,
  page: string
): Promise<EachPokemon> => {
  const resp = await pokemonApi.get<PokemonsResponse>(
    `?limit=${limit}&offset=${Number(page) * Number(limit)}`
  );

  const totalAmount = resp.data.count;

  const initialList = resp.data.results;

  return getPokemon(initialList, totalAmount);
};

const getPokemon = async (
  initialList: Result[],
  totalAmount: number
): Promise<EachPokemon> => {
  const pokemon = initialList.map(async ({ url }) => {
    const id = url.split("/")[6];

    const resp = await pokemonApi.get<SinglePokemon>(`/${id}`);

    return resp.data;
  });

  const pokemonList = await Promise.all(pokemon);

  return getEachPokemon(pokemonList, totalAmount);
};

const getEachPokemon = (
  pokemonList: SinglePokemon[],
  totalAmount: number
): EachPokemon => {
  const singlePokemonArray: SinglePokemon[] = pokemonList.map(
    ({
      id,
      height,
      weight,
      base_experience,
      is_default,
      order,
      species,
      abilities,
      forms,
      types,
      game_indices,
      stats,
      moves,
      name,
    }) => {
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      const upperName = name.toUpperCase();

      return {
        id,
        height,
        weight,
        is_default,
        base_experience,
        order,
        species,
        abilities,
        forms,
        types,
        game_indices,
        stats,
        moves,
        name: upperName,
        picture,
      };
    }
  );

  return { singlePokemonArray, totalAmount };
};
