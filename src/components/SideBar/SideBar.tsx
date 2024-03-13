"use client";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";

import { useState } from "react";
import { MovieCard } from "@/components";

interface MovieProps {
  title: string;
  poster_path: string;
  release_date: string;
}

interface FavoritesProps {
  title: string;
  image: string;
}

type Categories = "Populares" | "Favoritas";

interface SideBarProps {
  populares: any;
  favorites: any;
}

export const SideBar = (props: SideBarProps) => {
  const [showMovie, setShowMovie] = useState<Categories>("Populares");

  const { populares, favorites } = props;

  return (
    <Stack maxW={"200px"} spacing={4}>
      <Box>
        <Menu>
          <MenuButton as={Button} variant={"ghost"}>
            Ver: {showMovie}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setShowMovie("Populares")}>
              Populares
            </MenuItem>
            <MenuItem onClick={() => setShowMovie("Favoritas")}>
              Mis Peliculas
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      {showMovie === "Populares" &&
        populares.results
          .slice(0, 4)
          .map(({ title, poster_path, release_date }: MovieProps) => {
            return (
              <MovieCard
                year={release_date}
                title={title}
                ranking={2}
                imageUrl={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                key={title}
              />
            );
          })}
      {showMovie === "Favoritas" &&
        favorites.map(({ title, image }: FavoritesProps) => {
          return <MovieCard title={title} imageUrl={image} key={title} />;
        })}
    </Stack>
  );
};