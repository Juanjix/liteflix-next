import { Navbar, Hero, SideBar } from "@/components";
import { Container, Stack, Box } from "@chakra-ui/react";
import { getNowPlaying, getMovies } from "@/lib/movieDb";
import { getFavorites } from "./actions";

export default async function Home() {
  const movies = await getMovies();
  const nowPlaying = await getNowPlaying();
  const favorites = await getFavorites();

  return (
    <Box
      w={"full"}
      minH={"full"}
      backgroundImage={`https://image.tmdb.org/t/p/original/${nowPlaying.poster_path}`}
      backgroundPosition={"top center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      // position={"absolute"}
      // zIndex={"100"}
      // transform={"scale(1, 1)"}
      // transition={"transform ease-in-out 1.2s"}>
    >
      <Container
        position={"relative"}
        maxW={"100vw"}
        py={"20px"}
        minH={"100vh"}
        px={["16px", "60px"]}
        background={
          "linear-gradient(175deg, rgba(0, 0, 0, 0) -50%, #000000 140%)"
        }>
        <Navbar />
        <Stack
          flexDir={["column", "column", "row"]}
          justify={"space-between"}
          alignItems={["center", "center", "flex-end"]}>
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
