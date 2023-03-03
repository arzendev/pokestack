import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";

export const ToggleColorMode = () => {
  const bg = useColorModeValue("transparent", "whiteAlpha-200");

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} size="xs" bg={bg}>
      {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
