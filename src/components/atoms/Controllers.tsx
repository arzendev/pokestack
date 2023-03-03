import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { useAppDispatch, useAppSelector } from "../../interfaces/hook";
import { useState } from "react";
import { getPokemons } from "../../store/slices/pokemon/thunks";
import { getLocalStorage } from "../../helpers/getLocalStorage";

export const Controllers = () => {
  const bg = useColorModeValue("transparent", "whiteAlpha-200");

  const [page, setPage] = useState<number>(
    Number(localStorage.getItem("next-page"))
  );
  const dispatch = useAppDispatch();

  const { limit, total } = useAppSelector((state) => state.pokemons);

  const totalPages = Math.ceil(total / Number(limit));

  const handlePreviousPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
    localStorage.setItem("next-page", JSON.stringify(nextPage));
    localStorage.setItem("limit", limit);
    dispatch(getPokemons(limit, nextPage.toString()));
  };

  const handleNextPage = () => {
    const nextPage = Math.min(page + 1, totalPages);
    if (nextPage === totalPages) return;
    setPage(nextPage);
    localStorage.setItem("next-page", JSON.stringify(nextPage));
    localStorage.setItem("limit", limit);
    dispatch(getPokemons(limit, nextPage.toString()));
  };

  return (
    <Flex
      gap="4"
      w={{ base: "100%", md: "100%" }}
      justifyContent="center"
      fontSize="sm"
      alignItems="center"
    >
      <Button size="xs" gap="2" onClick={handlePreviousPage} bg={bg}>
        <ArrowLeftIcon />
        <Box as="p" display={{ base: "none", md: "block" }}>
          Previous page
        </Box>
      </Button>
      <Box>
        {page + 1} de {totalPages}
      </Box>
      <Button size="xs" gap="2" onClick={handleNextPage} bg={bg}>
        <Box as="p" display={{ base: "none", md: "block" }}>
          Next page
        </Box>
        <ArrowRightIcon />
      </Button>
    </Flex>
  );
};
