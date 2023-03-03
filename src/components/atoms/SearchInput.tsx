import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../interfaces/hook";
import { onSearchPokemon } from "../../store/slices/pokemon";
import { getLocalStorage } from "../../helpers/getLocalStorage";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const input = localStorage.getItem("searchValue");
    if (input) {
      setSearchValue(input);
      dispatch(onSearchPokemon(input));
    }
  }, []);

  const dispatch = useAppDispatch();

  const onChangeSearchValue = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("searchValue", target.value);
    setSearchValue(target.value);
    dispatch(onSearchPokemon(target.value));
  };

  return (
    <InputGroup size="sm" w="100%">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        type="text"
        placeholder="Search Teams"
        rounded="10"
        onChange={onChangeSearchValue}
        value={searchValue}
      />
    </InputGroup>
  );
};
