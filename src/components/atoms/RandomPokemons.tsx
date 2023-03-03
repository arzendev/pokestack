import { Box } from "@chakra-ui/react";
import { SinglePokemon } from "../../interfaces/allPokemonsResponse";
import { Card } from "../organism";

interface RandomState {
  pokemons: SinglePokemon[];
  id?: string;
}

export const RandomPokemons = (props: RandomState) => {
  const { pokemons, id } = props;
  return (
    <>
      {pokemons
        .filter((pokemon) => pokemon.id !== Number(id))
        .slice(0, 3)
        .map((pokemon: SinglePokemon) => (
          <Box key={pokemon.id}>
            <Card pokemon={pokemon} />
          </Box>
        ))}
    </>
  );
};
