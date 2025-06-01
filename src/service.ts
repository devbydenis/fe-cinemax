export const API_KEY = import.meta.env.VITE_API_KEY
export const BASE_URL = import.meta.env.VITE_BASE_URL
export const BASE_URL_IMG = import.meta.env.VITE_BASE_URL_IMG

// const urlNowPlayingMovie = `${BASE_URL}movie/now_playing?language=en-US&page=1`
const urlUpComingMovies = `${BASE_URL}movie/upcoming?language=en-US&page=2`
const urlGenre = `${BASE_URL}genre/movie/list?language=en`
const urlPopularMovies = `${BASE_URL}movie/popular?language=en-US&page=1`;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `${API_KEY}`
  }
};


export function getNowPlayingMovie(id) {
  console.log("id",id);
  const response = fetch(`${BASE_URL}movie/now_playing?language=en-US&page=${id}`, options);
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

