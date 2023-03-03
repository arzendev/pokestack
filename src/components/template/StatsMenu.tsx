import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Box, useColorModeValue, Flex, Grid } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Stat } from "../../interfaces/allPokemonsResponse";

interface StatProps {
  data: Stat[];
}

export const StatsMenu = ({ data }: StatProps) => {
  const [display, changeDisplay] = useState<boolean>(false);

  const bg = useColorModeValue("orange.50", "gray.700");
  return (
    <Flex direction="column" gap="2">
      <Button
        bg={bg}
        size="sm"
        borderRadius="md"
        rightIcon={display ? <ChevronUpIcon /> : <ChevronDownIcon />}
        w="100%"
        onClick={() => changeDisplay((prev) => !prev)}
      >
        <Box as={"p"} w="100%">
          Stats
        </Box>
      </Button>
      <Box
        display={display ? "flex" : "none"}
        flexDirection="column"
        bg={bg}
        borderRadius="md"
        p="3"
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
        >
          {data.map(({ base_stat, stat, effort }) => (
            <Box key={stat.name} display="flex">
              Name: {stat.name} - Effort: {effort} -Base Stat: {base_stat}
            </Box>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
