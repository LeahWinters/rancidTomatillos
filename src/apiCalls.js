export const getMovies = async () => {
  const response = await fetch(
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
  );
  const movies = await response.json();
  const allMovies = movies.movies;
  return allMovies;
};
