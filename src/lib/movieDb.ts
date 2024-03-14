export async function getMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getNowPlaying() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data.results[0];
}
