"use client";
import { Navbar, MovieCard, Hero } from "@/components";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Container,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW={"7xl"}>
      <Navbar />
      <Flex justify={"space-between"} alignItems={"flex-end"}>
        <Hero title={"La casa de papel"} isOriginal link="/" />
        <Stack w={220}>
          <Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Ver:
              </MenuButton>
              <MenuList>
                <MenuItem>Populares</MenuItem>
                <MenuItem>Mis Peliculas</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <MovieCard
            year={2003}
            title="La casa de papel"
            ranking={2}
            imageUrl="/images/image.png"
          />
          <MovieCard
            year={2003}
            title="La casa de papel"
            ranking={2}
            imageUrl="/images/image.png"
          />
          <MovieCard
            year={2003}
            title="La casa de papel"
            ranking={2}
            imageUrl="/images/image.png"
          />
        </Stack>
      </Flex>
    </Container>
  );
}
