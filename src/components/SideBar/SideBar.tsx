"use client";

import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { MovieCard } from "@/components";
import { ChevronDown, Check } from "lucide-react";
import { Categories, FavoritesProps, MovieProps, SideBarProps } from "@/types";
import { motion } from "framer-motion";

export const SideBar = (props: SideBarProps) => {
  const [showMovie, setShowMovie] = useState<Categories>("Populares");

  const { populares, favorites } = props;

  return (
    <Stack maxW={"327px"} spacing={4}>
      <Box
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition="all 0.5s">
        <Menu>
          <MenuButton
            as={Button}
            variant={"ghost"}
            fontWeight={400}
            margin={"0 auto"}
            display={"flex"}>
            Ver:
            <Text
              display={"inline-flex"}
              alignItems={"center"}
              fontWeight={"700"}>
              {showMovie} <ChevronDown />
            </Text>
          </MenuButton>
          <MenuList
            backgroundColor={"darkgrey"}
            color={"white"}
            borderColor={"darkgrey"}
            py={"10px"}
            px={"10px"}
            mt={"18px"}>
            <MenuItem
              onClick={() => setShowMovie("Populares")}
              backgroundColor={"darkgrey"}
              justifyContent={"space-between"}
              fontWeight={showMovie === "Populares" ? "bold" : "normal"}>
              Populares
              {showMovie === "Populares" && (
                <Check width={"22px"} height={"18px"} />
              )}
            </MenuItem>
            <MenuItem
              onClick={() => setShowMovie("Favoritas")}
              backgroundColor={"darkgrey"}
              color={"white"}
              justifyContent={"space-between"}
              fontWeight={showMovie === "Favoritas" ? "bold" : "normal"}>
              Favoritas
              {showMovie === "Favoritas" && (
                <Check width={"22px"} height={"18px"} />
              )}
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      {showMovie === "Populares" &&
        populares.results
          .slice(0, 4)
          .map(
            ({
              title,
              poster_path,
              release_date,
              vote_average,
            }: MovieProps) => {
              return (
                <MovieCard
                  year={release_date.substring(0, 4)}
                  title={title}
                  ranking={vote_average}
                  imageUrl={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  key={title}
                />
              );
            }
          )}
      {showMovie === "Favoritas" &&
        favorites.map(({ title, image }: FavoritesProps) => {
          return (
            <MovieCard
              title={title}
              imageUrl={image}
              ranking={5.4}
              year="2024"
              key={title}
            />
          );
        })}
    </Stack>
  );
};
