require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

export async function getMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getNowPlaying() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data.results[0];
}
