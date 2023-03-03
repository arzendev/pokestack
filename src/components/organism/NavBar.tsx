import { useAppDispatch, useAppSelector } from "../../interfaces/hook";

import { Box, Divider, Flex, Select, Spacer } from "@chakra-ui/react";
import { SearchInput } from "../index";
import { getPokemons, onFilterOptions } from "../../store/slices/pokemon";
import { useEffect } from "react";
import { getLocalStorage } from "../../helpers/getLocalStorage";

export const NavBar = () => {
  const dispatch = useAppDispatch();

  const defaultFilter = localStorage.getItem("filter") || "EMPTY";
  const defaultAmount = localStorage.getItem("amount") || "20";

  const { page } = useAppSelector((state) => state.pokemons);

  const handleShowingChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("amount", target.value);
    localStorage.setItem("limit", target.value);
    const limit = target.value;
    dispatch(getPokemons(limit, page));
  };

  const handleFilterCase = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("filter", target.value);
    dispatch(onFilterOptions(target.value));
  };

  useEffect(() => {
    const filter = localStorage.getItem("filter");
    if (filter) {
      dispatch(onFilterOptions(filter));
    }
  }, []);

  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={{ base: "2", md: "8" }}
        px={{ base: "6", md: "20", lg: "32" }}
        my="4"
      >
        <Select
          w={{ base: "100%", md: "200px" }}
          size="sm"
          rounded="10"
          onChange={handleShowingChange}
          defaultValue={defaultAmount}
          order={{ base: "2", md: "1" }}
        >
          <option value="10">Show 10 results</option>
          <option value="20">Show 20 results</option>
          <option value="50">Show 50 results</option>
        </Select>

        <Box
          w={{ base: "100%", md: "250px", lg: "350px" }}
          order={{ base: "1", md: "2" }}
        >
          <SearchInput />
        </Box>

        <Select
          w={{ base: "100%", md: "200px" }}
          order={{ base: "3", md: "3" }}
          size="sm"
          rounded="10"
          defaultValue={defaultFilter}
          onChange={handleFilterCase}
        >
          <option value="EMPTY">Filters</option>
          <option value="A-Z">From A-Z</option>
          <option value="Z-A">From Z-A</option>
          <option value="HEIGHT">By Height</option>
          <option value="WEIGHT">By Weight</option>
        </Select>
      </Flex>
      <Divider />
    </>
  );
};
