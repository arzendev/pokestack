import { Spinner } from "@chakra-ui/react";
import { Box, Stack } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Stack
      direction="row"
      spacing={4}
      alignItems="center"
      justifyContent="center"
      h="70vh"
    >
      <Spinner size="xl" />
      <Box>Fetching Pokemons...</Box>
    </Stack>
  );
};
