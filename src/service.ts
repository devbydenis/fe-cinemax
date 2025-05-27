export const API_KEY = import.meta.env.VITE_API_KEY
export const BASE_URL = import.meta.env.BASE_URL
// const url = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
const urlNowPlayingMovie = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`
const urlUpComingMovies = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`
const urlGenre = `https://api.themoviedb.org/3/genre/movie/list?language=en`
const urlPopularMovies = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};


export function getNowPlayingMovie() {
  const response = fetch(urlNowPlayingMovie, options);
  return response
}

export function getGenres() {
  const response = fetch(urlGenre, options);
  return response
}

export function getUpComingMovies() {
  const response = fetch(urlUpComingMovies, options)
  return response
}

export function getPopularMovies() {
  const response = fetch(urlPopularMovies, options)
  return response
}

