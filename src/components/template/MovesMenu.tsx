import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Box, useColorModeValue, Flex, Grid } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Move } from "../../interfaces/allPokemonsResponse";

interface MovesProps {
  data: Move[];
}

export const MovesMenu = ({ data }: MovesProps) => {
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
          Moves
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
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
        >
          {data.map(({ move, version_group_details }) => (
            <Box key={move.name}>
              <Box display="flex" gap="4">
                <Box>{move.name}</Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
