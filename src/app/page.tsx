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
    <Container maxW={"1232px"} h={"full"}>
      <Navbar />
      <Stack
        flexDir={["column", "row"]}
        justify={"space-between"}
        alignItems={["center", "flex-end"]}>
        <Hero title={"La casa de papel"} isOriginal link="/" />
        <Stack maxW={"200px"}>
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
      </Stack>
    </Container>
  );
}
