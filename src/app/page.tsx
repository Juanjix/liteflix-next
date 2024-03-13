import { Navbar, MovieCard, Hero } from "@/components";

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

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const movies = await getMovies();
  const nowPlaying = await getNowPlaying();

  return (
    <Box
      w={"full"}
      minH={"full"}
      backgroundImage={`https://image.tmdb.org/t/p/original/${nowPlaying.results[0].poster_path}`}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}>
      <Container maxW={"1232px"} py={"20px"}>
        <Navbar />
        <Stack
          flexDir={["column", "row"]}
          justify={"space-between"}
          alignItems={["center", "flex-end"]}>
          {nowPlaying.results.slice(0, 1).map(({ title }: MovieProps) => {
            return <Hero title={title} isOriginal link="/" key={title} />;
          })}
          <Stack maxW={"200px"} spacing={4}>
            <Box>
              <Menu>
                <MenuButton as={Button} variant={"ghost"}>
                  Ver:
                </MenuButton>
                <MenuList>
                  <MenuItem>Populares</MenuItem>
                  <MenuItem>Mis Peliculas</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            {movies.results
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
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
