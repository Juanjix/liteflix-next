"use client";
import { Navbar, MovieCard } from "@/components";
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
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW={"container.lg"}>
      <Navbar />
      <Stack float={"right"} mt={"80px"}>
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Ver:
            </MenuButton>
            <MenuList>
              <MenuItem>Populares</MenuItem>
              <MenuItem>Peliculas</MenuItem>
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
    </Container>
  );
}
