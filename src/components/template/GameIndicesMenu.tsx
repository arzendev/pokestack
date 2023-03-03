import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Box, useColorModeValue, Flex, Grid } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { GameIndex } from "../../interfaces/allPokemonsResponse";

interface GameIndexProps {
  data: GameIndex[];
}

export const GameIndicesMenu = ({ data }: GameIndexProps) => {
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
          Game Indices
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
          {data.map(({ game_index, version }) => (
            <Box display="flex" gap="4" key={version.name}>
              <p>
                Game index: {game_index} - Version: {version.name}{" "}
              </p>
            </Box>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
