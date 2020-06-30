export const getMovies = async () => {
    const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    const allMovies = await response.json();
    return allMovies;
}