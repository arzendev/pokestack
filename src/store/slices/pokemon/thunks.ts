import type { RootState, AppDispatch } from "../../store";

import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { getAllPokemons } from "../../../helpers/getAllPokemons";

export const getPokemons = (limit: string = "20", page: string = "0") => {
  return async (dispatch: AppDispatch, getState: RootState) => {
    dispatch(startLoadingPokemons());

    const data = await getAllPokemons(limit, page);

    dispatch(
      setPokemons({
        pokemons: data.singlePokemonArray,
        page,
        limit,
        total: data.totalAmount,
        searchValue: "",
        filter: "",
      })
    );
  };
};
