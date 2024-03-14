import { Navbar, Hero, SideBar } from "@/components";

import { db } from "@/db";
import { MoviesTable } from "@/db/schema";

import { Container, Stack, Box } from "@chakra-ui/react";
import { desc } from "drizzle-orm";
import { Suspense } from "react";
import { SideBarSkeleton } from "@/app/ui/skeletons";

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
    console.log("Fetching revenue data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
      <Container
        maxW={"100vw"}
        py={"20px"}
        px={"50px"}
        background={
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%)"
        }>
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
          <Suspense fallback={<SideBarSkeleton />}>
            <SideBar populares={movies} favorites={favorites} />
          </Suspense>
        </Stack>
      </Container>
    </Box>
  );
}
