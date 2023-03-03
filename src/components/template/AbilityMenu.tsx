import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Box, useColorModeValue, Flex } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Ability } from "../../interfaces/allPokemonsResponse";

interface AbilityProps {
  data: Ability[];
}

export const AbilityMenu = ({ data }: AbilityProps) => {
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
          Abilities
        </Box>
      </Button>
      <Box
        display={display ? "flex" : "none"}
        flexDirection="column"
        bg={bg}
        borderRadius="md"
        p="3"
      >
        {data.map(({ ability }, index) => (
          <p key={index}>{ability.name}</p>
        ))}
      </Box>
    </Flex>
  );
};
