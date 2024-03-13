import { Navbar, MovieCard, Hero, SideBar } from "@/components";

import { db } from "@/db";
import { MoviesTable } from "@/db/schema";

import {
  Container,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import { desc } from "drizzle-orm";

interface MovieProps {
  title: string;
  poster_path: string;
  release_date: string;
}

async function getMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getNowPlaying() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const data = await res.json();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return data.results[0];
}

async function getFavorites() {
  try {
    const data = await db
      .select()
      .from(MoviesTable)
      .orderBy(desc(MoviesTable.createdAt))
      .limit(4);
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default async function Home() {
  const movies = await getMovies();
  const nowPlaying = await getNowPlaying();
  const favorites = await getFavorites();

  return (
    <Box
      w={"full"}
      minH={"full"}
      backgroundImage={`https://image.tmdb.org/t/p/original/${nowPlaying.poster_path}`}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}>
      <Container maxW={"1232px"} py={"20px"}>
        <Navbar />
        <Stack
          flexDir={["column", "row"]}
          justify={"space-between"}
          alignItems={["center", "flex-end"]}>
          <Hero
            title={nowPlaying.title}
            isOriginal
            link="/"
            key={nowPlaying.title}
          />
          ;
          <SideBar populares={movies} favorites={favorites} />
        </Stack>
      </Container>
    </Box>
  );
}
