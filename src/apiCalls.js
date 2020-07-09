const url = "https://rancid-tomatillos.herokuapp.com/api/v2"

export const getMovies = async () => {
  const response = await fetch (
    `${url}/movies`
  );
  const movies = await response.json();
  const allMovies = movies.movies;
  return allMovies;
};

export const postLogin = async (email, password) => {
  const response = await fetch (
    `${url}/login`, {
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "body": JSON.stringify({
        "email": email,
        "password": password
      })
    }
  )
  // console.log(response)
  const message = await response.json();
  // console.log('message', message)
  return message;
}

export const getMovieDetails = async (movieId) => {
  const response = await fetch (
    `${url}/movies/${movieId}`
  );
  const movieDetails = await response.json();
  console.log(movieDetails)
  return movieDetails;
}

export const getUserRatings = async (userId) => {
  const response = await fetch(
    `${url}/users/${userId}/ratings`
  )
  const userRatings = await response.json();
  return userRatings;
}

export const postUserRating = async (userId, movieId, rating) => {
  const response = await fetch(
    `${url}/users/${userId}/ratings`, {
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "body": JSON.stringify({
        movie_id: `${movieId}`,
        rating:  `${rating}`
      })
    }
  )
  console.log(response)
  const message = await response.json();
  console.log('message', message)
  return message;
}

export const deleteUserRating = async (userId, ratingId, rating, movieId) => {
  const response = await fetch(
    `${url}/users/${userId}/ratings/${ratingId}`, {
      "method": "Delete",
      "headers": {
        "content-type": "application/json"
      },
      "body": JSON.stringify({
        movie_id: `${movieId}`,
        rating:  `${rating}`
      })
    }
  )
  const message = await response.json()
  return message;
}

