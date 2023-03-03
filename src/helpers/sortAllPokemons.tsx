import { SinglePokemon } from "../interfaces/allPokemonsResponse";
export const sortAllPokemons = (
  pokemons: SinglePokemon[],
  search: string,
  filter: string
) => {
  switch (filter) {
    case "A-Z":
      return pokemons
        .filter((pokemon: SinglePokemon) =>
          pokemon.name.includes(search.toUpperCase())
        )
        .sort(function (a: SinglePokemon, b: SinglePokemon) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });

    case "Z-A":
      return pokemons
        .filter((pokemon: SinglePokemon) =>
          pokemon.name.includes(search.toUpperCase())
        )
        .sort(function (a: SinglePokemon, b: SinglePokemon) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });

    case "WEIGHT":
      return pokemons
        .filter((pokemon: SinglePokemon) =>
          pokemon.name.includes(search.toUpperCase())
        )
        .sort((a: SinglePokemon, b: SinglePokemon) => a.weight - b.weight);

    case "HEIGHT":
      return pokemons
        .filter((pokemon: SinglePokemon) =>
          pokemon.name.includes(search.toUpperCase())
        )
        .sort((a: SinglePokemon, b: SinglePokemon) => a.height - b.height);

    default:
      return pokemons.filter((pokemon: SinglePokemon) =>
        pokemon.name.includes(search.toUpperCase())
      );
  }
};
