import { Controllers } from "../atoms/Controllers";
import { ToggleColorMode } from "../atoms/ToggleColorMode";
import { Flex, Box } from "@chakra-ui/react";

interface SubMenu {}

export const SubMenu = (props: SubMenu) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      px={{ base: "10", md: "20", lg: "32" }}
      my="4"
      position="relative"
    >
      <Controllers />
      <Box position="absolute" right={{ base: "10", md: "20", lg: "32" }}>
        <ToggleColorMode />
      </Box>
    </Flex>
  );
};
