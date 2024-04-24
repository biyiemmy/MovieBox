export default async function getSimilar(movieID: number) {
  const api_url = `${process.env.TMDB_BASE_URL}/movie/${movieID}/recommendations?language=en-US&api_key=${process.env.TMDB_API_KEY}`;
  const res = await fetch(api_url);

  if (!res.ok) throw new Error("Cannot get movie details");

  return res.json();
}

export const fetchSeriesVideo = async () => {
  try {
    const response = await fetch(
      `${process.env.TMDB_BASE_URL}/tv/${1}/videos?language=en-US`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }

    const data = await response.json();
    console.log(data.results);
    // return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const fetchMoviesVideo = async (movie: number) => {
  console.log(movie);
  try {
    const response = await fetch(
      `${process.env.TMDB_BASE_URL}/movie/${movie}/videos?language=en-US&api_key=${process.env.TMDB_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }

    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const fetchTrending = async () => {
  try {
    const response = await fetch(
      `${process.env.TMDB_BASE_URL}/trending/all/day?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }

    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

fetchTrending();

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `${process.env.TMDB_BASE_URL}/movie/popular?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }

    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

fetchPopularMovies();

export const fetchPopularSeries = async () => {
  try {
    const response = await fetch(
      `${process.env.TMDB_BASE_URL}/tv/popular?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }

    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

fetchPopularSeries();

export const fetchAllPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${process.env.TMDB_BASE_URL}/movie/popular?language=en-US&page=${page}&api_key=${process.env.TMDB_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }

    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

fetchAllPopularMovies();
