import { Button } from "@chakra-ui/button";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, useColorModeValue, Grid } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../interfaces/hook";
import { ToggleColorMode } from "../atoms/ToggleColorMode";
import { SinglePokemon } from "../../interfaces/allPokemonsResponse";
import { Link, useParams } from "react-router-dom";
import { Card, Loader } from "../organism";
import {
  AbilityMenu,
  FormMenu,
  GameIndicesMenu,
  MovesMenu,
  StatsMenu,
  TypesMenu,
} from "../template";

export const PokemonPage = () => {
  const { pokemons, isLoading } = useAppSelector((state) => state.pokemons);

  const dispatch = useAppDispatch();

  const { id } = useParams();
  const bg = useColorModeValue("orange.50", "gray.700");

  const [pokemon] = pokemons.filter(
    (pokemon: SinglePokemon) => pokemon.id === Number(id)
  );

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Box
        display="flex"
        justifyContent="center"
        px={{ base: "6", sm: "14", md: "20", lg: "32" }}
        mt="10"
        position="relative"
      >
        <Box
          position="absolute"
          left={{ base: "6", sm: "14", md: "20", lg: "32" }}
        >
          <Link to="/">
            <Button
              px={0}
              size={{ base: "xs", sm: "sm" }}
              leftIcon={<ArrowLeftIcon />}
              colorScheme="teal"
              variant={{ base: "ghost", md: "outline" }}
            >
              <Box as="p" display={{ base: "none", md: "block" }}>
                Back
              </Box>
            </Button>
          </Link>
        </Box>

        <Image
          bg={bg}
          borderRadius="xl"
          src={pokemon.picture}
          alt={`picture of ${pokemon.name}`}
          w="250px"
        />

        <Box
          position="absolute"
          right={{ base: "6", sm: "14", md: "20", lg: "32" }}
        >
          <ToggleColorMode />
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-center"
        w="100%"
        px={{ base: "6", sm: "14", md: "20", lg: "32" }}
      >
        <Box as={"h1"} fontWeight="bold" textAlign="center">
          {pokemon.name}
        </Box>
        <Flex
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          gap="4"
          my="4"
        >
          <Flex
            gap={{ md: "1", lg: "3" }}
            justifyContent={{ base: "space-between" }}
            w={{ base: "100%", md: "auto" }}
          >
            <Box as={"p"} fontWeight="bold">
              Height:
            </Box>
            <span>{pokemon.height}</span>
          </Flex>
          <Flex
            gap={{ md: "1", lg: "3" }}
            justifyContent={{ base: "space-between" }}
            w={{ base: "100%", md: "auto" }}
          >
            <Box as={"p"} fontWeight="bold">
              Weight:
            </Box>
            <span>{pokemon.weight}</span>
          </Flex>
          <Flex
            gap={{ md: "1", lg: "3" }}
            justifyContent={{ base: "space-between" }}
            w={{ base: "100%", md: "auto" }}
          >
            <Box as={"p"} fontWeight="bold">
              Base experience:
            </Box>
            <span>{pokemon.base_experience}</span>
          </Flex>
          <Flex
            gap={{ md: "1", lg: "3" }}
            justifyContent={{ base: "space-between" }}
            w={{ base: "100%", md: "auto" }}
          >
            <Box as={"p"} fontWeight="bold">
              Default:
            </Box>
            <span>{pokemon.is_default.toString()}</span>
          </Flex>
          <Flex
            gap={{ md: "1", lg: "3" }}
            justifyContent={{ base: "space-between" }}
            w={{ base: "100%", md: "auto" }}
          >
            <Box as={"p"} fontWeight="bold">
              Order:
            </Box>
            <span>{pokemon.order}</span>
          </Flex>
          <Flex
            gap={{ md: "1", lg: "3" }}
            justifyContent={{ base: "space-between" }}
            w={{ base: "100%", md: "auto" }}
          >
            <Box as={"p"} fontWeight="bold">
              Species:
            </Box>
            <span>{pokemon.species.name}</span>
          </Flex>
        </Flex>
        <Flex display="flex" flexDirection="column" gap="3">
          <AbilityMenu data={pokemon.abilities} />
          <FormMenu data={pokemon.forms} />
          <TypesMenu data={pokemon.types} />
          <GameIndicesMenu data={pokemon.game_indices} />
          <StatsMenu data={pokemon.stats} />
          <MovesMenu data={pokemon.moves} />
        </Flex>
      </Box>
      <Flex flexDirection="column" alignItems="center" gap="4" my="8">
        <Box as={"h1"} fontWeight="bold">
          You might also like
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
          w="100%"
          justifyContent="center"
          className="animate__animated animate__fadeIn"
          px={{ base: "10", md: "20", lg: "32" }}
        >
          {pokemons
            .filter((pokemon) => pokemon.id !== Number(id))
            .slice(0, 3)
            .map((pokemon: SinglePokemon) => (
              <Box key={pokemon.id}>
                <Card pokemon={pokemon} />
              </Box>
            ))}
        </Grid>
      </Flex>
    </>
  );
};
