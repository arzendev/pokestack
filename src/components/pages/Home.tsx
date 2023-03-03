import { Box } from "@chakra-ui/react";
import { NavBar, SubMenu } from "../organism";
import { Controllers } from "../atoms";
import { CardList } from "../template/CardList";
import { useAppSelector } from "../../interfaces/hook";

export const Home = () => {
  const { isLoading } = useAppSelector((state) => state.pokemons);
  return (
    <>
      <NavBar />
      <SubMenu />
      <CardList />
      <Box py="10" display={isLoading ? "none" : "block"}>
        <Controllers />
      </Box>
    </>
  );
};
